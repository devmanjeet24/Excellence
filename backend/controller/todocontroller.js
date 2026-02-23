const Todo = require("../model/Todo.js");



const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      user: req.user._id,
      title,
      description,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getTodos = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "" } = req.query;

    const query = {
      user: req.user._id,
      title: { $regex: search, $options: "i" },
    };

    const todos = await Todo.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Todo.countDocuments(query);

    res.json({
      todos,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateTodo = async (req, res) => {
  try {
    const { title, description, isCompleted } = req.body;

    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.title = title ?? todo.title;
    todo.description = description ?? todo.description;
    if (typeof isCompleted === "boolean") {
      todo.isCompleted = isCompleted;
    }

    const updatedTodo = await todo.save();

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};