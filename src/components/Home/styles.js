import styled from 'styled-components';


export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center
width:100vw;
height: 100vh;
margin-top:1vh;
margin:0;
background: lightSkyblue;

form{
  width:80vw;
  margin-top: 2vh;
  margin-bottom:2vh;
  display:flex;
  justify-content:center;
  align-items:center
  flex-direction: inline;
  
}
input{
  display:flex;
  justify-content:center;
  align-items:center;
  text-transform:capitalize;
  border:0;
  border-radius:4px;
  width:40vw;
  height: 50px;
  padding:0 15px;
  margin-left:1vw;
  font-size:14px
 
  
}
button{
  text-transform:capitalize;
  display:flex;
  justify-content:center;
  align-items:center;
  width:30vw;
  height: 50px;
  margin-left:1vw;
  margin-right:5vw;
  font-size:12px;
  transition:all 0.5s ease-in-out;
  &:hover{
    background: lightblue;
  }
  &focus{
    outline:none;
  }
 
}
 #link{
   text-decoration:none
 }

`

export const Button = styled.button`
width:50vw;
display: flex;
justify-content: space-between;
align-items: center;

`


