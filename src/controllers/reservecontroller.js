export const reserve = (req,res) =>{
    return res.render("reserve")
}
export const reserveseat = (req,res) =>{
    return res.render("reserve-seat");
}
export const edit = (req,res) =>{
    return res.send(`edit ${req.params.id}`)
}
export const remove = (req,res) =>{
    return res.send(`remove ${req.params.id}`)
}