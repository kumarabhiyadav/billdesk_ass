import { OrderModel } from "./orders.model";
import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
    let { userId, totalAmount } = req.body;

    try {

        let result = await OrderModel.create({
            userId,
            totalAmount
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




export const getOrdersOfUser = async (req: Request, res: Response) => {
    let { userId } = req.query;

    try {

        let result = await OrderModel.find({
            userId,

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


export const getOrderById = async (req: Request, res: Response) => {
    let { id } = req.query;

    try {

        let result = await OrderModel.findById(id)
        if (result) {
            res.status(201).json({
                success: true,
                result: result
            })
        } else {
            res.status(201).json({
                success: false,
                result: {},
                message: "No Order with this id"
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }




};




export const updateOrder = async (req: Request, res: Response) => {
    let { id, totalAmount } = req.body;

    try {

        let result = await OrderModel.findByIdAndUpdate(id, {
            totalAmount
        },
            {
                new: true
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




export const deleteOrder = async (req: Request, res: Response) => {
    let { id } = req.query;

    try {

        let result = await OrderModel.findByIdAndDelete(id,
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
                message: "No Order Found By This ID"
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }




};




export const getOrdersWithUsers = async (req: Request, res: Response) => {


    try {
        let result = await OrderModel.find().populate('userId');
        if (result) {
            res.status(201).json({
                success: true,
                result: result
            })
        } else {
            res.status(201).json({
                success: true,
                result: result,
                message: "No Order Found By This ID"
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }




};






export const orderTotal = async (req: Request, res: Response) => {


    try {

        let result = await OrderModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalQty: { $sum: '$totalAmount' },
                },
            },
        ]);
        if (result) {
            res.status(201).json({
                success: true,
                result: result
            })
        } else {
            res.status(201).json({
                success: true,
                result: result,
                message: "No Order Found By This ID"
            })
        }

    } catch (error) {

        res.status(500).json({
            success: true,
            result: error.message
        })

    }




};