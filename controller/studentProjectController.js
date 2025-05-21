import StudentProject from "../models/StudentProject.js"

// Create New Project Entry
export const createProject = async (req, res) => {
  try {
    const newProject = new StudentProject(req.body);
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await StudentProject.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One Project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await StudentProject.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not Found' });
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Project
export const updateProject = async (req, res) => {
  try {
    const updated = await StudentProject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const addProjectScreenshort = async (req, res) => {
  try {
    const projectAssets = {
      projectCode: req.files?.projectCode?.map(file => file.path) || [],
      uiScreenshots: req.files?.uiScreenshots?.map(file => file.path) || [],
      dfdDiagram: req.files?.dfdDiagram?.[0]?.path || '',
      erDiagram: req.files?.erDiagram?.[0]?.path || '',
    };    
    const updated = await StudentProject.findByIdAndUpdate(req.params.id, {projectAssets:projectAssets}, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    await StudentProject.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
