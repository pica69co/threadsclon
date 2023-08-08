import mongoose from 'mongoose';

let isConnected = false // variable to check if mongoose is connected

export const connectDb = async() => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MongoDB not Found!');
    if(isConnected) return console.log('Already Connected to MongoDB!');

    try {
    await mongoose.connect(process.env.MONGODB_URL)
    isConnected = true;
    
    console.log('Connected to MongoDB');
    
    } catch (error) {
        console.log(error);
    }
    
}
