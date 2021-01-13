import React, { useState } from 'react'
import * as Yup from 'yup';
import { Container, Conteudo } from './styles'
import api from '../../services/api'
import Home from '../Home';

const schema = Yup.object().shape({
  message: Yup.string()
    .required(),

})
export default function RespostaUser(props) {

  const id = props.children;
  const [inicio, setInicio] = useState(false)
  const [conversa, setConversa] = useState(false)
  const [dialogo, setDialogo] = useState([]);


  async function getConversa() {

    const response = await api.get(`message/${id}`, {

    })

    setDialogo(response.data)
    setConversa(true)
  }

  return (
    <Container>
      {conversa === false && inicio === false ?
        <div>
          <button onClick={() => getConversa()}>Mostrar conversa</button>
          <button onClick={() => setInicio(true)}>Nova conversa</button>
        </div>
        : conversa === true && inicio === false ? <div>
          <p >Mandado por {dialogo.from}</p>
          <p >Recebido por {dialogo.to}</p>
          <p >Texto: {dialogo.text}</p>
          {dialogo.conversa.map(conv => (
            <div>
              <p >Mandado por {conv.from}</p>
              <p >Recebido por {conv.to}</p>
              <p >Texto: {conv.text}</p>
              <p >Hora: {conv.timestamp}</p>

            </div>
          ))}
          <button onClick={() => setConversa(false)}>Voltar</button>
          <button onClick={() => setInicio(true)}>Nova conversa</button>
        </div>
          : inicio === true ? <Home></Home> : <div></div>}
    </Container>

  )

}