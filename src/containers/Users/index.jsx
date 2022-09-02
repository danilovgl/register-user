import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom" 

import axios from "axios"

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"


import { Container, Image,User } from "./styles"
import Avatar from "../../Assents/avatar.svg"
import Arrow from "../../Assents/arrow.svg"
import Trash from "../../Assents/trash.svg"



function Users() {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(()=> {
      async function fetchUsers(){
        const {data: newUsers} =  await axios.get('http://localhost:3001/users')
       setUsers(newUsers)
      }
      fetchUsers()
  }, [])


 async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUser = users.filter((user) => user.id !== userId)
    setUsers(newUser)
  }

  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true} >
        <H1>Usuários</H1>
        <ul>
          {
            users.map((user) => (
              <User key={user.id}> <p> {user.name}</p> <p> {user.age} Anos</p> <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button></User>
            ))
          }
        </ul>
        <Button isBack={true} onClick={goBackPage} ><img src={Arrow} alt="seta" /> Voltar  </Button>
      </ContainerItens>
    </Container>

  )
}

export default Users
