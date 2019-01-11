const restiful = require("node-restful");
const mongoose = restiful.mongoose;

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = restiful.model("Todo", todoSchema);
