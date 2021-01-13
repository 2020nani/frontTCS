import React, { useState, useEffect } from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles'
import Resposta from '../Resposta/index'

const schema = Yup.object().shape({
  text: Yup.string()
    .required(),

})
export default function Conversa(props) {
  const bots = props.children[0]
  const user = props.children[1]
  const [text, setText] = useState();
  const [userChoice, setUserChoice] = useState();
  const [sendMensagem, setSendMensagem] = useState(false);
  const [sendResposta, setSendResposta] = useState(false);

  async function Message({ text }) {
    console.log(text)

    { sendResposta === false ? setSendResposta(true) : setSendResposta(false) }
    setText(text)
  }

  async function choiceUser(e) {

    { sendMensagem === false ? setSendMensagem(true) : setSendMensagem(false) }
    setUserChoice(e)
  }


  return (
    <Container>
      {sendMensagem === false ?
        <>
          <div><h1>Qual usuario recebera a mensagem</h1></div>

          <div>
            {bots.map(bot => (

              <button value={bot._id} onClick={(e) => choiceUser(e.target.value)}>{bot.nome}</button>

            ))}
          </div>
        </>
        : sendMensagem === true && sendResposta === false ? <div>
          <Form schema={schema} onSubmit={Message} >
            <Input name="text" type="text" placeholder="mensagem" />
            <button type="submit" >Enviar</button>
          </Form>
        </div>
          : sendMensagem === true && sendResposta === true ?
            <Resposta>{[user, userChoice, text]}</Resposta> : <div></div>
      }



    </Container>
  )
}