/* GolfVX DS Showcase — navigation data (single source for GNB, sidebar, breadcrumb).
 * Paths are relative to the site root. `todo: true` marks pages that are placeholders.
 */
window.GVX_NAV = {
  // GNB: 4개 메뉴로 확정 (와이어프레임 기준)
  gnb: [
    { id: "getting-started", label: "Getting Started", href: "getting-started/" },
    { id: "foundations", label: "Foundations", href: "foundations/color/" },
    { id: "components", label: "Components", href: "components/button/" },
    { id: "resources", label: "Resources", href: "resources/" }
  ],
  sidebar: {
    "getting-started": [
      { items: [
        { id: "designer", label: "Designer", href: "getting-started/" },
        { id: "terms", label: "Terms of use", href: "getting-started/terms/", todo: true }
      ] },
      { label: "Platform", items: [
        { id: "flutter", label: "Flutter", href: "getting-started/#platform-flutter" },
        { id: "android", label: "Android", href: "getting-started/#platform-android" },
        { id: "ios", label: "iOS", href: "getting-started/#platform-ios" },
        { id: "web", label: "Web", href: "getting-started/#platform-web" }
      ] }
    ],
    foundations: [
      { items: [{ id: "overview", label: "Overview", href: "foundations/", todo: true }] },
      {
        label: "Base material",
        items: [
          { id: "color", label: "Colors", href: "foundations/color/" },
          { id: "typography", label: "Typography", href: "foundations/typography/" },
          { id: "grid", label: "Grid", href: "foundations/grid/" },
          { id: "spacing", label: "Spacing", href: "foundations/spacing/" },
          { id: "icons", label: "Icons", href: "foundations/icons/" }
        ]
      },
      {
        items: [
          { id: "layout", label: "Layout", href: "foundations/layout/", todo: true },
          { id: "radius", label: "Radius", href: "foundations/radius/" },
          { id: "divider", label: "Divider", href: "foundations/divider/" },
          { id: "shadow", label: "Shadow", href: "foundations/shadow/" }
        ]
      }
    ],
    components: [
      { items: [{ id: "overview", label: "Overview", href: "components/", todo: true }] },
      { label: "Actions", items: [
        { id: "button", label: "Button", href: "components/button/" },
        { id: "switch", label: "Switch", href: "components/switch/" }
      ] },
      { label: "Inputs", items: [
        { id: "textfield", label: "TextField", href: "components/textfield/" },
        { id: "dropdown", label: "Dropdown", href: "components/dropdown/" },
        { id: "checkbox", label: "Checkbox", href: "components/checkbox/" }
      ] },
      { label: "Navigation", items: [
        { id: "appbar", label: "AppBar", href: "components/appbar/" },
        { id: "bottom-navigation", label: "Bottom Navigation", href: "components/bottom-navigation/" },
        { id: "tabbar", label: "TabBar", href: "components/tabbar/" },
        { id: "segmented", label: "Segmented", href: "components/segmented/" }
      ] },
      { label: "Display", items: [
        { id: "badge", label: "Badge", href: "components/badge/" },
        { id: "chip", label: "Chip", href: "components/chip/" },
        { id: "scorecard", label: "Scorecard", href: "components/scorecard/" },
        { id: "status-pill", label: "Status Pill", href: "components/status-pill/" }
      ] },
      { label: "Feedback", items: [
        { id: "snackbar", label: "Snackbar", href: "components/snackbar/" },
        { id: "dialog", label: "Dialog", href: "components/dialog/" },
        { id: "bottomsheet", label: "BottomSheet", href: "components/bottomsheet/" }
      ] }
    ]
  }
};
