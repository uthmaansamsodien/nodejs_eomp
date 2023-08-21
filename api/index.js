const {express,routes} = require('./controller')
const app = express()
const port = +process.env.PORT || 3000

// app.use(
//     express.static('./static'),
//       express.urlencoded({
//           extended: true
//       }),
//       routes
//   )
  
//   routes.get('^/$|/challenger', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,
//         "../api/static/html/index.html"))
// })

// Server
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})