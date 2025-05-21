import express from "express";
import upload from "../middleware/multer.js";
import { storepdf } from "../controller/projectPdfContraller.js";

const router = express.Router();

router.post("/", upload.single("pdf"), storepdf);

export default router;
