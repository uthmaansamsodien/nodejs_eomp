const db = require("../config");
class Products{
    fetchProducts(req,res){
        const query =` SELECT prodID, prodName, quantity, prodPrice, prodArtist, prodYear, prodType, prodInfo, prodUrl FROM Products;`
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
        SELECT prodID, prodName, quantity, prodPrice, prodArtist, prodYear, prodType, prodInfo, prodUrl
        FROM Products WHERE prodID = ${req.params.id};
        `
        db.query(query,(err, results) => {
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

      addProducts(req, res) {

        

        const query =`INSERT INTO Products SET ?;`

        const products = {
            prodID: req.body.prodID,
            prodName:req.body.prodName,
            quantity:req.body.quantity,
            prodPrice:req.body.prodPrice,
            prodArtist:req.body.prodArtist,
            prodYear:req.body.prodYear,
            prodType:req.body.prodType,
            prodInfo:req.body.prodInfo,
            prodUrl:req.body.prodUrl
        }

          db.query(query, products,
              (err, products)=>{
                  if (err) throw err;
                  res.json({
                      status:res.statusCode,
                      msg:"Product has been added",
                    products
                  })
            })
      }

      updateProducts(req,res){
        const query = `
        UPDATE Products
        SET ?
        WHERE prodID = ?
        `
        db.query(query,
             [req.body, req.params.id],
             (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Update Complete"
                })
             })
      }
   

}



module.exports = Products

