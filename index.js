const express = require('express')
const app = express()
const cors = require("cors");
const connect = require("./src/config/db");
const productRouter = require("./src/products/product.routes");
const cartRouter = require("./src/cart/cart.routes");
const userRouter = require("./src/users/user.routes");



app.use(cors())
app.use(express.json());

app.use("/products",productRouter);
app.use("/carts",cartRouter);
app.use("/user",userRouter)

app.all('/', (req, res) => {
    res.send('Yo!')
})

app.listen( 8080, async () => {
    await connect();
    console.log(8080)
})
