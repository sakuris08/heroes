const express = require("express")
const router = express.Router()
const controladorHeroes = require("../controllers/heroesController")

router.get("/",controladorHeroes.data)
router.get("/:idHeroe",controladorHeroes.heroe)
router.get("/bio/:idHeroe/:ok?",controladorHeroes.bio)

module.exports = router