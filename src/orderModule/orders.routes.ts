import express, { Router } from "express";
import { createOrder, deleteOrder, getOrderById, getOrdersOfUser, getOrdersWithUsers, orderTotal, updateOrder } from "./orders.controller";

export const OrderRoutes: Router = express.Router();

OrderRoutes.post('/order',createOrder)
OrderRoutes.get('/getOrdersOfUser',getOrdersOfUser)
OrderRoutes.get('/order',getOrderById);
OrderRoutes.get('/getOrdersWithUsers',getOrdersWithUsers);  // .populate Used
OrderRoutes.put('/order',updateOrder);
OrderRoutes.delete('/order',deleteOrder);
OrderRoutes.get('/orderTotal',orderTotal);  // $sum Used







