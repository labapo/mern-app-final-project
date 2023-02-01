import mongoose from "mongoose";
const Profile = mongoose.model(
  "Profile",
  new mongoose.Schema({
    user: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    tiktok: {
      type: String,
    },
    reddit: {
      type: String,
    },
    personalWebsite: {
      type: String,
    },
  })
);

// const ProfileSchema = new mongoose.Schema({
//   user: {
//     //connects the user model by ID
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   },
//   name: {
//     type: String,
//   },
//   profileImage: {
//     type: String,
//   },
//   linkedin: {
//     type: String,
//     required: true,
//   },
//   facebook: {
//     type: String,
//   },
//   instagram: {
//     type: String,
//   },
//   twitter: {
//     type: String,
//   },
//   tiktok: {
//     type: String,
//   },
//   reddit: {
//     type: String,
//   },
//   personalWebsite: {
//     type: String,
//   },
// });

// const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
