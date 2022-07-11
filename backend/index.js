const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const User = require('./models/User');
const Transactions = require('./models/Transactions');
connectDB();

async function createUser(name, email, password){
    const user = new User({
   name, 
   email, 
   password     
    });
    const result = await user.save();
    console.log(result);
}

createUser('Bandytojas', 'banditas@gmail.ru', 'superSlaptas');
    
