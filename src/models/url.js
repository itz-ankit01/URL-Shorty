import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
})

const UrlModel = mongoose.model("Url", urlSchema)
export default UrlModel