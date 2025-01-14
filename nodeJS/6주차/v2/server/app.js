const cors = require('cors');
const express = require('express');
const connectDB = require('./mongoose');
const userRouter = require('./routes/user');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
