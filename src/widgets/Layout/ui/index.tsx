import { Header } from "@/widgets/Header/index.ts";
import { Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
