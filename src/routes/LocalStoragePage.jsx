import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.p`
  color: #333;
  font-size: 1.2rem;
`;

const DataList = styled.div`
  text-align: left;
  margin-top: 20px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DataItem = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #eee;
  font-size: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

function LocalStoragePage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [storedData, setStoredData] = useState({});

  // Carregar todos os dados do LocalStorage ao carregar a página
  useEffect(() => {
    loadStoredData();
  }, []);

  const loadStoredData = () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      
      // Tentar parsear o valor armazenado e tratar erros
      try {
        data[key] = JSON.parse(value);
      } catch (e) {
        console.error("Erro ao parsear o valor para o key:", key, e);
        data[key] = null; // Armazenar como null se não for um JSON válido
      }
    }
    setStoredData(data);
  };

  // Salvar novos dados no LocalStorage
  const saveToLocalStorage = () => {
    if (input1 && input2) {
      const key = `data_${Date.now()}`;
      const value = JSON.stringify({ input1, input2 });
      localStorage.setItem(key, value);
      setInput1('');
      setInput2('');
      loadStoredData();
    }
  };

  // Excluir todos os dados do LocalStorage
  const clearLocalStorage = () => {
    localStorage.clear();
    setStoredData({});
  };

  return (
    <Container>
      <Title>Exemplo de LocalStorage</Title>

      <div>
        <Input
          type="text"
          placeholder="Digite o primeiro valor"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Digite o segundo valor"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>

      <div>
        <Button onClick={saveToLocalStorage}>Salvar Dados</Button>
        <Button onClick={clearLocalStorage}>Excluir Todos os Dados</Button>
      </div>

      <DataList>
        <h3>Dados Salvos:</h3>
        {Object.keys(storedData).length > 0 ? (
          Object.entries(storedData).map(([key, value]) => {
            // Verifica se o valor é null (não foi possível parsear)
            if (value === null) {
              return (
                <DataItem key={key}>
                  <strong>ID:</strong> {key} <br />
                  <strong>Erro:</strong> Dados inválidos.
                </DataItem>
              );
            }
            
            return (
              <DataItem key={key}>
                <strong>ID:</strong> {key} <br />
                <strong>Valor 1:</strong> {value.input1} <br />
                <strong>Valor 2:</strong> {value.input2}
              </DataItem>
            );
          })
        ) : (
          <Message>Nenhum dado salvo.</Message>
        )}
      </DataList>
    </Container>
  );
}

export default LocalStoragePage;
