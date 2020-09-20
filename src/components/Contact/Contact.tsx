import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';

const Wrapper = styled.div`
  width: 100%;
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

const SubTitle = styled.div`
  font-size: 18px;
  color: #6a90a3;
  padding: 60px 0 0 30px;
  letter-spacing: 2px;
  width: 75%;
`;

const Input = styled.input`
  padding: 5px 15px;
  margin: 30px 0 0 30px;
  border-radius: 3px;
  border: 1px solid #90adbb;
  font-size: 16px;
  width: 75%;
  height: 30px;
  color: #3a535f;
`;

const Message = styled.textarea`
  padding: 5px 15px;
  margin: 30px 0 0 30px;
  border-radius: 3px;
  border: 1px solid #90adbb;
  margin: 100;
  font-size: 16px;
  color: #3a535f;
  width: 75%;
  height: 60px;
`;

const Button = styled.button`
  margin: 60px 0 20px 30px;
  border-radius: 3px;
  background: #6a90a3;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
  display: block;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
`;

const SubmitMsg = styled.form`
  font-size: 30px;
  color: #6a90a3;
  letter-spacing: 1px;
  margin-top: 2em;
  margin-left: 1em;
`;

type Inputs = {
  name: string;
  email: string;
  msg: string;
};

function Contact() {
  const [submitMsg, setSubmitMsg] = useState('');
  const { register, handleSubmit, setValue, errors } = useForm<Inputs>();
  const onSubmit = (data: { name: any; email: any; msg: any }) => {
    let templateParams = {
      from_name: data.name,
      to_name: 'Spjara',
      email: data.email,
      message_html: data.msg
    };

    emailjs
      .send(
        'service_4yru8hc',
        'template_g116hw5',
        templateParams,
        'user_Mu5sU68wfPCmuoQXa0rIh'
      )
      .then(
        function(response) {
          setSubmitMsg('Skilaboðin þín hafa verið send. Takk fyrir!');
          setValue('name', '');
          setValue('email', '');
          setValue('msg', '');
        },
        function(error) {
          setSubmitMsg('Villa kom upp við sendingu, vinsamlegast reynið aftur');
        }
      );
  };

  return (
    <Wrapper>
      <Content>
        <Title>Hafa samband</Title>
        <SubTitle>
          Ef þú ert með hugmyndir eða spurningar til okkar, ekki þá hika við að
          vera í sambandi!
        </SubTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            placeholder="Nafn*"
            type="text"
            ref={register({ required: true })}
          />
          <Input
            name="email"
            placeholder="Netfang*"
            type="text"
            ref={register({ required: true })}
          />
          <Message
            placeholder="Skilaboð*"
            name="msg"
            ref={register({ required: true })}
          />
          <Button type="submit">Senda</Button>
        </Form>
        <SubmitMsg>{submitMsg}</SubmitMsg>
      </Content>
    </Wrapper>
  );
}

export default Contact;
