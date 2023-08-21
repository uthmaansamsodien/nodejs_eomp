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
            (err, result) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
      }
       addProd(req, res) {
        
        const query = `
        INSERT INTO Products
        (prodID, prodName, quantity, amount, prodInfo, prodUrl) VALUES ( ? ? ? ? ?)
        `
        db.query(query,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results,
                msg: "Added Product"
            })
        })
      }

      

}

module.exports = Products