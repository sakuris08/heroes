module.exports = {
    index: (req,res) => {
        res.render("index", {texto:`Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!`,
    title:"Digital Heroes"})
    },
    creditos: (req,res) => {
        res.render("index", {texto:"Página creada por la comisión 5", title:"Créditos"})
    },
    error: (req,res) =>{
        res.status(404).render("error1", {title: "404 not found", error: "¡Houston, tenemos un problema!"})
    }
}