import React, { useState, useRef} from "react"
import { useHistory } from "react-router-dom" 


import axios from "axios"

import H1  from "../../components/Title"
import ContainerItens  from "../../components/ContainerItens"
import Button from "../../components/Button"

import { Container, Image,InputLabel, Input } from "./styles"
import People from "../../Assents/people.svg"
import Arrow from "../../Assents/arrow.svg"




function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory() 



  async function addNewUser() {
      const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value, 
      age: inputAge.current.value})

      if(inputName <= inputName.current.value ){setUsers([...users, newUser])
        
      }

      history.push("/usuarios")
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} type="text" placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="number" placeholder="Idade" />
        <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt="seta" /> </Button>
      </ContainerItens>
    </Container>

  )
}

export default App
