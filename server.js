import { app } from "./app.js";
import "./db/connection.js"

app.listen(process.env.port,()=>{
    console.log(`server is live at port ${process.env.port} in ${process.env.NODE_ENV} mode`)
})