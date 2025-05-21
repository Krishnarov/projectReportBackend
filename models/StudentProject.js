import mongoose from "mongoose";

const studentProjectSchema = new mongoose.Schema({
  personalDetails: {
    name: String,
    Number:Number,
    enrollmentNumber: String,
    contactEmail: String,
  },
  collegeDetails: {
    collegeName: String,
    TeacherName:String,
    branch: String,
    session: String,
  },
  projectDetails: {
    projectTitle: String,
    projectName: String,
    TrainingType: String,
    TeamName: String,
    StartDate: String,
    EndDate: String,
    backendTechnology: String,
    frontendTechnology: String,
    database: String,
  },
  projectAssets: {
    projectCode: [String], 
    uiScreenshots: [String], // URLs of images
    dfdDiagram: String, // image URL
    erDiagram: String,  // image URL
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const StudentProject = mongoose.model('StudentProject', studentProjectSchema);
export default StudentProject;
