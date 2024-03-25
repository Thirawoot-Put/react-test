import React from "react";
import SelectLang from "./SelectLang";
import { Outlet } from "react-router-dom";

function Container() {
  return (
    <>
      <SelectLang />
      <Outlet />
    </>
  );
}

export default Container;
