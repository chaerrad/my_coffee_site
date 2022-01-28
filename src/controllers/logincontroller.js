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
    const check = await User.exists({ ID: ID });
    if (check)
    {
        console.log("Already ID exists, find other ID");
        return res.render("join.pug");
    }
    else {
    try{
        const user = await User.create(
        {
            ID,
            password
        }
    );
    console.log("Create Success");
    res.redirect("/");
    } catch (error)
    {
        console.log("error");
        return res.render("join.pug");
    }
}

}
export const postlogin = async (req,res) => {
    const {ID,password} = req.body;
    const user = await User.findOne( {ID : ID} );
    if(!user)
    {
        console.log("please create ID");
        return res.render("login");
    }
    else {
        if(user.password === password)
        {
            console.log("password correct");
            return res.redirect("/");
        }
        else
        {
            console.log("password wrong");
            return res.redirect("login");
        }
    }
    
}
export const adminlogin = (req,res) => {
    res.render();
}

export const customlogin = (req,res) => {
    res.send("custom-login");
}
