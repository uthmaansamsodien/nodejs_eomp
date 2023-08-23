const db = require('../config')
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
}

module.exports = Users