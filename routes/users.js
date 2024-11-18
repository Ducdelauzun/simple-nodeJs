const express = require("express")
const router = express.Router()
const { getAllUsers, createNewUser, updateUser, deleteUser } = require("../controllers/usersControllers")

const db = require("../database")

// GET METHOD
router.get("/users", getAllUsers)

router.post("/users", createNewUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

module.exports = router