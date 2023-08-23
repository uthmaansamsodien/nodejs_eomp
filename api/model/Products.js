const db = require("../config");
class Products{
    fetchProducts(req,res){
        const query =` SELECT prodID, prodName, quantity, amount, prodInfo, prodUrl FROM Products;`
        db.query(query,(err, results)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }

    fetchProduct(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, amount, prodInfo, prodUrl 
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(query,
            (err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
      }
      deleteProduct(req, res) {
        const query = `DELETE FROM Products WHERE prodID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: "Product Removed"
            })
        })
      }

      addProduct(req, res) {
          const query =`INSERT INTO Products SET ?;`
          db.query(query, [req.body],
              (err)=>{
                  if (err) throw err;
                  res.json({
                      status:res.statusCode,
                      msg:"Product has been added"
                  })
            })
      }
   

}



module.exports = Products