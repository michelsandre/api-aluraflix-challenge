import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "Título obrigatório"] },

    descricao: { type: String, required: [true, "Descrição obrigatório"] },
    url: { type: String, required: [true, "URL obrigatório"] },
  },
  { versionKey: false }
);

const video = mongoose.model("videos", videoSchema);

export default video;
