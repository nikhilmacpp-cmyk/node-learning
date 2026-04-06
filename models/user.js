import mongoose from 'mongoose';
const userSchema = new mongoose.schema({
    name:string,
    email:string
});

module.exports = mongoose.model("User",userSchema)