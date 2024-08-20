import {
  getOnboardingDetails,
  storeOnboardingDetails,
} from "../controllers/onboarding";
import { authenticateJWT } from "../middleware/auth";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /onboarding:
 *   post:
 *     summary: Save onboarding details.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Onboarding details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               personalDetails:
 *                 type: object
 *               businessDetails:
 *                 type: object
 *               publicDetails:
 *                 type: object
 *               bankDetails:
 *                 type: object
 *     responses:
 *       201:
 *         description: Onboarding details saved successfully
 *       500:
 *         description: Failed to save onboarding details
 */
router.post("/onboarding", authenticateJWT, storeOnboardingDetails);

/**
 * @swagger
 * /onboarding/{id}:
 *   get:
 *     summary: Retrieve onboarding details by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Onboarding details retrieved successfully
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Onboarding details not found
 *       500:
 *         description: Failed to retrieve onboarding details
 */
router.get("/onboarding/:id", authenticateJWT, getOnboardingDetails);

export default router;
