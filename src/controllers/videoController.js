import video from "../models/Video.js";

class VideoController {
  static async getVideos(req, res) {
    try {
      const videosList = await video.find();
      res.status(200).send(videosList);

      console.log(videosList);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async addVideo(req, res) {
    try {
      const newVideo = await video.create(req.body);
      res.status(201).send({ message: "Video cadastrado", video: newVideo });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default VideoController;
