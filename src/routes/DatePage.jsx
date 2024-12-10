import React, { useState, useEffect } from 'react';
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

const TimeDisplay = styled.div`
  font-size: 1.5rem;
  color: #333;
  background: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const ButtonContainer = styled.div`
    display:flex;
    gap: 10px; 
    margin-top: 20px;
`;

const Button = styled.button`
    font-size: 1.5rem;
    color: #333;
    background: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:hover {
    background-color: #45a049;
    }

`

function DatePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const addDay = () => {
    const newDate = new Date(currentTime);
    newDate.setDate(newDate.getDate() + 1); 
    setCurrentTime(newDate);
  };

  // Função para subtrair um dia
  const subtractDay = () => {
    const newDate = new Date(currentTime);
    newDate.setDate(newDate.getDate() - 1); // Subtrai 1 dia
    setCurrentTime(newDate);
  };

  return (
    <Container>
      <Title>Data e Hora do Computador</Title>
      <TimeDisplay>
        {currentTime.toDateString()}
      </TimeDisplay>
      <ButtonContainer>
        <Button onClick={addDay}>Adicionar Dia</Button>
        <Button onClick={subtractDay}>Subtrair Dia</Button>
      </ButtonContainer>
    </Container>
  );
}

export default DatePage;
