import mongoose from "mongoose";

const UploadSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

const Upload = mongoose.model("Upload", UploadSchema);

export default Upload;
