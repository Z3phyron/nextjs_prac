import axios from "axios";
import Layout from "../../../components/Layout";
import {
  Blog,
  Container,
  Content,
  Title,
} from "./styles";
const url = "/api/blog";

export async function getStaticPaths() {
    const { data } = await axios.get(url);
   
    const paths = data?.data?.map((blog) => {
        //   console.log(blog)
    return {
      params: { id: `${blog._id}` },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { params } = context;
 
  const { id } = params;
//    console.log(id)
  const { data } = await axios.get(`${url}/${id}`);

  return {
    props: { blog: data?.data },
  };
}

const index = ({blog}) => {
    return (
        <Layout>
            <Container>
              <Title>{blog.title}</Title>
                <Content>{blog.content}</Content>
            </Container>
           
        </Layout>
    );
}



export default index;