import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  user: {
    //connects the user model by ID
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  profileImage: {
    type: String,
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
});

const Profile = mongoose.model("profile", ProfileSchema);
export default Profile;
