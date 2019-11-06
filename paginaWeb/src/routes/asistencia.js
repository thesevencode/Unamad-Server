const express = require("express");
const router = express.Router();

const asistencia = require("../controllers/asistencia");

module.exports = async function() {
  let controller = await asistencia();

  router
    .get("/", controller.index)
    .get("/dni/:dni", controller.findByDni)
    .get("/asistencias", controller.findByAssistance)
    .get("/listar", controller.findAll)
    .post("/", controller.create)
    .post("/borrar", controller.deleteByDni)
    .post("/assistance", controller.addAssistanceByDni);

  return router;
};
