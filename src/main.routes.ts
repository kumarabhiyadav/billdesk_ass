import express, { Router } from "express";
import { UserRoutes } from "./usersModule/users.routes";
import { OrderRoutes } from "./orderModule/orders.routes";

export const MainRoutes: Router = express.Router();

MainRoutes.use('/users',UserRoutes);
MainRoutes.use('/orders',OrderRoutes);

