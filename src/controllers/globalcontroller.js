import User from "../models/loginmodels";
export const handleHome =(req,res) => {
    const {ID,password}=req.body;
    let user = await User.create({
        ID,
        password
    });
    return res.render("home.pug");
}