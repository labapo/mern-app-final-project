import mongoose from "mongoose";

const User = mongoose.model(
  "User", new mongoose.Schema({
    firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        profileImage: {
          type: String,
          // required: true,
        }
  })
);
export default User;
// const UserSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   profileImage: {
//     type: String,
//     required: true,
//   },
// });
// const User = mongoose.model("User", UserSchema);
// export default User;
