import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const Header = styled.div`
  font-size: 30px;
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
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(219, 219, 219, 0.08), rgba(202, 202, 202, 0.161));
  box-shadow: 1px 5px 10px rgba(190, 190, 190, 0.139), -1px -5px 10px rgba(255, 255, 255, 0.067);
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const Content = styled.div`
letter-spacing: 1px;
`;
export const Readmore = styled(Link)`
letter-spacing: 1px;
`;
