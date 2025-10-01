export const register = async(req, res) => {
    try {res.status(201).json({
            message : "Berhasil Register, Silahkan Login Kembali",
            data : null
        })
        
    } catch (e){
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}