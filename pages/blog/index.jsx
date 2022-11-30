import axios from "axios";
import Layout from "../../components/Layout";
import {
  Modal,
  Button,
  Input,
  Spacer,
  Textarea,
  Loading,
} from "@nextui-org/react";
import {
  Blog,
  BlogList,
  Container,
  Content,
  Header,
  Readmore,
  Title,
  Form,
  Buttons,
  Oops,
} from "./styles";
import { HiPencil } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { useRouter } from "next/router";
import { useState } from "react";
const url = "/api/blog/";

const Index = ({ blogs }) => {
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    content: "",
  });
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { title, content, _id } = formData;
  const router = useRouter();

  const handler = (id) => {
    getBlog(id);
    setVisible(true);
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  console.log(formData);

  const getBlog = async (id) => {
    try {
      const { data } = await axios.get(url + id);
      setIsLoading(false);

      setFormData(data.data);
      //  setVisible(true);
    } catch (error) {
      setError(error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const blog = new FormData();
    blog.append("title", title);
    blog.append("content", content);

    try {
      const { data } = await axios.put("/api/blog/" + _id, formData);
      setVisible(false);
      router.replace(router.asPath);
    } catch (e) {
      alert(error);
    }
  };

  const DelBlog = async (id) => {
    try {
      const { data } = await axios.delete("/api/blog/" + id);

      router.replace(router.asPath);
    } catch (e) {
      alert(error);
    }
  };

  return (
    <Layout>
      <Container>
        {blogs.length <= 0 ? (
          <Oops>
            <p>Oops!!! no Blogs created</p>
          </Oops>
        ) : (
          <>
            {" "}
            <Header>Latest Blogs</Header>
            <BlogList>
              {blogs.map((blog) => (
                <Blog key={blog._id}>
                  <Title>
                    <Readmore href={`/blog/${blog._id}`}>{blog.title}</Readmore>
                  </Title>
                  <Content>{blog.content.slice(0, 50)}.....</Content>
                  <Buttons>
                    {" "}
                    <Button
                      auto
                      shadow
                      onPress={() => handler(blog?._id)}
                      icon={<HiPencil />}
                    />
                    <Button
                      auto
                      shadow
                      color="error"
                      onPress={() => DelBlog(blog?._id)}
                      icon={<IoMdTrash />}
                    />
                  </Buttons>

                  <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                  >
                    <Modal.Body>
                      {isLoading ? (
                        <Loading type="spinner" size="lg" />
                      ) : (
                        <Form onSubmit={onSubmit}>
                          <Title>
                            <Input
                              fullWidth
                              aria-label="..."
                              placeholder="Title"
                              size="lg"
                              name="title"
                              value={title}
                              onChange={onChange}
                            />
                          </Title>
                          <Spacer y={2} />
                          <Content>
                            <Textarea
                              fullWidth
                              aria-label="..."
                              placeholder="Content"
                              name="content"
                              value={content}
                              onChange={onChange}
                              minRows={4}
                              maxRows={10}
                            />
                          </Content>
                          <Spacer y={2} />
                          <Button auto type="submit">
                            Submit
                          </Button>
                        </Form>
                      )}
                    </Modal.Body>
                  </Modal>
                </Blog>
              ))}
            </BlogList>
          </>
        )}
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
