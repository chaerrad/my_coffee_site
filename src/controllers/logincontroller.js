import User from "../models/loginmodels";
export const login = (req,res) => {
    res.render("login.pug");
}
export const logout= (req,res) => {
    res.send("logout");
}
export const join= (req,res) => {
    res.render("join.pug");
}
export const postJoin = async (req,res) => {
    const {ID,password} = req.body;
    const user = await User.create(
        {
            ID,
            password
        }
    );
    res.redirect("/");
}
export const postlogin = async (req,res) => {
    const {ID,password} = req.body;
    
    return res.redirect("/");
}
export const adminlogin = (req,res) => {
    res.render();
}

export const customlogin = (req,res) => {
    res.send("custom-login");
}
