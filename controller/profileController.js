export const publicProfile = (req, res) =>{
    const username = req.params.username
    res.render( "public-profile" , {
        title : username,
        username : username,
        bio: "Dunia Pasti Ada Akhirnya, Bintang-Bintang Pun Ada Umurnya"
    })

}


export const privateProfile = async(req, res)=>{
    try{ 
        const user = req.user;
        res.status(200).json({
            message: "Private Profile Berhasil Di Akses",
            data:user,
        });

    }catch (error) {
        res.status(500).json({
            message: error.message,
            data:null,
        });
    }

};