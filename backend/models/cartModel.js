"use strict"

const fs = require("fs")
const path = require("path")
const basename = path.basename(__filename)
const pool = require("../config/config")
// Change path if db.js is elsewhere

const db = {}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))
    const name = path.basename(file, ".js")
    db[name] = model
  })

// Export pool and models
db.pool = db

module.exports = db
