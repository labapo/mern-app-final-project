import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  creator: {
    //connects the user model by ID
    type: String,
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

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
