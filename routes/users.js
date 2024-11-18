const express = require("express")
const router = express.Router()

const db = require("../database")

router.get("/users", (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(rows);
        }
      });
    
})

module.exports = router