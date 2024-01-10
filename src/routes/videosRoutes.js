import express from "express";
import VideoController from "../controllers/videoController.js";

const routes = express.Router();

routes.get("/videos", VideoController.getVideos);
routes.post("/videos", VideoController.addVideo);

export default routes;
