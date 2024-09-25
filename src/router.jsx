
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <DashboardPage/>
            },
            {
                path: "product",
                element: <ProductPage/>
            },
            {
                path: "sale",
                element: <SalePage/>
            },
            {
                path: "voucher",
                element: <VoucherPage/>
            }
        ]

    }
]);

export default router;