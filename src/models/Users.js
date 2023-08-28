import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minLength: 4},
  password: { type: String, required: true,  minLength: 8 },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const UserModel = mongoose.model("users", UserSchema);