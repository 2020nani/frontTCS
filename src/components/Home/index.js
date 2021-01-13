import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
import { Container, Button } from './styles';
import * as Yup from 'yup';
import Conversa from '../Conversa';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required(),

})
const schemaId = Yup.object().shape({
  id: Yup.string()
    .required(),

})

export default function Home() {

  const [user, setUser] = useState();
  const [bots, setBots] = useState([]);
  const [choice, setChoice] = useState(false);
  const [message, setMessage] = useState(false);

  async function loadBots() {
    { message === false ? setMessage(true) : setMessage(false) }
    const response = await api.get('bots')
    setBots(response.data)
  }


  async function handleSubmit({ nome }) {
    { choice === false ? setChoice(true) : setChoice(false) }
    const response = await api.post('bots', {
      nome,
    })
    setUser(response.data.nome._id);

  }

  return (

    <Container>

      {choice === false ?
        <>
          <h1>Por favor digite seu nome para enviar mensagem</h1>
          <Form schema={schema} onSubmit={handleSubmit} >
            <Input name="nome" type="text" placeholder="nome" />
            <button type="submit" >Enviar</button>
          </Form>
        </> : choice === true && message === false ?
          <>
            <h1>Clique para pesquisar usuario que enviara a mensagem</h1>

            <Button onClick={() => loadBots()}>Pesquisar todos</Button>
          </>
          : choice === true && message === true ? <Conversa>{[bots, user]}</Conversa>
            : <div></div>}




    </Container>

  );

}
