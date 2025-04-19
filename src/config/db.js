import mongoose from 'mongoose';

const connectDB = async () => {
    console.log('Connecting to MongoDB...', process.env.MONGO_URI)
    return mongoose.connect(process.env.MONGO_URI)
}

export default connectDB;