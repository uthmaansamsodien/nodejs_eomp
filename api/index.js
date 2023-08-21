const {express,routes} = require('./controller')
const app = express()
const path = require('path')
const port = +process.env.PORT || 3000

app.use(
    express.static('./static'),
      express.urlencoded({
          extended: true
      }),
      routes
  )
  
  routes.get('^/$|/challenger', (req, res)=>{
    res.sendFile(path.resolve(__dirname,
        "../api/static/html/index.html"))
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  });

// Server
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})

app.post('./api/products', (req, res) => {
    const product = req.body; // Assuming the request body contains product details

    const query = 'INSERT INTO Products SET ?';
    const values = [product.prodID, product.prodName, product.amount];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error adding product to MySQL:', err);
            res.status(500).json({ message: 'Error adding product' });
        } else {
            res.json({ message: 'Product added successfully' });
        }
    });
});
