/* GolfVX DS Showcase — shared shell.
 * Renders GNB, sidebar, breadcrumb, TOC ("On this page") and footer from GVX_NAV.
 * A page declares itself with <body data-section="foundations" data-page="color">.
 */
(function () {
  var script = document.currentScript;
  var ROOT = script.src.replace(/assets\/js\/layout\.js(\?.*)?$/, "");
  var NAV = window.GVX_NAV;
  var body = document.body;
  var section = body.dataset.section || "";
  var pageId = body.dataset.page || "";

  function url(path) { return ROOT + path; }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* theme */
  var THEME_KEY = "gvx-theme";
  function storedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  applyTheme(storedTheme());
  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  /* GNB */
  var gnbHost = document.getElementById("gvx-gnb");
  if (gnbHost) {
    var menu = NAV.gnb.map(function (g) {
      return '<a href="' + url(g.href) + '"' + (g.id === section ? ' aria-current="page"' : "") + ">" + g.label + "</a>";
    }).join("");
    gnbHost.outerHTML =
      '<header class="gnb"><a class="logo" href="' + url("") + '" aria-label="GolfVX DS 홈">GOLF<b>VX</b></a>' +
      '<div class="gnb-right"><nav class="gnb-menu" aria-label="주요 메뉴">' + menu + "</nav>" +
      '<button class="theme-btn" type="button" id="gvx-theme" aria-label="라이트/다크 모드 전환">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>' +
      "</button></div></header>";
    document.getElementById("gvx-theme").addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* Sidebar */
  var current = null;
  var sbHost = document.getElementById("gvx-sidebar");
  var groups = NAV.sidebar[section];
  if (sbHost && groups) {
    var html = groups.map(function (g) {
      var items = g.items.map(function (it) {
        if (it.id === pageId) current = it;
        return '<a class="nav-item" href="' + url(it.href) + '"' + (it.id === pageId ? ' aria-current="page"' : "") + ">" + it.label + "</a>";
      }).join("");
      return '<div class="nav-group">' + (g.label ? '<div class="nav-label">' + g.label + "</div>" : "") + items + "</div>";
    }).join("");
    var aside = el("aside", { class: "sidebar", "aria-label": "섹션 메뉴" }, html);
    sbHost.replaceWith(aside);
  } else {
    if (sbHost) sbHost.remove();
    var lay = document.querySelector(".layout");
    if (lay) lay.classList.add("no-sidebar");
  }

  /* Breadcrumb: GolfVX DS › {섹션} › {페이지} */
  var crumbHost = document.getElementById("gvx-crumb");
  if (crumbHost) {
    var sec = NAV.gnb.filter(function (g) { return g.id === section; })[0];
    var parts = ["GolfVX DS"];
    if (sec) parts.push(sec.label);
    if (current) parts.push(current.label);
    crumbHost.className = "crumb";
    crumbHost.innerHTML = parts.join("<span>›</span>");
  }

  /* Footer */
  var ftHost = document.getElementById("gvx-footer");
  if (ftHost) {
    ftHost.outerHTML = '<footer class="footer"><div class="footer-in"><span>© 2026 KakaoVX, Inc.</span><span>More Information ▼</span></div></footer>';
  }

  /* Tabs (generic): [role=tablist] > [role=tab][aria-controls] */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("aria-controls");
        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
          var p = document.getElementById(t.getAttribute("aria-controls"));
          if (p) p.hidden = p.id !== target;
        });
        document.dispatchEvent(new CustomEvent("gvx:tab", { detail: { tablist: list.id, tab: tab.dataset.value } }));
        buildToc();
      });
    });
  });

  /* TOC: built from visible .section > h2[id] */
  var tocHost = document.getElementById("gvx-toc");
  var tocEl = null;
  function buildToc() {
    if (!tocHost && !tocEl) return;
    var heads = Array.prototype.filter.call(document.querySelectorAll(".main .section > h2[id]"), function (h) {
      return h.offsetParent !== null;
    });
    var links = heads.map(function (h) {
      return '<a href="#' + h.id + '" data-id="' + h.id + '">' + (h.dataset.toc || h.firstChild.textContent.trim()) + "</a>";
    }).join("");
    var html = '<div class="toc-title">On this page</div>' + links;
    if (!tocEl) {
      tocEl = el("nav", { class: "toc", "aria-label": "On this page" }, html);
      tocHost.replaceWith(tocEl);
    } else tocEl.innerHTML = html;
    spy(heads);
  }
  var observer = null;
  function spy(heads) {
    if (!("IntersectionObserver" in window)) return;
    if (observer) observer.disconnect();
    var setOn = function (id) {
      tocEl.querySelectorAll("a").forEach(function (a) { a.classList.toggle("on", a.dataset.id === id); });
    };
    if (heads[0]) setOn(heads[0].id);
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setOn(e.target.id); });
    }, { rootMargin: "-60px 0px -70% 0px" });
    heads.forEach(function (h) { observer.observe(h); });
  }
  window.GVX = { url: url, buildToc: buildToc, isDark: isDark };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildToc);
  else buildToc();
})();
