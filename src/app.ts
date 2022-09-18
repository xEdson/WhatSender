import express, { Request, Response } from "express";
import Sender from "./sender";

const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get("/status", (req: Request, res: Response) => {

})

app.post("/send", async (req: Request, res: Response, next)=>{
    const {number, message} = req.body
    try{
        console.log('Numeros Recebidos', number)

         await number.forEach(async (element: string) => {
             console.log(element)
             sender.sendText(element, message)
         });
       // await sender.sendText(number, message)
        return res.status(200).json() 
    }catch(error){
        console.error(error)
        next(error)
        res.status(500).json({status: "error", message: error})

    }

})

app.listen(5000, ()=>{
    console.log("Server started")
})

