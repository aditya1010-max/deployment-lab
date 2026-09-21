import type { Request, Response } from "express";

export function getMessage(_req: Request, res: Response) {
  res.status(200).json({
    success: true,
    data: {
      message: "Hello from deployment-lab API",
    },
  });
}