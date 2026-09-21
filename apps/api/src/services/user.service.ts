import { User } from "../models/user.model.js";

export async function createUser(
  name: string,
  email: string,
) {
  return User.create({
    name,
    email,
  });
}

export async function getUsers() {
  return User.find()
    .sort({ createdAt: -1 })
    .lean();
}