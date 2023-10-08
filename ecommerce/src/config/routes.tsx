import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { LoadingScreen } from "../components/ui/Loading/Loading";

//config
const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          element: <Navigate to="/products" replace />,
          index: true,
        },
        {
          path: "cards",
          element: <ShoppingPage />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "*",
          element: <Navigate to="404" />,
        },
        {
          path: "404",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
}

const MainPage = Loadable(lazy(() => import("../components/ui/layout/Layout")));
const PageNotFound = Loadable(lazy(() => import("../page/404/Page404")));
const Products = Loadable(lazy(() => import("../page/Products/Products")));
const ShoppingPage = Loadable(lazy(() => import("../page/Shop/Shop")));
