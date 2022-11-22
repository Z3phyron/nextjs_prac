import dbConn from "../../../utils/dbConn";

import Todo from "../../../models/Todo";

dbConn();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const todo = await Todo.findById(id);
        if (!todo) {
          res.status(400).json({
            succes: false,
          });
        }
        res.status(201).json({
          succes: true,
          data: todo,
        });
      } catch (error) {
        res.status(500).json({
          succes: false,
          error: error,
        });
      }
      break;

    case "PUT":
      try {
        const todo = await Todo.findOne({ _id: id });
        
        let isCompleted = !todo.isCompleted

        todo.isCompleted = isCompleted
        todo.save()
       
        res.status(201).json({
          succes: true,
          data: todo,
        });
      } catch (error) {
        res.status(500).json({
          succes: false,
          error: error,
        });
      }
      break;

    case "DELETE":
      try {
        await Todo.findByIdAndDelete(id);

        res.status(201).json({
          succes: true,
        });
      } catch (error) {
        res.status(500).json({
          succes: false,
          error: error,
        });
      }
      break;
    default:
      res.status(400).json({
        succes: false,
      });
  }
};
