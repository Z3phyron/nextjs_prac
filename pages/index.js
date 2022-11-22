import axios from "axios";
import Layout from "../components/Layout";

const Home = ({ notes }) => {
  return (
    <Layout>
      {notes &&
        notes.map((note) => (
          <div className="note" key={note._id}>
            {note.title}
          </div>
        ))}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/todo");
  // console.log(data.data)
   

  return { notes: data.data };
};

export default Home;
