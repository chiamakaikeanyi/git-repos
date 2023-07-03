import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
import ErrorBoundary from "./ErrorBoundary";
import useNetworkStatus from "./hooks/useNetworkStatus";
import Home from "./pages/Home/Home";

function App() {
  const { isOnline } = useNetworkStatus();

  return (
    <ErrorBoundary>
      <UserContextProvider>
        <ThemeProvider>
          <BrowserRouter>
            <div className={styles.container}>
              <a
                href="#main"
                className={styles.skip_to_main}
                data-testid="app_container"
              >
                Skip to main content
              </a>
              <header className={styles.header}>
                <Header />
              </header>
              <main id="main" className={styles.main}>
                {isOnline ? (
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<p>Error</p>} />
                  </Routes>
                ) : (
                  <p>No internet connection</p>
                )}
              </main>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </UserContextProvider>
    </ErrorBoundary>
  );
}

export default App;
