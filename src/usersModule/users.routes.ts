import express, { Router } from "express";
import { createUser, deleteUser, getAllUserWithOrder, getUser, updateUser } from "./users.controller";
import { getOrdersOfUser } from "../orderModule/orders.controller";

export const UserRoutes: Router = express.Router();

UserRoutes.post('/user',createUser)
UserRoutes.delete('/user',deleteUser)
UserRoutes.put('/user',updateUser)
UserRoutes.get('/user',getUser)
UserRoutes.get('/getOrdersOfUser',getOrdersOfUser)

UserRoutes.get('/getAllUserWithOrder',getAllUserWithOrder);




