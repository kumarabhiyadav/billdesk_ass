import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../usersModule/users.model";



export class Order {

    @prop({ref: () => User })
    userId: Ref<User>;

    @prop({ trim: true })
    totalAmount: number;

}

export const OrderModel = getModelForClass(Order, {
    schemaOptions: { timestamps: true },
});