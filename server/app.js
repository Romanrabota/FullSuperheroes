//// Express Routing
const express = require('express');
const router = require('./routes/index.js'); 
const path = require('path');

const app = express();
const cors = require('cors');

const bodyParser = express.json();
app.use(bodyParser);
app.use(cors());

app.use(express.static(path.resolve(__dirname,'./public/images')));

app.use('/api',router);



//// SERVER
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT,() => {
console.log(`App started on port ${PORT}`);    
});