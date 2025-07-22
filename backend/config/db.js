import mongoose from "mongoose";

async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION)
    } catch (error) {
        console.log(error);
        
    }
}
export default connectToDB