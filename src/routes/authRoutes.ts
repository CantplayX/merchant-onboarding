import { Router, Request, Response } from "express";
import { generateJWT } from "../middleware/auth";

const router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Logs in a user and returns a JWT token.
 *     requestBody:
 *       description: User credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", (req: Request, res: Response) => {
  const mockUser = {
    username: "superadmin",
    password: "test",
  };

  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    const token = generateJWT({ username: mockUser.username });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

export default router;
