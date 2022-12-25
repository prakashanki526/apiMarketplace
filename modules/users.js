const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        }
    },
    {
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps:{
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    }
)

module.exports = model("user",UserSchema);