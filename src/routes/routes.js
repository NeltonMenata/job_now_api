const express = require("express");
const routes = express.Router();

const { GetCandidatos, PostCandidato, GetOneCandidato } = require("../modules/candidato/candidato_controller.js")
const { CANDIDATO, ME } = require("./route_name.js");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, curriculum, cb) => {
        cb(null, "src/modules/candidato/curriculum");
    },
    filename: (req, curriculum, cb) => {
        const arrayName = curriculum.originalname.split(".");
        const extensionCurr = arrayName[arrayName.length - 1];
        const randomName = require("crypto").randomBytes(64).toString("hex")
        const newName = randomName + "." + extensionCurr;
        cb(null, newName);
    }
});
const uploadFile = multer({ storage });

const HOME = "/";
const CARROCONTROLLER = "/carrocontroller"
const home = require("../modules/home/home");
const carroController = require("../modules/carro/carroController/carroController.js.js")
routes.get(HOME, home);
routes.get(CARROCONTROLLER, carroController.getCarros)
routes.post(CARROCONTROLLER, carroController.criarCarro)


routes.get(CANDIDATOS, GetCandidatos);
routes.get(ME, GetOneCandidato);
routes.post(CANDIDATO, uploadFile.single("curriculum"), PostCandidato);


module.exports = routes;