import { OrderModel } from "../orderModule/orders.model";
import { UserModel } from "./users.model";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    let { username, email } = req.body;

    try {

        let result = await UserModel.create({
            username,
            email
        })
        if (result) {
            res.status(201).json({
                success: true,
                result: result
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }




};





export const updateUser = async (req: Request, res: Response) => {
    let { id, username, email } = req.body;

    try {




        let result = await UserModel.findByIdAndUpdate(id, {
            username,
            email
        },
            {
                new: true
            })
        if (result) {
            res.status(201).json({
                success: true,
                result: result
            })
        } else {
            res.status(201).json({
                success: true,
                result: result,
                message: "No user with this ID"
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }







};








export const deleteUser = async (req: Request, res: Response) => {
    let { id } = req.body;

    try {




        let result = await UserModel.findByIdAndDelete(id,
            {
                new: true
            })
        if (result) {
            res.status(201).json({
                success: true,
                result: result,
                message: "User Has been deleted"
            })
        } else {
            res.status(201).json({
                success: true,
                result: result,
                message: "No user with this ID"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: true,
            result: error.message
        })

    }

};





// export const getUserByIdWithOrders = async (req: Request, res: Response) => {
//     let { id } = req.body;

//     try {
//         // let result = await UserModel.findById(id);
//         // let orders = await OrderModel.find({
//         //     userId: id,
//         // })

//         // let userWithOrder = {
//         //     ...result,
//         //     orders,
//         // }

//         let users =  await UserModel.aggregate({

//         });
//         if (userWithOrder) {
//             res.status(201).json({
//                 success: true,
//                 result: userWithOrder,
//                 message: "User With Orders"
//             })
//         }

//     } catch (error) {

//         res.status(500).json({
//             success: true,
//             result: error.message
//         })

//     }

// };




export const getAllUserWithOrder = async (req: Request, res: Response) => {

    try {

        let userWithOrders = [];
        let users = await UserModel.find();
        for await (const user of users) {
            let orders = await OrderModel.find({
                userId: user._id
            })
            userWithOrders.push({
                user,
                orders
            })
        }


        if (userWithOrders) {
            res.status(201).json({
                success: true,
                result: userWithOrders,
            })
        } else {
            res.status(201).json({
                success: true,
                result: userWithOrders,
            });

        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }

};






export const getUser = async (req: Request, res: Response) => {
    let { id } = req.query;

    try {




        let result = await UserModel.findById(id)

        if (result) {
            res.status(201).json({
                success: true,
                result: result
            })
        } else {
            res.status(201).json({
                success: true,
                result: result,
                message: "No user with this ID"
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }







};