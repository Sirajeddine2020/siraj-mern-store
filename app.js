const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authenticate = require('./api/middleware/authenticate');


const db= "mongodb+srv://fedi:Fedi123456@cluster0.eviib.mongodb.net/SirajStore?retryWrites=true&w=majority"
//const db="mongodb+srv://sirajdinho@hotmail.com :MongoDB2020**@cluster0.eviib.mongodb.net/SirajStore?retryWrites=true&w=majority"
//const db= "mongodb://localhost:27017/student";
//const db= "mongodb+srv://'+ process.env.MONGODB_USERNAME +':'+ process.env.MONGODB_PASSWORD@cluster0.eviib.mongodb.net/SirajStore?retryWrites=true&w=majority"
//const db= 'mongodb+srv://'+ process.env.MONGODB_USERNAME +':'+ process.env.MONGODB_PASSWORD +'@cluster0-axd8v.mongodb.net/mystore?retryWrites=true&w=majority';
mongoose
       .connect(db,		
           {    useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
			})
       .then ( () => console.log ('💾 Mongoose connected to the database ...'))
	   .catch (err => console.log (err));

const adminRoutes = require("./api/adminApi/routes/auth");
const initialDataRoutes = require("./api/adminApi/routes/initialData");
const pageRoutes = require("./api/adminApi/routes/page");
const adminOrderRoute = require("./api/adminApi/routes/order.routes");
const categoryRoutes = require('./api/routes/categories');
const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products');
const cartItemRoutes = require('./api/routes/cartItems');
const orderRoutes = require('./api/routes/orders');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {res.send ('Welcome to Siraj Mern project')});
//app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use('/admin', adminRoutes);
app.use('/admin/initialdata', initialDataRoutes);
app.use('/admin/page', pageRoutes);
app.use('/admin/order', adminOrderRoute);
app.use('/category', categoryRoutes);
app.use('/user', userRoutes); 
app.use('/products', productRoutes);
app.use('/cart', authenticate, cartItemRoutes);
app.use('/order', authenticate, orderRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})


module.exports = app;