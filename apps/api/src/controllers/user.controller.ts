import type { Request, Response } from "express";

import { userSchema } from "@deployment-lab/validation";

import {
  createUser,
  getUsers,
} from "../services/user.service.js";

export async function createUserController(
  req: Request,
  res: Response,
) {
  const input = userSchema.parse(req.body);

  const user = await createUser(
    input.name,
    input.email,
  );

  res.status(201).json({
    success: true,
    data: user,
  });
}

export async function getUsersController(
  _req: Request,
  res: Response,
) {
  const users = await getUsers();

  res.status(200).json({
    success: true,
    data: users,
  });
}