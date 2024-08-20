
import { Request, Response } from "express";
import {
  PersonalDetails,
  BusinessDetails,
  PublicDetails,
  BankDetails,
} from "../entity";
import { logRequest, logResponse } from "../utils/logger";
import { AppDataSource } from "../app";

export const storeOnboardingDetails = async (req: Request, res: Response) => {
  await logRequest(req, res);
  try {
    const personalDetailsRepo = AppDataSource.getRepository(PersonalDetails);
    const businessDetailsRepo = AppDataSource.getRepository(BusinessDetails);
    const publicDetailsRepo = AppDataSource.getRepository(PublicDetails);
    const bankDetailsRepo = AppDataSource.getRepository(BankDetails);

    if (req.body.personalDetails) {
      const personalDetails = personalDetailsRepo.create(
        req.body.personalDetails
      );
      await personalDetailsRepo.save(personalDetails);
    }

    if (req.body.businessDetails) {
      const businessDetails = businessDetailsRepo.create(
        req.body.businessDetails
      );
      await businessDetailsRepo.save(businessDetails);
    }

    if (req.body.publicDetails) {
      const publicDetails = publicDetailsRepo.create(req.body.publicDetails);
      await publicDetailsRepo.save(publicDetails);
    }

    if (req.body.bankDetails) {
      const bankDetails = bankDetailsRepo.create(req.body.bankDetails);
      await bankDetailsRepo.save(bankDetails);
    }

    const response = { message: "Onboarding details saved successfully." };
    await logResponse(req, res);
    res.status(201).json(response);
  } catch (error) {
    console.error("Failed to save onboarding details:", error);
    res.status(500).json({ error: "Failed to save onboarding details" });
  }
};

export const getOnboardingDetails = async (req: Request, res: Response) => {
  await logRequest(req, res);
  try {
    const personalDetailsRepo = AppDataSource.getRepository(PersonalDetails);
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const personalDetails = await personalDetailsRepo.findOne({
      where: { id },
    });

    if (!personalDetails) {
      return res.status(404).json({ error: "Personal details not found" });
    }

    const response = { personalDetails };
    await logResponse(req, res);
    res.status(200).json(response);
  } catch (error) {
    console.error("Failed to retrieve onboarding details:", error);
    res.status(500).json({ error: "Failed to retrieve onboarding details" });
  }
};
