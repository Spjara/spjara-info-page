import React, {useState} from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import * as emailjs from 'emailjs-com'

const Wrapper = styled.div`
  height: 100vh;
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
  width: 75%;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 60px 0 0 30px;
  background: white;
  border-radius: 3px;
  border-color: #90adbb;
  margin: 100;
  font-size: 1.5vh;
  width: 75%;
  color: #3a535f;
`;

const Message = styled.textarea`
  padding: 0.5em;
  margin: 60px 0 0 30px;
  background: white;
  border: 1;
  border-radius: 3px;
  border-color: #6a90a3;
  margin: 100;
  font-size: 1.5vh;
  color: #3a535f;
  width: 75%;
  height: 7vh;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 60px 0 20px 30px;
  border-radius: 3px;
  width: 104px;
  height: 40px;
  background: #6A90A3;
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
  display: block;
`;

const Form = styled.form`
   width: 100%;
`;

const SubmitMsg= styled.form`
  font-size: 30px;
  color: #6A90A3;
  letter-spacing: 1px;
  margin-top: 2.0em;
  margin-left: 1.0em;
`;

type Inputs = {
  name: string,
  email: string,
  msg: string,
};

function Contact() {
  const [submitMsg, setSubmitMsg] = useState('');
  const { register, handleSubmit, setValue, errors } = useForm<Inputs>();
  const onSubmit = (data: { name: any; email: any; msg: any; }) => {
    let templateParams = {
      from_name: data.name,
      to_name: 'Spjara',
      email: data.email,
      message_html: data.msg,
     }

     emailjs.send(
      'service_4yru8hc',
      'template_g116hw5',
       templateParams,
      'user_Mu5sU68wfPCmuoQXa0rIh'
     )
     .then(
      function(response) {
          setSubmitMsg("Skilaboðin þín hafa verið send. Takk fyrir!");
          setValue("name", "");
          setValue("email", "");
          setValue("msg", "");
      },
      function(error) {
        setSubmitMsg("Villa kom upp við sendingu, vinsamlegast reynið aftur");
      }
    );
  };

  return (
    <Wrapper>
      <Content>
        <Title>Hafa samband</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
         <Input name="name" placeholder="Nafn*" type="text" ref={register({ required: true})} ></Input>
         <Input name="email" placeholder="Netfang*" type="text" ref={register({ required: true})}></Input>
         <Message placeholder="Skilaboð*" name="msg" ref={register({ required: true})}></Message>
         <Button type="submit">Senda</Button>
        </Form>
        <SubmitMsg>{submitMsg}</SubmitMsg>
      </Content>
    </Wrapper>
  );
}

export default Contact;
