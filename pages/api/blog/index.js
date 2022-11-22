import nc from "next-connect";
import Blog from "../../../models/Blog";
import dbConn from "../../../utils/dbConn";

dbConn();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(process.cwd(), "public", "uploads"));
//     },
//     filename: function (req, file, cb) {
//       file.name = uuidv4();
//       let fileName = file.name + "." + file.mimetype.split("/")[1];
//       cb(null, fileName);
//     },
//   }),
// });

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .post(async (req, res) => {
    // const image = 'http://localhost:3000/public/uploads/'
    try {
      const blog = new Blog({
        title: req.body.title,
        content: req.body.content
      });

      await blog.save();
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
  })
  .get(async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(201).json({
        succes: true,
        data: blogs,
      });
    } catch (error) {
      res.status(500).json({
        succes: false,
        error: error,
      });
    }
  });

export default handler;

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const blogs = await Blog.find();
//         res.status(201).json({
//           succes: true,
//           data: blogs,
//         });
//       } catch (error) {
//         res.status(500).json({
//           succes: false,
//           error: error,
//         });
//       }
//       break;
//     case "POST":
//       try {
//         const blog = await Blog.create(req.body);
//         res.status(201).json({
//           succes: true,
//           data: blog,
//         });
//       } catch (error) {
//         res.status(500).json({
//           succes: false,
//           error: error,
//         });
//       }
//       break;
//     default:
//       res.status(400).json({
//         succes: false,
//       });
//   }
// };
