import express from "express";
import upload from "../middleware/multer.js";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,addProjectScreenshort
} from "../controller/studentProjectController.js";

const router = express.Router();

// Upload Fields
const uploadFields = upload.fields([
  { name: 'projectCode', maxCount: 10 },
  { name: 'uiScreenshots', maxCount: 10 },
  { name: 'dfdDiagram', maxCount: 1 },
  { name: 'erDiagram', maxCount: 1 }
]);

router.post('/projects', createProject);
router.post('/projects/:id', uploadFields, addProjectScreenshort);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

export default router;
