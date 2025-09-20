import express from "express"
import web from "./routes/web.js"

const app = express()

app.use(express.json())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(web)

app.listen(3000, () => {
    console.log("aplikasi berjalan di http://localhost:3000")
})