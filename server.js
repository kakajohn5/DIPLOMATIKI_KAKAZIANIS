const express   = require('express');
const connectDB = require('./config/db')

const app = express();
//connect db
connectDB();

app.get('/', (req,res) => res.send('API running'));

//Init Middleware
app.use(express.json({extened : false}));

//Define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));