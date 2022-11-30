import dbConn from "../../../utils/dbConn";
import nc from "next-connect";
import Blog from "../../../models/Blog";

dbConn();

// const handler = nc({
//   onError: (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).end("Something broke!");
//   },
//   onNoMatch: (req, res) => {
//     res.status(404).end("Page is not found");
//   },
// })
//   .get(async (req, res) => {
//     const id = req.query;
//     try {
//       const blog = await Blog.findOne({ _id: id });
//       if (!blog) {
//         res.status(400).json({
//           succes: false,
//         });
//       }
//       res.status(201).json({
//         succes: true,
//         data: blog,
//       });
//     } catch (error) {
//       res.status(500).json({
//         succes: false,
//         error: error,
//       });
//     }
//   })
//   .put((req, res) => {})
//   .delete((req, res) => {});

// export default handler;

export default async (req, res) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          res.status(400).json({
            succes: false,
          });
        }
        res.status(201).json({
          succes: true,
          data: blog,
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
        const blog = await Blog.findByIdAndUpdate(id, { ...body });

        res.status(201).json({
          succes: true,
          data: blog,
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
        await Blog.findByIdAndDelete(id);

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
