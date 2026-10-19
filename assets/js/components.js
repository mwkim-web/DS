/* GolfVX DS Showcase — component documentation data (single source for component pages).
 * Source: GolfVX Flutter library (Vf2tgqJpswkexr4nuRP0M0) component sets, variable bindings and
 * component descriptions; showcase wireframes WF-08 ~ WF-23.
 * Colors in previews use var(--t-<token>) generated from GVX_TOKENS by component-page.js.
 */
window.GVX_COMPONENTS = {
  button: {
    title: "Button",
    desc: "사용자의 명확한 액션을 유도하는 기본 인터랙션 컴포넌트입니다.",
    flutter: "CommonButton (utils_ui/widgets/common/common_button.dart)",
    preview: function () {
      var styles = ["Primary", "Secondary", "Outlined", "Destructive"];
      var rows = styles.map(function (s) {
        var k = s.toLowerCase();
        return '<div class="pv-row"><span class="pv-label">' + s + "</span>" +
          '<button class="gvx-btn ' + k + '">Continue</button>' +
          '<button class="gvx-btn ' + k + '" disabled>Continue</button>' +
          '<button class="gvx-btn ' + k + ' sm">Continue</button></div>';
      }).join("");
      return '<div class="pv-grid"><div class="pv-row pv-head"><span></span><span>Default</span><span>Disabled</span><span>Small</span></div>' + rows + "</div>";
    },
    anatomy: [
      ["Container", "높이 48 (Small 36) · radius/inf · 좌우 padding spacing/20"],
      ["Icon (선택)", "Has icon 속성 · 18×18 · 아이콘과 라벨 간격 spacing/8"],
      ["Label", "Body/B2/Bold_uppercase (Small: Body/B4/Bold_uppercase)"]
    ],
    props: [
      ["Style", "Primary · Secondary · Outlined · Destructive"],
      ["Size", "Default · Small"],
      ["State", "Default · Disabled"],
      ["Label", "Text"],
      ["Has icon / Icon", "Boolean / Instance swap"]
    ],
    tokens: [
      ["Primary", "primary/normal · label/normal_on_primary"],
      ["Secondary", "fill/inverse · label/inverse_secondary"],
      ["Outlined", "fill/normal · line/strong · label/normal"],
      ["Destructive", "status/negative · label/inverse_secondary"],
      ["Disabled", "fill/disable · label/disable (Outlined: + line/disable)"]
    ],
    guidelines: [
      "Primary는 Hero CTA로 화면당 1개만 사용합니다.",
      "Secondary는 인라인 CTA 또는 입력 필드 trailing 버튼에 사용합니다.",
      "Outlined는 취소 · 부정 · 보조 액션에 사용합니다.",
      "Destructive는 삭제 등 되돌릴 수 없는 액션에만 사용합니다.",
      "높이: Default 48 (Secondary 40) · Small 36."
    ]
  },

  "status-pill": {
    title: "Status Pill",
    desc: "상태를 색상 톤으로 구분해 표시하는 필 컴포넌트입니다.",
    flutter: "PlanStatusPill (ui/core/components/plan_status_pill.dart)",
    preview: function () {
      var tones = [["Positive", "positive", "ACTIVE"], ["Negative", "negative", "PAUSED"], ["Info", "info", "UPCOMING"], ["Cautionary", "cautionary", "HOLD"], ["Neutral", "neutral", "CLOSED"]];
      return '<div class="pv-inline">' + tones.map(function (t) {
        return '<div class="pv-item"><span class="gvx-pill ' + t[1] + '">' + t[2] + '</span><span class="pv-cap">' + t[0] + "</span></div>";
      }).join("") + "</div>";
    },
    anatomy: [
      ["Container", "높이 24 · radius/inf · padding spacing/8 · spacing/4 · dot 없음"],
      ["Label", "Caption/C1/Bold · 텍스트 override"]
    ],
    props: [["Tone", "Positive · Negative · Info · Cautionary · Neutral"], ["Label", "Text"]],
    tokens: [
      ["Positive", "status/positive_subtle · status/positive"],
      ["Negative", "status/negative_subtle · status/negative"],
      ["Info", "status/info_subtle · status/info"],
      ["Cautionary", "status/cautionary_subtle · status/cautionary"],
      ["Neutral", "fill/disable · label/secondary"]
    ],
    guidelines: [
      "Membership 플랜 카드의 ACTIVE · CURRENT · PAUSED 등 상태 표시에 사용합니다.",
      "배경은 status/*_subtle, 텍스트는 같은 톤의 status/* 를 사용합니다.",
      "dot + 라벨 형태의 주문 상태는 Order Status Pill, 배경 없는 dot + text 는 별도 패턴입니다."
    ]
  },

  scorecard: {
    title: "Scorecard",
    desc: "라운드 스코어와 결과 등급을 표시하는 스코어카드 컴포넌트입니다.",
    flutter: null,
    preview: function () {
      var tiers = [["Eagle", "eagle"], ["Birdie", "birdie"], ["Par", "par"], ["Bogey", "bogey"], ["Double", "double"]];
      var cells = tiers.map(function (t) {
        return '<div class="pv-item"><span class="gvx-cell ' + t[1] + '"><i></i><b>4</b></span><span class="pv-cap">' + t[0] + "</span></div>";
      }).join("");
      var ratings = ["S", "A", "B", "C"].map(function (r) { return '<span class="gvx-rating r-' + r.toLowerCase() + '">' + r + "</span>"; }).join("");
      var match = '<span class="gvx-match up">2 UP</span><span class="gvx-match down">1 DN</span><span class="gvx-match as">AS</span>';
      return '<div class="pv-stack"><div class="pv-inline">' + cells + '</div><div class="pv-inline"><span class="pv-cap">Rating Badge</span>' + ratings +
        '</div><div class="pv-inline"><span class="pv-cap">Match</span>' + match + "</div></div>";
    },
    anatomy: [
      ["Score Cell", "32×24 · Tier별 shape(18) + Number(Caption/C2/Bold). 그리드에서 너비 FILL"],
      ["Shape", "Eagle · Birdie = 원 / Bogey · Double = 사각(r2) / Par = 없음"],
      ["Rating Badge", "22×22 원형 · 흰 글자(Caption/C2/Bold)"]
    ],
    props: [
      ["Score Cell / Tier", "Eagle · Birdie · Par · Bogey · Double"],
      ["Score Cell / Number", "Text"],
      ["Rating Badge / Rating", "S · A · B · C"],
      ["구성 요소", "Round Card · Player Card · Team Card · Stat Row · Score Legend"]
    ],
    tokens: [
      ["Eagle", "scorecard/fill/eagle · scorecard/label/eagle"],
      ["Birdie", "scorecard/line/birdie · scorecard/label/birdie"],
      ["Par", "scorecard/label/par"],
      ["Bogey", "scorecard/line/bogey · scorecard/label/bogey"],
      ["Double", "scorecard/fill/double · scorecard/label/double"],
      ["Rating S · A · B · C", "rating/fill/s · a · b · c · label/inverse_secondary"],
      ["Match", "scorecard/label/match_up · match_down · match_allsquared"]
    ],
    guidelines: [
      "Eagle · Double은 배경 칩, Birdie · Bogey는 테두리와 글자색, Par는 무색으로 표현합니다.",
      "Rating Badge: S = positive, A = label-primary, B = label-secondary, C = cautionary 계열 원형 + 흰 글자.",
      "Match 표기는 up(red) · down(blue) · all squared(grey)로 구분합니다."
    ],
    todo: "Match 표기 문구(2 UP / 1 DN / AS)는 예시 — 실제 라벨 확인 필요"
  },

  "bottom-navigation": {
    title: "Bottom Navigation",
    desc: "화면 하단 주요 섹션 이동을 위한 내비게이션 컴포넌트입니다.",
    flutter: "BottomNavigationBar (ui/features/main)",
    preview: function () {
      var tabs = [["Home", "home"], ["Book", "calendar"], ["Competition", "trophy"], ["Report", "report"], ["Me", "user"]];
      var I = {
        home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
        calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
        trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.8 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.2.6 2 2 2 3.8M18 2H6v7a6 6 0 0 0 12 0z"/>',
        report: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
        user: '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>'
      };
      var bar = tabs.map(function (t, i) {
        var on = i === 0;
        return '<span class="gvx-tab' + (on ? " on" : "") + '"><svg viewBox="0 0 24 24" fill="' + (on ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + I[t[1]] + "</svg><em>" + t[0] + "</em></span>";
      }).join("");
      return '<div class="gvx-bnav">' + bar + "</div>";
    },
    anatomy: [
      ["Container", "너비 FILL · padding spacing/12 (위) · spacing/8 (좌우) · 상단 보더"],
      ["Tab", "아이콘 24 + 라벨, 간격 spacing/4"],
      ["Icon", "활성 = Filled, 비활성 = Outline"],
      ["Label", "Caption/C1 — 활성 Bold, 비활성 Medium"]
    ],
    props: [["Active", "Home · Book · Competition · Report · Me"]],
    tokens: [
      ["배경", "fill/normal"],
      ["상단 보더", "line/disable"],
      ["Active 아이콘", "primary/normal"],
      ["Active 라벨", "label/normal"],
      ["Inactive", "label/disable (아이콘 · 라벨)"]
    ],
    tokensCol: "Element",
    guidelines: [
      "현재 선택된 탭은 Filled 아이콘 + Bold 라벨, 나머지는 Outline 아이콘 + Medium 라벨로 표시합니다.",
      "탭 라벨은 짧은 명사로 유지합니다."
    ],
    todo: "DS 컴포넌트 설명은 4탭(Home/Book/Competition/Me)이지만 variant는 Report 포함 5탭 — 탭 구성 확인 필요"
  }
};
