import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import {
  theme as lightTheme,
  ThemeValueType,
  resetGlobalCss,
  styled,
} from "@/shared/styles";

type ThemeMode = "light"; // dark
const themes = {
  light: lightTheme,
  // dark: darkTheme,
};
type ThemeSettingsValue = {
  theme: ThemeValueType;
  themeMode: ThemeMode;
};

type ThemeSettingsCtxProps = ThemeSettingsValue & {
  changeTheme: (themeMode: ThemeMode) => void;
};

const initialCtxValue: ThemeSettingsCtxProps = {
  themeMode: "light",
  theme: lightTheme,
  changeTheme: () => {},
};

type ThemeSettingsProviderProps = {
  children: ReactNode;
  defaultSettings: Omit<ThemeSettingsValue, "theme">;
};

const ThemeSettingsCtx = createContext(initialCtxValue);

const ThemeWrapper = styled("div", {
  width: "100vw",
  // height: "100vh",
  backgroundColor: "$bg1f9",
  position: "relative",
});

function ThemeSettingsProvider({
  children,
  defaultSettings,
}: ThemeSettingsProviderProps) {
  const [settings, setSettings] = useState({
    ...defaultSettings,
    theme: themes[defaultSettings.themeMode],
  });
  const changeTheme: ThemeSettingsCtxProps["changeTheme"] = useCallback(
    (newThemeMode) => {
      setSettings((oldSettings) => ({
        ...oldSettings,
        themeMode: newThemeMode,
        theme: themes[newThemeMode],
      }));
    },
    []
  );

  resetGlobalCss();
  return (
    <ThemeSettingsCtx.Provider value={{ ...settings, changeTheme }}>
      <ThemeWrapper className="theme-wrapper">{children}</ThemeWrapper>
    </ThemeSettingsCtx.Provider>
  );
}

function useThemeSettings() {
  const themeSettings = useContext(ThemeSettingsCtx);

  if (typeof themeSettings === "undefined") {
    throw new Error(
      "useThemeSettings must be used within ThemeSettingsProvider."
    );
  }

  return themeSettings;
}

export { useThemeSettings, ThemeSettingsProvider };
