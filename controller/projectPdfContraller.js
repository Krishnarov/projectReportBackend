import ProjectPdf from "../models/projectPdf.js";

export const storepdf = async (req, res) => {
  try {
    const { studentId } = req.body;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "No PDF file uploaded" });
    }

    const newPdf = new ProjectPdf({
      studentId,
      report: req.file.path // Cloudinary file URL
    });

    await newPdf.save();

    res.status(201).json({
      message: "PDF uploaded and saved successfully",
      data: newPdf
    });
  } catch (error) {
    console.error("Error storing PDF:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};
