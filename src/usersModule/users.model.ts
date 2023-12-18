import { getModelForClass, prop } from "@typegoose/typegoose";



export class User {

    @prop({ trim: true, unique: true, required: true })
    username: string;

    @prop({ trim: true, unique: true, required: true })
    email: string;

}

export const UserModel = getModelForClass(User, {
    schemaOptions: { timestamps: true },
});