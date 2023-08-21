class Products{
    fetchProducts(req,res){
        const query =` SELECT prodID, prodName, quantity, amount, prodInfo, prodUrl FROM Products;`
        db.query(query,(err)=>{
            if (err) throw err
            res.json({
                res:statusCode
            })
        })
    }
}

module.exports = Products