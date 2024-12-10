import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 20px;
`;

const InfoDisplay = styled.div`
  font-size: 1.5rem;
  color: #333;
  background: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  font-size: 1rem;
  color: #fff;
  background: #4caf50;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
  }
`;

function ObjectPage() {
  
  const [user, setUser] = useState({
    name: 'João',
    age: 25
  });

  const updateName = (event) => {
    setUser({
      ...user,
      name: event.target.value
    });
  };

  const updateAge = (event) => {
    setUser({
      ...user,
      age: event.target.value
    });
  };

  return (
    <Container>
      <Title>Manipulação de Propriedades e Valores de Objetos</Title>
      <InfoDisplay>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Idade:</strong> {user.age}</p>
      </InfoDisplay>

      <Input
        type="text"
        placeholder="Atualizar nome"
        value={user.name}
        onChange={updateName}
      />
      <Input
        type="number"
        placeholder="Atualizar idade"
        value={user.age}
        onChange={updateAge}
      />
      
    </Container>
  );
}

export default ObjectPage;
