import { Route, Routes } from "react-router-dom";
import Socials from "../pages/Social";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Socials />} />
    </Routes>
  );
}