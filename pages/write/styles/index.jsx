import styled from "styled-components";

export const Container = styled.form`
padding-top: 8vh;
`
export const ThumbNail = styled.div`
 display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 30px;
/* 
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  } */

  .input {
    width: 80px;
    height: 80px;
    background: #fff;
    box-shadow: 0 16px 40px 20% #7090b0;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #7090b0;
    transition: all 0.5s ease;

    .icon {
      transition: all 0.5s ease;
    }

    &:hover {
      background: rgba(121, 121, 121, 0.106);

      .icon {
        transform: scale(1.08);
      }
    }

    input {
      position: absolute;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 8;
    }
  }
`
export const Title = styled.div``
export const Content = styled.div``