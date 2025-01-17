import React from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "./path";

export const Router = () => {
  const router = useRoutes([
    {
      path: PATH.home,
      element: <TitreOne />,
      children: [],
    },
  ]);
  return router;
};

const TitreOne = React.lazy(() => import("@/ui/page/TitreOne"));
