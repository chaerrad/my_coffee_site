export const reserve = (req,res) =>{
    return res.send("reserve")
}
export const watch = (req,res) =>{
    return res.send(`watch seat ${req.params.id}`)
}
export const edit = (req,res) =>{
    return res.send(`edit ${req.params.id}`)
}
export const remove = (req,res) =>{
    return res.send(`remove ${req.params.id}`)
}