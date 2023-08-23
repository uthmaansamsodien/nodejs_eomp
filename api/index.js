const {express,routes} = require('./controller')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = +process.env.PORT || 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});
app.use(
    express.static('./static'),
      express.urlencoded({
          extended: true
      }),
      cookieParser(),
      cors(),
      routes
  )
  
routes.get('^/$|/node_js eomp', (req, res)=>{
    res.sendFile(path.resolve(__dirname,
        "../api/static/html/index.html"))
})


// Server
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})