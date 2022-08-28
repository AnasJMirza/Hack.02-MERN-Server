import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    mobile: {
      type: Number,
      required: true,
    },

    imgUrl: {
      type: String,
      default:
        "https://thecanalcity.com/wp-content/uploads/2021/01/Real-Estate-Career.jpg",
    },
  },

  { timestampes: true }
);

export default mongoose.model("Post", PostSchema);
