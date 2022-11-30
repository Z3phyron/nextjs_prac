import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const Form = styled.form``
export const Header = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;
export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;

  /* display: flex; */
  align-items: baseline;
  /* flex-wrap: wrap; */
  /* justify-content: s */
  
`;
export const Blog = styled.div`
  width: 100%;
  max-width: 250px;
  height: 30vh;
  padding: 30px  20px 20px;
  border-radius: 20px;
  position: relative;
  
  background: linear-gradient(145deg, rgba(219, 219, 219, 0.08), rgba(202, 202, 202, 0.161));
  box-shadow: 1px 5px 10px rgba(190, 190, 190, 0.139), -1px -5px 10px rgba(255, 255, 255, 0.067);
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Oops = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
letter-spacing: 1px;
`;
export const Buttons = styled.div`
display: flex;
gap: 20px;
float: right;
position: absolute;
top: -20px;
right: 0;
`;
export const Readmore = styled(Link)`
letter-spacing: 1px;
color: black;
text-decoration: none;
`;
