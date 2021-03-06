import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f1efee;
  color: #746e6e;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 30px;
  padding: 60px 0 30px 0;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'GT Sectra Medium'
`;

const SubTitle = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
  width: 75%;
  margin: 10px auto;
  font-family: 'GT Sectra Medium'
`;

const Input = styled.input`
  padding: 5px 15px;
  margin: 30px auto 0 auto;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  width: 75%;
  height: 30px;
  font-family: 'Helvetica';
`;

const Message = styled.textarea`
  padding: 5px 15px;
  margin: 30px auto 0 auto;
  border-radius: 5px;
  border: none;
  margin: 100;
  font-size: 18px;
  width: 75%;
  height: 60px;
  font-family: 'Helvetica';
`;

const Button = styled.button`
  margin: 60px auto 20px auto;
  border-radius: 3px;
  background: white;
  font-size: 24px;
  line-height: 35px;
  display: block;
  padding: 5px 25px;
  border: none;
  cursor: pointer;
  color: #746e6e;
  font-family: 'Helvetica';
`;

const Form = styled.form`
  width: 100%;
`;

const SubmitMsg = styled.form`
  font-size: 30px;
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
  const { register, handleSubmit, setValue } = useForm<Inputs>();
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
        <Title>Hafðu samband</Title>
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
          <SubTitle>eða sendu beint á hello@spjara.is</SubTitle>
        </Form>
        <SubmitMsg>{submitMsg}</SubmitMsg>
      </Content>
    </Wrapper>
  );
}

export default Contact;
