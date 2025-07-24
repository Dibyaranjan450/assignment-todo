import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage, NotFound, ProfilePage } from "./pages/index";

const App = () => {
  return <ProfilePage />;
};

export default App;
