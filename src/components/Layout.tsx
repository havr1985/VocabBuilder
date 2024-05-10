import { useAppSelector } from "@/services/hooks";
import { selectIsAuthUser } from "@/services/slices/authSlice";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

export const Layout = () => {
  const isAuth = useAppSelector(selectIsAuthUser)
  return (
    <>
      {isAuth && <Header/>}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
