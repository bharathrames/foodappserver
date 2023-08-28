import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true,
   
    validate: {
      validator: function (username) {
        return username.length >= 4;
      },
      message: props => `Username must be at least 4 characters long!`
    }
  },
  password: { type: String, required: true,
  
    validate: {
      validator: function (password) {
        return password.length >= 8;
      },
      message: props => `Password must be at least 8 characters long!`
    }
  
  },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const UserModel = mongoose.model("users", UserSchema);