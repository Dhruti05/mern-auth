import mongoose from "mongoose";
import dns from "node:dns";

// FORCE Node.js to resolve DNS correctly
dns.setServers(['8.8.8.8', '8.8.4.4']); 

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Database Connected Successfully!");
    });

    try {
        // We use the SRV string but with the DNS fix above
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
    } catch (error) {
        console.log("Startup Error: ", error.message);
    }
}

export default connectDB;