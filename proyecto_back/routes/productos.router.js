const express= require("express")
const router= express.Router()
const productosController = require("../controllers/productos.controller")

router.post("/", productosController.create)
router.get("/", productosController.find)
router.get("/:id", productosController.findOne)//Busqueda en la tabla por el parametro que uno quiera en este caso ID
router.put("/:id", productosController.update)
router.delete("/:id",productosController.remove)

module.exports = router