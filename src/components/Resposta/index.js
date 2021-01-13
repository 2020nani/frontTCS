import React, { useState } from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, Conteudo } from './styles'
import api from '../../services/api'
import RespostaUser from '../RespostaUser';

const schema = Yup.object().shape({
  message: Yup.string()
    .required(),

})
export default function Resposta(props) {

  const text = props.children[2];
  const to = props.children[1];
  const from = props.children[0];
  const [msgId, setMsgId] = useState();
  const [conversa, setConversa] = useState([]);
  const [send, setSend] = useState(false);
  const [continua, setContinua] = useState(false);


  async function encerraConversa() {

    { continua === false ? setContinua(true) : setContinua(false) }
    const response = await api.post('message', {
      text,
      to,
      from,
      conversa
    })
    setMsgId(response.data.mensag._id)

  }

  async function continuaConversa() {

    { send === true ? setSend(false) : setSend(true) }

  }

  async function Resposta(message) {
    let text = message.message;

    conversa.push({
      text,
      from,
      to
    })

    setSend(true)
  }

  return (
    <Container>
      {send === false ?
        <Form schema={schema} onSubmit={Resposta} >
          <Input name="message" type="text" placeholder="mensagem" />
          <button type="submit" >Enviar</button>
        </Form>
        : send === true && continua === false ? <div>
          <button onClick={() => continuaConversa()}>Continuar Conversa</button>
          <button onClick={() => encerraConversa()}>Enviar e encerrar Conversa</button>
        </div> : send === true && continua === true ?
            <RespostaUser>{msgId}</RespostaUser> : <div></div>
      }
    </Container>

  )
}