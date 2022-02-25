export const localMiddleware  = (req,res,next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    next();
}