import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  name: string;
  email: string;
  tel: string;
  description: string;
}

const userSchema = new mongoose.Schema<Users>({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  tel: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", userSchema, "contactFrom");
