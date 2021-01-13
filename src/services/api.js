  
/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api