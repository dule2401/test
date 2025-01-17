import { Suspense } from "react";
import "./App.css";
import { Router } from "./router";
import { SWRConfig } from "swr";
import { ThemeSettingsProvider } from "./shared/contexts/ThemeSettings";
import { LayoutPage } from "./ui/layouts/LayoutPage";
import { AppProvider } from "./shared/contexts/AppProvider";

function App() {
  
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        revalidateOnMount: false,
        revalidateOnFocus: false,
      }}
    >
      <ThemeSettingsProvider
        defaultSettings={{
          themeMode: "light",
        }}
      >
        <AppProvider>
          <LayoutPage>
            <Suspense fallback={<div>...Loading</div>}>
              <Router />
            </Suspense>
          </LayoutPage>
        </AppProvider>
      </ThemeSettingsProvider>
    </SWRConfig>
  );
}

export default App;
