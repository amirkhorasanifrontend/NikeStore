import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/page";
import ShoppingCart from "./pages/ShoppingCart/page";
import Register from "./pages/Register/page";
import RootLayout from "./Components/layout/RootLayout";
import ProductDetalis from "./pages/ProductDetalis/page";
import Login from "./pages/Login/page";
import NotFound from "./pages/NotFound/NotFound";
import InformationForm from "./pages/InformationForm/InformationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:productId",
        element: <ProductDetalis />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/InformationForm",
        element: <InformationForm />
      },
      {
        path: "/*",
        element: <NotFound />,
        handle: { hideFooter: true },
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;