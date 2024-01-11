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

  static async getVideosByOrder(req, res) {
    const order = req.params.id;

    try {
      const videoList = await video.find();

      if (!videoList[order - 1]) {
        res.status(400).send({ message: "Register not found" });
      } else {
        res.status(200).send(videoList[order - 1]);
      }
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
