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

// Check if the model exists before creating it
const UrlModel = mongoose.models.Url || mongoose.model("Url", urlSchema)
export default UrlModel