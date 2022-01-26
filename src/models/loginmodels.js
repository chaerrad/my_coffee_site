import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    ID: {type: String, required: true },
    password: {type: String, required: true},
});

const User = mongoose.model("User",userSchema);
export default User;