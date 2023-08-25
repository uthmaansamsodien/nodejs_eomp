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