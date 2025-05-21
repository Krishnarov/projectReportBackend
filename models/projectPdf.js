import mongoose from "mongoose"
const ProjectPdfSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"StudentProject",
        required:true
    },
    report:{
        type:String,
        required:true
    }
})

export default mongoose.model("ReportPdf", ProjectPdfSchema);