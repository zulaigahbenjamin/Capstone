const cors = require('cors')
const cookieParser = require('cookie-parser')
const {express,routes} =require('./controllers/index.js')
const app = express()
const path = require('path')
const errorHandler =require('./middleware/errorHandeling.js')



app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:80810', 'http://localhost:3302');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header("Access-Control-Request-Methods", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)
app.get('/',
    (req, res)=> {
    res.sendFile(path.resolve(__dirname,
        './static/html/index.html'))
})
// Handling all errors using error middleware.
// app.use(errorHandler)
app.listen(3302, ()=>{
    console.log(`The server is running on port http://localhost:${3302}`);
})
