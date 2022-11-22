import React, { useState, useEffect } from "react";
import { Avatar, Button, Input, Spacer, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Container, Content, Title, ThumbNail } from "./styles";
import Layout from "../../components/Layout";
import { BsImageAlt } from "react-icons/bs";
import axios from "axios";

const INITIAL_STATE = {
  title: "",
  content: "",
};

const Index = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const { title, content } = formData;
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const onFileChange = (e) => {
  //   const selectedFiles = e.target.files;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     image: selectedFiles,
  //   }));
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    const blog = new FormData();
    // blog.append('thumbnail', image[0])
    blog.append("title", title);
    blog.append("content", content);
    // console.log(image[0])

    const { data } = await axios.post("/api/blog", formData);
    if (data.success === true) {
      setTimeout(() => {
        setFormData(INITIAL_STATE);
      }, 2000);
    }
  };

  return (
    <Layout>
      <Container onSubmit={onSubmit}>
        {/* <ThumbNail>
          <div className="input">
            <BsImageAlt className="icon" />
            <input
              type="file"
             
              onChange={onFileChange}
            />
          </div>
          <div className="images">
            {image && (
              <Avatar
                src={URL.createObjectURL(image[0])}
                squared
                css={{ size: "$30" }}
                className="image"
              />
            )}
          </div>
        </ThumbNail>
        <Spacer y={2} /> */}
        <Title>
          <Input
            fullWidth
            labelPlaceholder="Title"
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
            labelPlaceholder="Content"
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
      </Container>
    </Layout>
  );
};

export default Index;
