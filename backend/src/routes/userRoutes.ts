import { Router } from "express";
import { authenticate, AuthRequest } from "../middleware/authMiddleware";

const router = Router();

router.get("/profile", authenticate, (req: AuthRequest, res) => {
  res.json({
    success: true,
    message: "Protected Route",
    user: req.user,
  });
});

export default router;