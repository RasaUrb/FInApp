const mongoose =require ('mongoose')
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`);

    } catch (err) {
        console.error('mongo not connected..',err)
    }
}
module.exports =connectDB