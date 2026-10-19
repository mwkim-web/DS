/* GolfVX DS Showcase — token data (single source for all token tables).
 * Source: Figma "GolfVX Flutter" library (fileKey Vf2tgqJpswkexr4nuRP0M0)
 *   - Variables: Atomic, Semantic (Light/Dark), Typography, Layout
 *   - Effect styles: Shadow/Popup, Shadow/BottomSheet
 * Do not invent values here. Anything unverified must be marked TODO.
 */
window.GVX_TOKENS = (function () {
  var atomic = {
    "common/white": "#FFFFFF", "common/black": "#000000",
    "grey/10": "#121212", "grey/20": "#4C4C4C", "grey/30": "#646464", "grey/40": "#7C7C7C", "grey/50": "#949494",
    "grey/60": "#ADADAD", "grey/70": "#C5C5C5", "grey/80": "#DDDDDD", "grey/90": "#F5F5F5",
    "amber/10": "#2E2200", "amber/20": "#4F4000", "amber/30": "#8A6E00", "amber/40": "#AD8B00", "amber/50": "#D6AB00",
    "amber/60": "#FFCD00", "amber/70": "#FBD76A", "amber/80": "#FDEAB4", "amber/90": "#FFF7DC",
    "green/10": "#0C3524", "green/20": "#124F35", "green/30": "#176645", "green/40": "#1F8757", "green/50": "#23BC61",
    "green/60": "#4FD38F", "green/70": "#86E4B4", "green/80": "#B8F0D3", "green/90": "#DFF9EC",
    "blue/10": "#0A2847", "blue/20": "#11477E", "blue/30": "#1761AB", "blue/40": "#1D7AF1", "blue/50": "#4394E5",
    "blue/60": "#6BABEB", "blue/70": "#93C2F0", "blue/80": "#C4DEF7", "blue/90": "#EBF4FD",
    "purple/10": "#35194A", "purple/20": "#522768", "purple/30": "#70358D", "purple/40": "#8D43B2", "purple/50": "#A464C4",
    "purple/60": "#B885D1", "purple/70": "#CBA6DD", "purple/80": "#E4D1EE", "purple/90": "#F5EEF8",
    "red/10": "#470D07", "red/20": "#84170B", "red/30": "#B31F0F", "red/40": "#E22712", "red/50": "#EF4B39",
    "red/60": "#F27263", "red/70": "#F6988E", "red/80": "#FAC7C1", "red/90": "#FDEDEA",
    "gradient/welcome-start": "#7A3E1D", "gradient/welcome-end": "#B8713A",
    "gradient/silver-start": "#546E7A", "gradient/silver-end": "#7E9EAA",
    "gradient/gold-start": "#E89400", "gradient/gold-end": "#FFCB05",
    "gradient/platinum-start": "#7C3FC8", "gradient/platinum-end": "#B06EF0"
  };
  // black/opacity/5..95, white/opacity/5..95
  for (var p = 5; p <= 95; p += 5) {
    atomic["black/opacity/" + p] = "rgba(0, 0, 0, " + p / 100 + ")";
    atomic["white/opacity/" + p] = "rgba(255, 255, 255, " + p / 100 + ")";
  }

  var palettes = ["grey", "amber", "green", "blue", "purple", "red"];

  // [token, light alias, dark alias]
  var semantic = [
    { group: "Primary", desc: "브랜드를 대표하는 핵심 컬러입니다.", tokens: [
      ["primary/normal", "amber/60", "amber/60"], ["primary/secondary", "green/50", "green/50"]] },
    { group: "Label", desc: "텍스트와 아이콘에 사용하는 컬러입니다.", tokens: [
      ["label/normal", "grey/20", "grey/90"], ["label/secondary", "grey/40", "grey/70"],
      ["label/alternative", "grey/50", "grey/60"], ["label/assistive", "grey/60", "grey/50"],
      ["label/inverse", "grey/90", "grey/90"], ["label/inverse_secondary", "common/white", "common/white"],
      ["label/normal_on_primary", "grey/20", "grey/20"], ["label/normal_on_primary_secondary", "common/white", "common/white"],
      ["label/disable", "grey/60", "grey/30"]] },
    { group: "Fill", desc: "컴포넌트의 면을 채우는 컬러입니다.", tokens: [
      ["fill/normal", "common/white", "grey/10"], ["fill/inverse", "grey/20", "grey/20"],
      ["fill/disable", "grey/80", "white/opacity/5"], ["fill/elevated", "grey/90", "white/opacity/5"],
      ["fill/transparent/normal", "black/opacity/50", "black/opacity/60"],
      ["fill/transparent/strong", "black/opacity/70", "black/opacity/80"],
      ["fill/transparent/inverse", "white/opacity/10", "white/opacity/10"]] },
    { group: "Line", desc: "구분선과 테두리에 사용하는 컬러입니다.", tokens: [
      ["line/normal", "grey/80", "grey/20"], ["line/strong", "grey/70", "grey/30"],
      ["line/focus", "amber/60", "amber/60"], ["line/error", "red/40", "red/40"],
      ["line/disable", "grey/80", "white/opacity/5"]] },
    { group: "Interaction", desc: "인터랙션 상태(hover 등)에 사용합니다.", tokens: [
      ["interaction/hover", "black/opacity/10", "black/opacity/10"]] },
    { group: "Status", desc: "상태(성공·오류·주의·정보)를 나타냅니다.", tokens: [
      ["status/positive", "green/40", "green/50"], ["status/negative", "red/40", "red/50"],
      ["status/positive_subtle", "green/90", "green/10"], ["status/negative_subtle", "red/90", "red/10"],
      ["status/cautionary", "amber/40", "amber/50"], ["status/cautionary_subtle", "amber/90", "amber/10"],
      ["status/info", "blue/40", "blue/50"], ["status/info_subtle", "blue/90", "blue/10"]] },
    { group: "Accent", desc: "강조가 필요한 요소에 사용합니다.", tokens: [
      ["accent/blue", "blue/40", "blue/50"], ["accent/blue_subtle", "blue/90", "blue/10"],
      ["accent/blue_strong", "blue/30", "blue/40"], ["accent/purple", "purple/40", "purple/50"],
      ["accent/purple_subtle", "purple/90", "purple/10"], ["accent/amber", "amber/50", "amber/50"]] },
    { group: "Static", desc: "모드와 관계없이 고정되는 컬러입니다.", tokens: [
      ["static/white", "common/white", "common/white"], ["static/black", "common/black", "common/black"]] },
    { group: "Rating", desc: "등급 배지에 사용하는 전용 컬러입니다.", tokens: [
      ["rating/fill/s", "green/40", "green/50"], ["rating/fill/a", "grey/30", "grey/20"],
      ["rating/fill/b", "grey/60", "grey/50"], ["rating/fill/c", "amber/40", "amber/50"]] },
    { group: "Scorecard", desc: "스코어카드 전용 컬러입니다.", tokens: [
      ["scorecard/fill/eagle", "red/40", "red/50"], ["scorecard/fill/birdie", "red/70", "red/60"],
      ["scorecard/fill/par", "grey/60", "grey/50"], ["scorecard/fill/bogey", "blue/70", "blue/60"],
      ["scorecard/fill/double", "blue/40", "blue/50"],
      ["scorecard/label/eagle", "common/white", "common/white"], ["scorecard/label/birdie", "red/40", "red/50"],
      ["scorecard/label/par", "grey/20", "grey/90"], ["scorecard/label/bogey", "blue/40", "blue/50"],
      ["scorecard/label/double", "common/white", "common/white"],
      ["scorecard/label/match_up", "red/40", "red/50"], ["scorecard/label/match_down", "blue/40", "blue/50"],
      ["scorecard/label/match_allsquared", "grey/20", "grey/90"],
      ["scorecard/line/birdie", "red/70", "red/60"], ["scorecard/line/bogey", "blue/70", "blue/60"]] },
    { group: "Background", desc: "화면 배경에 사용합니다.", tokens: [
      ["bg/normal", "common/white", "grey/10"], ["bg/elevated", "grey/90", "white/opacity/5"]] }
  ];

  // Typography collection: font-size/*, line-height/*. Weights: 700 · 500 · 400 (600 not used).
  var typeScale = [
    { group: "Display", rows: [["d1", 64, 64, "700"]] },
    { group: "Heading", rows: [["h1", 30, 38], ["h2", 26, 34], ["h3", 24, 32], ["h4", 22, 30], ["h5", 20, 28], ["h6", 18, 26]] },
    { group: "Body", rows: [["b1", 16, 24], ["b2", 15, 22], ["b3", 14, 22], ["b4", 13, 20], ["b5", 12, 18]] },
    { group: "Caption", rows: [["c1", 11, 16], ["c2", 10.5, 15], ["c3", 10, 14], ["c4", 8, 12]] }
  ];

  // Layout collection
  var spacing = [2, 4, 8, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100];
  var radius = [["radius/xxs", 2], ["radius/xs", 3], ["radius/s", 4], ["radius/m", 6], ["radius/l", 8], ["radius/xl", 16], ["radius/xxl", 20], ["radius/inf", 999]];
  var divider = [["divider/thin-half", 0.5], ["divider/thin", 1], ["divider/thick", 1.5], ["divider/thicker", 2], ["divider/block-6", 6], ["divider/block-12", 12]];
  var shadow = [
    ["None", null, "그림자 없음 (border 1px로 구분)"],
    ["Shadow/Popup", { x: 0, y: 0, blur: 20, color: "rgba(0, 0, 0, 0.15)" }, "드롭다운 패널, 다이얼로그"],
    ["Shadow/BottomSheet", { x: 0, y: -4, blur: 20, color: "rgba(0, 0, 0, 0.15)" }, "바텀시트 (위쪽으로 드리움)"]
  ];

  // Grid — from showcase wireframe WF-05 (node 146:1001). Not a Figma variable collection.
  var grid = [
    ["Mobile", "360px~", 4, 16, 16],
    ["Tablet", "768px~", 8, 24, 24],
    ["Desktop", "1280px~", 12, 24, 40],
    ["Wide", "1440px~", 12, 24, 80]
  ];

  function resolve(alias) { return atomic[alias] || null; }
  function isTransparent(v) { return /^rgba\(/.test(v || ""); }
  function isWhite(v) { return (v || "").toUpperCase() === "#FFFFFF"; }

  return {
    atomic: atomic, palettes: palettes, semantic: semantic, typeScale: typeScale,
    grid: grid, spacing: spacing, radius: radius, divider: divider, shadow: shadow,
    resolve: resolve, isTransparent: isTransparent, isWhite: isWhite
  };
})();
