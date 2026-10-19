/* GolfVX DS Showcase — component page renderer.
 * 1) Generates --t-<token> CSS variables (light + dark) from GVX_TOKENS.semantic
 * 2) Renders 설명 → 프리뷰 → Anatomy → 속성 → 적용 토큰 → Guidelines from GVX_COMPONENTS[data-page]
 */
(function () {
  var T = window.GVX_TOKENS, C = window.GVX_COMPONENTS;
  var varName = function (tok) { return "--t-" + tok.replace(/[\/_]/g, "-"); };

  var light = [], dark = [];
  T.semantic.forEach(function (g) {
    g.tokens.forEach(function (t) {
      light.push(varName(t[0]) + ":" + T.resolve(t[1]));
      dark.push(varName(t[0]) + ":" + T.resolve(t[2]));
    });
  });
  var css = ":root{" + light.join(";") + "}" +
    '@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){' + dark.join(";") + "}}" +
    ':root[data-theme="dark"]{' + dark.join(";") + "}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var id = document.body.dataset.page;
  var d = C[id];
  var main = document.getElementById("main");
  if (!d || !main) return;

  function table(head, rows, mono) {
    return '<div class="table"><div class="tr th kv"><span>' + head[0] + "</span><span>" + head[1] + "</span></div>" +
      rows.map(function (r) {
        return '<div class="tr kv"><span class="k">' + r[0] + '</span><span class="' + (mono ? "m" : "v") + '">' + r[1] + "</span></div>";
      }).join("") + "</div>";
  }

  var html =
    '<div id="gvx-crumb"></div>' +
    '<header class="page-head"><h1 class="page-title">' + d.title + '</h1><p class="page-desc">' + d.desc + "</p>" +
    (d.flutter ? '<p class="flutter">Flutter · <code>' + d.flutter + "</code></p>" : "") + "</header>" +
    '<section class="section"><h2 id="preview">Preview</h2><div class="preview">' + d.preview() + "</div>" +
    (d.todo ? '<p class="desc" style="margin-top:12px"><span class="todo">TODO</span> ' + d.todo + "</p>" : "") + "</section>" +
    '<section class="section"><h2 id="anatomy">Anatomy</h2><p class="desc">' + d.title + "을 구성하는 요소입니다.</p>" +
    '<ol class="anatomy">' + d.anatomy.map(function (a) { return "<li><b>" + a[0] + "</b><span>" + a[1] + "</span></li>"; }).join("") + "</ol></section>" +
    '<section class="section"><h2 id="properties">Properties</h2><p class="desc">' + d.title + "에서 설정 가능한 속성입니다.</p>" + table(["Property", "Values"], d.props, false) + "</section>" +
    '<section class="section"><h2 id="tokens" data-toc="적용 토큰">적용 토큰</h2><p class="desc">' + (d.tokensCol === "Element" ? "요소" : "Variant") + "별로 사용하는 Semantic 토큰입니다.</p>" +
    table([d.tokensCol || "Variant", "Token"], d.tokens, true) + "</section>" +
    '<section class="section"><h2 id="guidelines">Guidelines</h2><ul class="guide">' + d.guidelines.map(function (g) { return "<li>" + g + "</li>"; }).join("") + "</ul></section>";
  main.innerHTML = html;
})();
