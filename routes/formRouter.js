import express from "express";
import { getOriginalUrl, shortTheUrl } from "../controller/formController.js";

const router = express.Router();

router.post('/', shortTheUrl);

router.get('/:shortUrl', getOriginalUrl);

export default router;
