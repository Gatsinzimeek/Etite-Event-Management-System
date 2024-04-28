import mongoose from "mongoose";
import { Schema } from "mongoose";

const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
})

const userModel = mongoose.model('user', UsersSchema);

export default userModel;