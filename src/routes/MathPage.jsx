import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #4caf50;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  margin: 5px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Text = styled.p`
    
`;

function MathPage() {
  const [number, setNumber] = useState(0);

  const handleSquareRoot = () => Math.sqrt(number);
  const handleSquare = () => Math.pow(number, 2);

  return (
    <Container>
      <Title>Operações Matemáticas</Title>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Digite um número"
      />
      <div>
        <Button onClick={() => alert(`Raiz Quadrada: ${handleSquareRoot()}`)}>
          Calcular Raiz Quadrada
        </Button>
        <Button onClick={() => alert(`Quadrado: ${handleSquare()}`)}>
          Calcular Quadrado
        </Button>
      </div>
    </Container>
  );
}

export default MathPage;
