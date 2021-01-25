const express = require("express")
const router = express.Router()
const controlador = require("../controllers/mainController")

router.get("/",controlador.index)
router.get("/creditos",controlador.creditos)
router.get("*",controlador.error)

module.exports = router