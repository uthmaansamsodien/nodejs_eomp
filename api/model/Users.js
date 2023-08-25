const db = require('../config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require("../middleware/Authenticate")
class Users {
    fetchUsers(req, res) {
      const query = `
          SELECT userID, firstName, lastName, userAge, gender, userRole,emailAdd, userPass, userProfile
          FROM Users;
          `
          db.query(query,
              (err, results)=>{
                  if(err) throw err
                  res.json({
                      status: res.statusCode,
                      results
                  })
              })
    }
    fetchUser(req, res) {
      const query = `
      SELECT userID, firstName, lastName, userAge, gender, userRole,emailAdd, userPass, userProfile
      FROM Users
      WHERE userID = ${req.params.id};
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
    
    addUser(req, res) {
        const query = `INSERT INTO Users SET ?;`
        db.query(query,[req.body],
            (err)=>{
                if(err)throw err;
                res.json({
                    status:res.statusCode,
                    msg:"User was added"
            })
        })  
    }

    async register(req, res) {
        const data = req.body
        //encrypt password
        data.userPass = await hash(data.userPass, 15)

        //query
        const query = `
        INSERT INTO Users
        SET ?
        `
        db.query(query, [data], (err)=>{
            if(err) throw err
            //create token
            let token = createToken(user)
            res.json({
                status: res.statusCode,
                token,
                msg: "Registration Complete"
            })
        })}

    // Update User
    updateUser(req, res) {
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?
        `
        db.query(query,
             [req.body, req.params.id],
             (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "Update Complete"
                })
             })}

    // Delete user
    deleteUser(req, res) {
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg: "Removal Complete"
            })
        })
      }

      
}

module.exports = Users