const express = require('express');
const productRoutes = require('d:/Four KHAI/Git/src/product.routes');
const userRouter = require('d:/Four KHAI/Git/user/user.router');
const { logRequest } = require('d:/Four KHAI/Git/src/middleware');
const bodyParser = require('body-parser');
const { errorResponder } = require('d:/Four KHAI/Git/src/error.middleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use(productRoutes);
app.use(userRouter);
app.use(errorResponder);

app.listen(PORT, () => {
   console.log(`Server listening at http://localhost:${PORT}`);
});