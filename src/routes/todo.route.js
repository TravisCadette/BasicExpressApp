module.exports = (app) => {
  const todo = require("../controllers/todo.controller");

  const router = require("express").Router(); // GET all users

  router.get("/", todo.findAll); // GET user by Id

  router.get("/:id", todo.findById);
  app.use("/api/todo", router);
};
