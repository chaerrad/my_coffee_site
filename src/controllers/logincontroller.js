export const login = (req,res) => {
    res.render("login.pug");
}
export const logout= (req,res) => {
    res.send("logout");
}
export const adminlogin = (req,res) => {
    res.send("admin-login");
}

export const customlogin = (req,res) => {
    res.send("custom-login");
}
