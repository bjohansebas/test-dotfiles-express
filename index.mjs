import express from 'express'

const app = express()

app.use(express.static("public", {
    fallthrough: false,
}))        

app.listen(3000,()=>{
    console.log("Listening")
})                          