const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ new: true, runValidations: true });

module.exports = Todo;
