import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 10px;
  @media (max-width: 750px) {
    display: none;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #888888;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
`;

const Item = styled.iframe`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 420px;
  height: 300px;
  background: #F0F0F0;
  border: 1px dashed #888888;
  @media (max-width: 1499px) {
    width: 360px;
  }
`;


function Iframe(props) {
  return ( 
    <Container>
      <Text>Реклама</Text>
      <Post>
        <Item title="This is a unique title"
          src="./ads.html"
        ></Item>
        <Item title="This is a unique title"
          src="./ads.html"
        ></Item>
      </Post>
    </Container>
    );
}
export default Iframe;
