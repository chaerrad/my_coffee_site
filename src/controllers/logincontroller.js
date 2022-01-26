import User from "../models/loginmodels";
export const login = (req,res) => {
    res.render("login.pug");
}
export const logout= (req,res) => {
    res.send("logout");
}
export const postlogin = async (req,res) => {
    const {ID,password} = req.body;
    await User.create({
        ID,
        password
    });
    res.redirect("/");
}
export const adminlogin = (req,res) => {
    res.render();
}

export const customlogin = (req,res) => {
    res.send("custom-login");
}
