import Layout from "../../components/Layout";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi";
import axios from "axios";
import { Checkbox, Button, Input } from "@nextui-org/react";
import { useState } from "react";

import { useRouter } from "next/router";
const url = "http://localhost:3000/api/todo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 50%;
    border-radius: 46px;

    @media screen and (max-width: 860px) {
      width: 100%;
    }

    .input {
      background: #fff;
      box-shadow: 10px 10px 20px rgba(213, 213, 213, 0.137),
        -10px -10px 20px rgba(235, 235, 235, 0.308);
      display: grid;
      grid-template-columns: 80% auto;
      grid-gap: 20px;
      width: 100%;
      /* height: 7vh; */
      border-radius: 50px;
      overflow: hidden;
      padding: 10px;

      /* input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        padding: 10px 30px;
        font-size: 20px;
      } */

      button {
        width: 100%;
        border-radius: 50px;
        border: none;
        outline: none;
        background: rgba(22, 255, 158, 0.192);
        font-size: 20px;
        transition: all 0.3s;

        background: linear-gradient(
          145deg,
          rgba(5, 248, 167, 0.253),
          rgba(38, 135, 245, 0.164)
        );
        box-shadow: 10px 10px 20px rgba(213, 213, 213, 0.041),
          -10px -10px 20px rgba(235, 235, 235, 0.137);

        &:hover {
          background: linear-gradient(
            145deg,
            rgba(5, 248, 167, 0.486),
            rgba(38, 135, 245, 0.37)
          );
          box-shadow: 10px 10px 20px rgba(213, 213, 213, 0),
            -10px -10px 20px rgba(235, 235, 235, 0.034);
          color: rgb(255, 255, 255);
        }
      }
    }

    .todoList {
      margin-top: 3vh;
      background: #fff;
      box-shadow: 10px 10px 20px rgba(213, 213, 213, 0.137),
        -10px -10px 20px rgba(235, 235, 235, 0.308);
      padding: 10px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .todo {
        background: #fff;
        box-shadow: 10px 10px 20px rgba(213, 213, 213, 0.137),
          -10px -10px 20px rgba(235, 235, 235, 0.308);
        padding: 10px;
        border-radius: 20px;
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: auto 20%;
        grid-gap: 20px;
        align-items: center;
      }
    }
  }
`;

const Index = ({ todos }) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
    setValue(" ")
  };

  const updateTodo = async (id) => {
    try {
       await axios.put(`http://localhost:3000/api/todo/${id}`, {id});

      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
       await axios.delete(`http://localhost:3000/api/todo/${id}`);

      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/todo", {
        todo: value,
      });
      setValue(" ");
      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Container>
        <div className="wrapper">
          <div className="input">
            <Input
              aria-label=".."
              rounded
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              type="submit"
              auto
              rounded
              onPress={createNote}
              icon={<HiPlus />}
            />
          </div>

          <div className="todoList">
            {todos &&
              todos.map((todo) => (
                <div className="todo" key={todo._id}>
                  <Checkbox
                    isRounded={true}
                    lineThrough={todo.isCompleted}
                    defaultSelected={todo.isCompleted}
                    onChange={() => updateTodo(todo._id)}
                  >
                    {todo.todo}
                  </Checkbox>
                  <button onClick={() => deleteTodo(todo._id)}>Del</button>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

// Index.getInitialProps = async () => {
//   const { data } = await axios.get("http://localhost:3000/api/todo");
// //   console.log(data.data)

//   return { todos: data.data };
// };
export const getServerSideProps = async () => {
  const { data } = await axios.get(url);
  return {
    props: {
      todos: data.data,
    },
  };
};

export default Index;
