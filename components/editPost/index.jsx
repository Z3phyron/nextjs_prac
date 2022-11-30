import axios from "axios";
import { useEffect, useState } from "react";
import { Avatar, Button, Input, Spacer, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Container, Content, Title, ThumbNail } from "./styles";

const url = "http://localhost:3000/api/blog/";

const Index = ({ id }) => {
  // const [blog, setBlog] = useState(null)

  // console.log(blog)

  const CreateOtp = () => {
    const otpLength = 5;
    let otp = "";
    for (let i = 0; i < otpLength; i++) {
      otp += Math.floor(Math.random() * 9);
    }

    return otp;
  };

  return (
    <div>
      <Container onSubmit={onSubmit}>
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
      </Container>
    </div>
  );
};

export default Index;
