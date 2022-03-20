import express from "express"; 
const {httpAddNewLaunch, httpGetAllLaunches, httpAbortLaunch} = require("./launch.controller")
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches )
launchesRouter.post("/", httpAddNewLaunch )
launchesRouter.delete("/:id", httpAbortLaunch )
export default launchesRouter;