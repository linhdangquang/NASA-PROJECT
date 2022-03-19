import express from "express"; 
const {httpAddNewLaunch, httpGetAllLaunches} = require("./launch.controller")
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches )
launchesRouter.post("/", httpAddNewLaunch )
export default launchesRouter;