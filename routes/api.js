import express from "express"
import * as authController from "../controller/authController.js"
const app = express.Router()

api.post('/register', authController.register)

export default api 

