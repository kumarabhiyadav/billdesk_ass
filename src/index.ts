import express from "express";
import { mongoose } from "@typegoose/typegoose";
import 'dotenv/config'
import { MainRoutes } from "./main.routes";



const app = express();
const port = process.env.PORT;


app.use(express.json({ limit: "5mb" }));


// ############### === DB CONNECTION === ########################
mongoose.set("strictQuery", true);

mongoose
    .connect(process.env.DATABASEURL ?? "")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

// ############### === DB CONNECTION END === ########################

app.use("/api", MainRoutes);

// Status Check
app.get("/", (req, res) => {
    res.send("Serving on port" + port);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});



