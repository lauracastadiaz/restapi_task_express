const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require ('dotenv').config();

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(cors({
    origin: ['http://localhost:5173/', 'https://task-front-production.up.railway.app/'], // Lista de dominios permitidos
    credentials: true, // Si necesitas enviar cookies
  }));
app.use(express.json());

//import routes
const tasksRoutes = require('./routes/tasksRoutes');

// Routes
app.use('/api', tasksRoutes)

// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})