const fs = require("fs")
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf-8"))

module.exports = {
    data: function (req, res) {
        res.render("heroes", {title : "Listado de héroes", heroes: heroes})
    },
    bio: function (req, res) {
        let id = req.params.idHeroe;
        let ok = req.params.ok;
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSeleccionado = heroe[0];
        if (heroeSeleccionado == undefined) {
            return res.render("error1", {title: "Error", error: "No encontramos un héroe para mostrarte su biografía"})
        }
        if (ok == "ok") {
            return res.render("bio", {nombre : heroeSeleccionado.nombre, bio: heroeSeleccionado.resenia})
        } else {
            return res.render("bio", {nombre : heroeSeleccionado.nombre, bio : "Lamento que no desees saber más nada de mí"})
        }
    },
    heroe: function (req, res) {
        let id = req.params.idHeroe

        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSeleccionado = heroe[0];

        if (heroeSeleccionado == undefined) {
            res.render("error1", {title:"Error",error: "Este héroe no fué encontrado, por favor ingrese otro id."})
        } else {
            res.render("heroe",{nombre: heroeSeleccionado.nombre, profesion: heroeSeleccionado.profesion})
        }
    }
}