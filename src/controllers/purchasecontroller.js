export const purchase = (req,res) => {
    res.render("purchase");
};

export const beverage = (req,res) => {
    res.render("purchase-beverage");
};
export const beverages = (req,res) => {
    res.send(`${req.params.id}`);
};

export const bakery = (req,res) => {
    res.render("purchase-bakery");
};

export const bakeries = (req,res) => {
    res.send(`${req.params.id}`);
};

export const icecream = (req,res) => {
    res.render("purchase-icecream");
};

export const icecreams = (req,res) => {
    res.send(`${req.params.id}`);
};