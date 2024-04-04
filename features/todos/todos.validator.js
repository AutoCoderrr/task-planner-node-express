// ye bhi export yaha se app .jsme 

exports.validateTodo = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: `title and description are required ` });
    }
    next();
};