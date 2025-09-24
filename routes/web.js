import express from "express"

const web = express.Router()

web.get('/', (req, res) => {
    res.render ('index')
})
web.get('/:username', (req, res) =>{
    const username = req.params.username
    res.render( "public-profile" , {
        title : username,
        username : username,
        bio: "Ini adalah Aku! Raja Mexico! El Matadore Salvador Tequila El Conthole"
    })    
})

export default web