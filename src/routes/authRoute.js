import express from "express";
import authCtrl from "../controllers/authController.js";
import { decodeToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/google_login", decodeToken, authCtrl.googleLogin);


export default router;
