import { Router } from "express";
import { computerRoutes } from "../modules/computer/computer.route";
import { userRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { salesRoutes } from "../modules/sales/Sales.route";
import { computerServiceRequestRoutes } from "../modules/request-service/RequestService.route";


const router = Router();

const moduleRoutes = [
    {
        path:"/computer",
        route : computerRoutes
    },
    {
        path:"/user",
        route : userRoutes
    },
    {
        path:"/auth",
        route : AuthRoutes
    },
    {
        path:"/sales",
        route : salesRoutes
    },
    {
        path:"/computers",
        route : computerServiceRequestRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;  