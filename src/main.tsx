import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "@style/Theme";
import { Header } from "./components/Header";
import { SpringPage } from "./pages/SpringPage";
import { SummerPage } from "./pages/SummerPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/spring",
    element: <SpringPage />,
  },
  {
    path: "/summer",
    element: <SummerPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
