import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemedApp from "./ThemedApp.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import AddToCart from "./pages/AddToCart.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ThemedApp />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product-detail/:id",
                element: <ProductDetail />,
            },
            {
              path: "/add-to-cart",
              element: <AddToCart />,
          },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
