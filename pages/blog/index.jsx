import axios from "axios";
import Layout from "../../components/Layout";
import {
  Blog,
  BlogList,
  Container,
  Content,
  Header,
  Readmore,
  Title,
} from "./styles";
const url = "http://localhost:3000/api/blog";

const Index = ({ blogs }) => {
  return (
    <Layout>
      <Container>
        <Header>Latest Blogs</Header>
        <BlogList>
          {blogs.map((blog) => (
            <Blog key={blog._id}>
              <Title>{blog.title}</Title>
              <Content>{blog.content.slice(0,50)}.....</Content>
              <Readmore href={`/blog/${blog._id}`}>Read More</Readmore>
            </Blog>
          ))}
        </BlogList>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { data } = await axios.get(url);

  return {
    props: {
      blogs: data.data,
    },
  };
};

export default Index;
