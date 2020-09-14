import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background-color: white;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 10vh;
  color: #6a90a3;
  padding: 60px 0 0 30px;
  letter-spacing: 5px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 1.7em;
  background: white;
  border-radius: 3px;
  border-color: #90adbb;
  margin: 100;
  font-size: 1.5vh;
  width: 60vh;
  color: #3a535f;
`;

const Message = styled.textarea`
  padding: 0.5em;
  margin: 1.7em;
  background: white;
  border: 1;
  border-radius: 3px;
  border-color: #6a90a3;
  margin: 100;
  font-size: 1.5vh;
  color: #3a535f;
  width: 60vh;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1.0em;
  border-radius: 3px;
  position: absolute;
  width: 104px;
  height: 40px;
  background: #6A90A3;
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #FFFFFF;
`;

const Form = styled.form`
   width: 100%;
`;

function Contact() {
  return (
    <Wrapper>
      <Content>
        <Title>Hafa samband</Title>
        <Form>
         <Input defaultValue="Nafn" type="text" ></Input>
         <Input defaultValue="Netfang" type="text" ></Input>
         <Message defaultValue="Skilaboð"></Message>
         <Button>Senda</Button>
        </Form>
      </Content>
    </Wrapper>
  );
}

export default Contact;
