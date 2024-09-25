import "@wds/ui.stencil/themes/base.css";
import "@wds/ui.stencil/themes/autumn.css";

export const THEME_NAMES = ["Base", "Autumn"] as const;

export const DEFAULT_THEME_NAME: AvailableThemeName = "Base";

export const THEMES_MAP: Record<string, string> = THEME_NAMES.reduce(
  (accumulator, themeName) => ({
    ...accumulator,
    [themeName]: createThemeClassName(themeName),
  }),
  {},
);

type AvailableThemeName = (typeof THEME_NAMES)[number];

function createThemeClassName(themeName: string): string {
  return `theme-${themeName.toLowerCase()}`;
}
