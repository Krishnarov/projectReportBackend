import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ConnectDB from "./config/DB.js"
import studentsRoutes from "./routes/studentProjectRoutes.js"
import ReportRoutes from "./routes/reportPdfRoutes.js"
dotenv.config()
ConnectDB()
const app =express()
const PORT = process.env.PORT || 3001;
app.use(cors({
    origin: "http://localhost:5173",
     methods: ["GET", "POST", "PUT", "DELETE"],
}))
// app.use(cors())
app.use(express.json())

// app.use('/',(req,res)=>{
//     res.send("RAM RAM")
// })
app.use("/api",studentsRoutes)
app.use("/api/report-pdf",ReportRoutes)


app.listen(PORT,()=>{
console.log(`Server is Live on localhost:${PORT}`); 
})