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
  ,switch: {
    title: "Switch",
    desc: "사용자가 설정을 켜거나 끌 수 있는 토글 컴포넌트입니다.",
    flutter: "CommonSwitch (utils_ui/widgets/common/common_switch.dart)",
    preview: function () {
      return '<div class="pv-inline">' + [["On", "on"], ["Off", "off"]].map(function (s) {
        return '<div class="pv-item"><span class="gvx-switch ' + s[1] + '" role="switch" aria-checked="' + (s[1] === "on") + '"><i></i></span><span class="pv-cap">' + s[0] + "</span></div>";
      }).join("") + "</div>";
    },
    anatomy: [
      ["Track", "44×28 · radius/inf · inset 4 (DS 노드 기준)"],
      ["Thumb", "20×20 원형 · Off = 좌측, On = 우측 정렬"]
    ],
    props: [["State", "Off · On"]],
    tokens: [
      ["On", "primary/normal (트랙) · fill/normal (노브)"],
      ["Off", "fill/disable (트랙) · fill/normal (노브)"]
    ],
    guidelines: [
      "즉시 반영되는 설정의 켜기/끄기에 사용합니다.",
      "Disabled variant는 DS에 정의되어 있지 않습니다."
    ],
    todo: "DS 설명은 44×26 · inset 3 이지만 컴포넌트 노드는 44×28 · padding 4 — 실제 사양 확인 필요"
  },

  textfield: {
    title: "TextField",
    desc: "텍스트 입력을 위한 컴포넌트입니다.",
    flutter: "CommonTextField (utils_ui/widgets/common/common_text_field.dart)",
    preview: function () {
      var f = function (state, style, val, ph, helper) {
        return '<div class="gvx-field ' + style + " " + state + '"><label>Email <b>*</b></label><div class="box"><span class="' + (ph ? "ph" : "val") + '">' + val + "</span></div>" +
          (helper ? '<small>' + helper + "</small>" : "") + "</div>";
      };
      return '<div class="pv-fields">' +
        '<div><p class="pv-cap">Outlined · Default</p>' + f("default", "outlined", "you@example.com", true) + "</div>" +
        '<div><p class="pv-cap">Outlined · Focus</p>' + f("focus", "outlined", "you@example.com") + "</div>" +
        '<div><p class="pv-cap">Outlined · Error</p>' + f("error", "outlined", "you@example", false, "올바른 이메일 형식이 아닙니다.") + "</div>" +
        '<div><p class="pv-cap">Outlined · Disabled</p>' + f("disabled", "outlined", "you@example.com", true) + "</div>" +
        '<div><p class="pv-cap">Filled · Default</p>' + f("default", "filled", "you@example.com", true) + "</div>" +
        "</div>";
    },
    anatomy: [
      ["Label", "Body/B4/Medium · Required(*) 선택"],
      ["Box", "높이 56 · radius/l (8) · 좌우 padding 16 · Filled = fill/elevated, Outlined = line/normal 테두리"],
      ["Value / Placeholder", "Body/B2/Medium"],
      ["Trailing (선택)", "24×24 — Send Code · Verified · Counter 등"],
      ["Helper", "Body/B5/Regular · Error 시 status/negative"]
    ],
    props: [
      ["Style", "Filled · Outlined"],
      ["State", "Default · Focus · Error · Disabled"],
      ["Has label / Label / Required", "Boolean / Text / Boolean"],
      ["Helper", "Text"],
      ["Has trailing / Trailing", "Boolean / Instance swap"],
      ["관련 컴포넌트", "TextField / Multiline (342×132, 상단 정렬)"]
    ],
    tokens: [
      ["Default", "line/normal · label/assistive (placeholder)"],
      ["Focus", "line/focus (divider/thick 1.5) · label/normal"],
      ["Error", "line/error (1.5) · label/normal · status/negative (helper)"],
      ["Disabled", "fill/normal · line/normal · label/disable"],
      ["Filled 스타일", "fill/elevated (필드 배경)"],
      ["Label · Helper", "label/secondary"]
    ],
    guidelines: [
      "Focus · Error 상태의 테두리는 divider/thick (1.5px)을 사용합니다.",
      "자유 서술(대회 설명 등)은 TextField / Multiline을 사용합니다.",
      "에러 메시지는 Helper 위치에 status/negative로 표시합니다."
    ],
    todo: "Error helper 문구는 예시"
  },

  dropdown: {
    title: "Dropdown",
    desc: "목록에서 하나의 옵션을 선택하는 컴포넌트입니다.",
    flutter: "CommonDropdown (utils_ui/widgets/common/common_dropdown.dart)",
    preview: function () {
      var items = [["Option 1", 1], ["Option 2", 0], ["Option 3", 0], ["Option 4", 0]];
      var chev = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
      var check = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      return '<div class="pv-stack" style="align-items:flex-start"><span class="gvx-dd-trigger">Arlington Heights ' + chev + '</span><div class="gvx-dd-panel">' +
        items.map(function (i) { return '<div class="gvx-dd-item' + (i[1] ? " on" : "") + '"><span>' + i[0] + "</span>" + (i[1] ? check : "<i></i>") + "</div>"; }).join("") + "</div></div>";
    },
    anatomy: [
      ["Trigger", "compact pill · 높이 34 · radius/inf · Body/B5/Bold + chevron 12"],
      ["Panel", "너비 220 · radius/xl (16) · padding-block 8 · Shadow/Popup · line/normal 테두리"],
      ["Item", "높이 44 · padding 12 · 16 · Body/B3 — Selected는 Bold + check 16"]
    ],
    props: [["구성", "Trigger · Panel · Item"], ["Item / State", "Default · Selected"], ["Item / Label", "Text"]],
    tokens: [
      ["Trigger", "fill/normal · line/normal · label/normal"],
      ["Panel", "fill/normal · line/normal · Shadow/Popup"],
      ["Item (Default)", "label/secondary"],
      ["Item (Selected)", "label/normal (텍스트 · 체크)"]
    ],
    guidelines: [
      "단일 선택에 사용합니다. 예: Home Plans 매장 선택.",
      "폼 필드형 트리거(radius 8, full-width)는 별도 패턴입니다."
    ]
  },

  checkbox: {
    title: "Checkbox",
    desc: "약관 동의 등 항목의 선택 여부를 표시하는 컴포넌트입니다.",
    flutter: null,
    preview: function () {
      var off = '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
      var on = '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7.5 12.5 3 3 6-6.5" fill="none" stroke="var(--t-fill-normal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      return '<div class="pv-inline"><div class="pv-item"><span class="gvx-check off">' + off + '</span><span class="pv-cap">Off</span></div><div class="pv-item"><span class="gvx-check on">' + on + '</span><span class="pv-cap">On</span></div></div>';
    },
    anatomy: [["Indicator", "24×24 원형 — Off = 테두리, On = 채운 원 + 흰 체크"]],
    props: [["State", "Off · On"], ["용도", "약관 동의 (Agreement / Row와 함께 사용)"]],
    tokens: [["On", "label/normal (원) · fill/normal (체크)"], ["Off", "label/assistive"]],
    guidelines: [
      "DS 컴포넌트 이름은 Agreement / Checkbox — 약관 동의 행에서 사용합니다.",
      "amber 배경은 흰 체크와 대비가 약해 사용하지 않습니다."
    ],
    todo: "DS 설명은 Off = line/strong 테두리이나 변수 바인딩은 label/assistive — 확인 필요"
  },

  appbar: {
    title: "AppBar",
    desc: "화면 상단 내비게이션 바 컴포넌트입니다.",
    flutter: "CommonAppBar (utils_ui/widgets/common/common_app_bar.dart)",
    preview: function () {
      var back = '<span class="back"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></span>';
      return '<div class="pv-stack" style="align-items:flex-start"><p class="pv-cap">Show back = True</p><div class="gvx-appbar back-on">' + back + '<b>SIGN UP</b></div>' +
        '<p class="pv-cap">Show back = False</p><div class="gvx-appbar"><b>HOME</b></div></div>';
    },
    anatomy: [
      ["Container", "높이 52 · 좌 padding 12 (Back 노출) / 20 (미노출) · 우 20"],
      ["Back (선택)", "36×36 슬롯 · Chevron / Left 24 · 타이틀과 간격 8"],
      ["Title", "Body/B3/Bold_uppercase · 좌측 정렬"]
    ],
    props: [["Show back", "True · False"], ["Title", "Text"]],
    tokens: [["배경", "fill/normal"], ["타이틀", "label/normal"], ["아이콘", "label/normal"]],
    tokensCol: "Element",
    guidelines: [
      "Show back = True는 하위 화면, False는 탭 진입 화면에 사용합니다.",
      "타이틀은 좌측 정렬, 대문자로 표시합니다."
    ],
    todo: "AppBar / Home(홈 전용 AppBar)은 별도 컴포넌트 — 문서화 범위 확인 필요"
  },

  tabbar: {
    title: "TabBar",
    desc: "콘텐츠 카테고리 전환을 위한 탭 컴포넌트입니다. 3-way / 4-way 제공.",
    flutter: "CommonTabBar<T> (utils_ui)",
    preview: function () {
      var bar = function (labels) { return '<div class="gvx-tabbar">' + labels.map(function (l, i) { return '<span class="' + (i === 0 ? "on" : "") + '">' + l + "</span>"; }).join("") + "</div>"; };
      return '<div class="pv-stack" style="align-items:stretch;width:342px;max-width:100%"><p class="pv-cap">3-way</p>' + bar(["Overall", "Front", "Back"]) +
        '<p class="pv-cap">4-way</p>' + bar(["All", "Upcoming", "Ongoing", "Closed"]) + "</div>";
    },
    anatomy: [
      ["Item", "높이 44 · padding 12 · 16 · Body/B4/Bold_uppercase · 같은 폭(FILL)"],
      ["Indicator", "하단 2px — Active = 인디케이터, Inactive = 회색 track"]
    ],
    props: [["Active (3-way)", "First · Second · Third"], ["Active (4-way)", "First · Second · Third · Fourth"], ["Item / State", "Active · Inactive"], ["Item / Label", "Text"]],
    tokens: [
      ["Active", "label/normal · primary/normal (인디케이터)"],
      ["Inactive", "label/alternative · line/normal (하단 선)"]
    ],
    guidelines: [
      "Item을 가로로 flush 조립해 끊김 없는 레일 위에 활성 구간만 표시합니다.",
      "가변 개수는 Item을 직접 조립하고, 3 · 4개는 N-way 컴포넌트를 사용합니다."
    ],
    todo: "DS 설명은 인디케이터 #3A3A3C(진한 회색)이나 변수 바인딩은 primary/normal — 확인 필요"
  },

  segmented: {
    title: "Segmented",
    desc: "여러 옵션 중 하나를 선택하는 세그먼트 컨트롤 컴포넌트입니다.",
    flutter: null,
    preview: function () {
      var seg = function (labels, on) { return '<div class="gvx-seg">' + labels.map(function (l, i) { return '<span class="' + (i === on ? "on" : "") + '">' + l + "</span>"; }).join("") + "</div>"; };
      return '<div class="pv-stack"><p class="pv-cap">2-way</p>' + seg(["Stroke", "Match"], 0) + '<p class="pv-cap">3-way</p>' + seg(["Scramble", "Foursome", "Fourball"], 1) + "</div>";
    },
    anatomy: [
      ["Container", "2-way 240×44 / 3-way 342×44 · radius/l (8) · padding 4"],
      ["Cell", "높이 36 · radius 8 · Active = 흰 채움 + Bold, Inactive = 투명 + Medium (Body/B4)"]
    ],
    props: [["Active (2-way)", "First · Second"], ["Active (3-way)", "First · Second · Third"], ["Cell / State", "Active · Inactive"], ["Cell / Label", "Text"]],
    tokens: [["Container", "fill/elevated"], ["Selected", "fill/normal · label/normal"], ["Unselected", "label/secondary"]],
    guidelines: [
      "Entry format · Scoring · Visibility 등 2~3지 선택 폼에 사용합니다.",
      "radio-card 형태로 대체하지 않으며, 셀에는 그림자를 쓰지 않습니다."
    ]
  }
  ,badge: {
    title: "Badge",
    desc: "멤버십 등급(Bronze · Silver · Gold · Platinum)을 표시하는 뱃지 컴포넌트입니다. 상태 톤 표시는 Status Pill · Chip을 사용합니다.",
    flutter: "CommonGradeBadge (gradient.*Start)",
    preview: function () {
      var A = window.GVX_TOKENS.atomic;
      var shapes = {
        triangle: '<path d="M5.5 1 10.5 10H.5z"/>', square: '<rect x="1" y="1" width="9" height="9" rx="1"/>',
        pentagon: '<path d="M5.5.6 10.4 4.2 8.5 10H2.5L.6 4.2z"/>', hexagon: '<path d="M5.5.5 10 3v5l-4.5 2.5L1 8V3z"/>'
      };
      var g = [["BRONZE", "welcome", "triangle"], ["SILVER", "silver", "square"], ["GOLD", "gold", "pentagon"], ["PLATINUM", "platinum", "hexagon"]];
      return '<div class="pv-inline">' + g.map(function (x) {
        return '<div class="pv-item"><span class="gvx-grade" style="background:' + A["gradient/" + x[1] + "-start"] + '"><svg viewBox="0 0 11 11" width="11" height="11" fill="currentColor">' + shapes[x[2]] + "</svg>" + x[0] +
          '</span><span class="pv-cap">gradient/' + x[1] + "-start</span></div>";
      }).join("") + "</div>";
    },
    anatomy: [
      ["Container", "compact pill · 높이 24 · radius/inf · padding 8 · 4 · Flat 단색 면"],
      ["Shape icon", "11×11 — Bronze 삼각형 · Silver 사각형 · Gold 오각형 · Platinum 육각형"],
      ["Label", "Caption/C1/Bold · 대문자"]
    ],
    props: [["Grade", "Bronze · Silver · Gold · Platinum"]],
    tokens: [
      ["텍스트 · 아이콘", "label/inverse_secondary"],
      ["Bronze", "gradient/welcome-start (#7A3E1D)"],
      ["Silver", "gradient/silver-start (#546E7A)"],
      ["Gold", "gradient/gold-start (#E89400)"],
      ["Platinum", "gradient/platinum-start (#7C3FC8)"],
      ["카드류 (참고)", "gradient/{welcome · silver · gold · platinum}-start → end"]
    ],
    tokensCol: "Element",
    guidelines: [
      "뱃지는 Flat 단색(gradient/*-start)을 사용합니다. start → end 그라디언트는 등급 카드류에만 유지합니다.",
      "Atomic gradient 토큰을 직접 바인딩하는 예외 케이스입니다 (semantic_colors §1.3).",
      "사용처: Home Identity · Me · QR 시트.",
      "상태(성공 · 오류 · 주의 등) 표시는 Status Pill, 분류 태그는 Chip을 사용합니다."
    ]
  }
};
