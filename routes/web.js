import express from "express"
import * as profileController from "../controller/profileController.js"

const web = express.Router()

web.get('/', (req, res) => {
    res.render ('index')
})
web.get('/:username', profileController.publicProfile)


export default web