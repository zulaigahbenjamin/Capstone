const db = require('../config/config.js')
const { hash, compare } = require('bcrypt')
const { tokenCreated } = require('../middleware/AuthenticateUser.js')
const bcrypt = require('bcrypt')

class users {
    fetchUsers = (req, res) => {
        const query = `
        SELECT userId, firstName, lastName, userAge, gender, userRole, emailAddress, userPwd
        FROM users;
        `
        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    };
    fetchUser(req, res) {
        const query = `
        SELECT userId, firstName, lastName, userAge, gender, userRole, emailAddress, userPwd
        FROM user
        WHERE userId = ${req.params.id};
        `
        db.query(query, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    login(req, res) {
        const { emailAddress, userPwd } = req.body
        const query = `
        SELECT  userId, firstName, lastName, userAge, gender, userRole, emailAddress, userPwd
        FROM users
        WHERE emailAddress = '${emailAddress}';
        `
        db.query(query, async (err, result) => {
            if (err) throw err
            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            } else {
                await compare(userPwd, result[0].userPwd, (compErr, compResult) => {
                    if (compErr) throw compErr
                    let token = tokenCreated({
                        emailAddress,
                        userPwd
                    })
                    if (compResult) {
                        res.json({
                            msg: "You have logged in",
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg: "Invalid password or check if you have registered"
                        })
                    }
                })
            }
        })
    }

    async register(req, res) {
        const data = req.body
        data.userPwd = await hash(data.userPwd, 15)
        const user = {
            emailAddress: data.emailAddress,
            userPwd: data.userPwd
        }
        const query = `
        INSERT INTO users
        SET ?
        `
        db.query(query, [data], (err) => {
            if (err) throw err
            let token = tokenCreated(user)
            res.json({
                status: res.statusCode,
                msg: "You are now registered."
            })
        })
    }

    updateUser(req, res) {
        const query = `
        UPDATE users
        SET ?
        WHERE userId = ?
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record was updated."
            })
        })
    }

    deleteUser(req, res) {
        const query = `
        DELETE FROM users
        WHERE userId  = ${req.params.id};
        `
        db.query(query, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user record was deleted."
            })
        })
    }
}

module.exports = users
