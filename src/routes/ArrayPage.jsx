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

const ListContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 20px;
  background: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PersonItem = styled.div`
  background: #e1f5fe;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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

const Input = styled.input`
  padding: 0.5em;
  font-size: 1rem;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
`;

function ArrayPage() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Ana', age: 25 },
    { id: 2, name: 'João', age: 30 },
    { id: 3, name: 'Maria', age: 22 },
    { id: 4, name: 'Carlos', age: 35 },
    { id: 5, name: 'Paula', age: 28 },
  ]);

  const [filterAge, setFilterAge] = useState(30);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleAddPerson = () => {
    if (newName && newAge) {
      setPeople([...people, { id: Date.now(), name: newName, age: parseInt(newAge) }]);
      setNewName('');
      setNewAge('');
    }
  };

  const filteredPeople = people.filter(person => person.age > filterAge);

  return (
    <Container>
      <Title>Exemplo de Filtro e Map com Arrays</Title>

      <div>
        <Input
          type="text"
          placeholder="Nome"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Idade"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <Button onClick={handleAddPerson}>Adicionar Pessoa</Button>
      </div>

      <div>
        <Input
          type="number"
          placeholder="Idade para Filtrar"
          value={filterAge}
          onChange={(e) => setFilterAge(parseInt(e.target.value) || 0)}
        />
      </div>

      <ListContainer>
        <h2>Pessoas com Mais de {filterAge} Anos</h2>
        {filteredPeople.map(person => (
          <PersonItem key={person.id}>
            <p><strong>{person.name}</strong> - {person.age} anos</p>
          </PersonItem>
        ))}
      </ListContainer>
    </Container>
  );
}

export default ArrayPage;

