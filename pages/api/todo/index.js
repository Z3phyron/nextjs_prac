import dbConn from "../../../utils/dbConn";

import Todo from "../../../models/Todo";

dbConn();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const todos = await Todo.find();
        res.status(201).json({
          succes: true,
          data: todos,
        });
      } catch (error) {
        res.status(500).json({
          succes: false,
          error: error,
        });
      }
      break;
    case "POST":
      try {
        const note = await Todo.create(req.body);
        res.status(201).json({
          succes: true,
          data: note,
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
