const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const ApilistSchema = new Schema(
    {
        apiName: {
            type: String,
            required: true
        }  
    },
    {
        apiDescription: {
            type: String,
            required: true
        }
    },
    {
        apiImageUrl: {
            type: String,
            required: true
        }
    },
    {
        apiLink: {
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

module.exports = model("api",ApilistSchema);