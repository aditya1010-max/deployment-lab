import { Router } from "express";
import { getMessage } from "../controllers/message.controller.js";

const router = Router();

router.get("/", getMessage);

export default router;