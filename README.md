# README

# Visão geral
Este projeto é uma aplicação React que demonstra vários conceitos e ferramentas de desenvolvimento web. Ele inclui múltiplas páginas que mostram diferentes funcionalidades, como operações matemáticas, manipulação de datas, gerenciamento de propriedades de objetos, trabalho com LocalStorage e busca de dados de uma API. A aplicação usa o React Router para navegação e Styled Components para estilização.

# Estrutura do projeto

App.jsx: O ponto de entrada principal da aplicação, onde a lógica de roteamento é definida. 

HomePage.jsx: Exibe uma página introdutória com informações sobre o projeto. 

MathPage.jsx: Demonstra operações matemáticas básicas (raiz quadrada e quadrado) usando entrada do usuário. 

DatePage.jsx: Permite que os usuários manipulem a data atual (adicione ou subtraia dias). 

ObjectPage.jsx: Permite que os usuários interajam e atualizem propriedades de objetos (nome e idade). 

LocalStoragePage.jsx: Demonstra como salvar e recuperar dados do localStorage do navegador. 

APIFetchPage.jsx: Busca dados climáticos de uma API externa (OpenWeatherMap) com base na entrada do usuário.

# Funcionalidades

Página Inicial: O componente HomePage exibe o título do projeto, o subtítulo exibe meu nome e uma descrição do projeto.

Styled Components: A página é estilizada utilizando styled-components, que permite criar estilos reutilizáveis e com escopo em JavaScript.

Página de Operações Matemáticas O componente MathPage permite que os usuários insiram um número e calculem a raiz quadrada ou o quadrado do número.

Gerenciamento de Estado: useState é utilizado para lidar com a entrada do usuário. Alertas: Quando o usuário clica em um botão, um alerta exibe o resultado da operação selecionada.

Página de Manipulação de Datas: O componente DatePage exibe a data atual e permite que os usuários adicionem ou subtraiam um dia.

Manipulação de Datas: Utiliza o objeto Date do JavaScript para manipular a data atual.

Página de Propriedades de Objetos: O componente ObjectPage exibe um objeto (com propriedades de nome e idade) e permite que os usuários atualizem essas propriedades através de campos de entrada.

Gerenciamento de Estado e Manipulação de Eventos: useState é utilizado para gerenciar as propriedades do objeto, e o estado é atualizado quando o usuário digita nos campos de entrada.

Página de LocalStorage: O componente LocalStoragePage permite que os usuários armazenem e recuperem dados do localStorage do navegador.

Integração com LocalStorage: Os dados são salvos no localStorage e exibidos abaixo dos campos de entrada. Os usuários também podem limpar os dados armazenados.

Página de API de Clima: O componente APIFetchPage permite que os usuários insiram o nome de uma cidade e busquem as informações meteorológicas atuais da API OpenWeatherMap.

Busca de Dados de API: O aplicativo faz uso da API fetch do JavaScript para obter dados meteorológicos e exibi-los para o usuário.

Tecnologias Utilizadas React: Biblioteca JavaScript para construir interfaces de usuário. 

React Router: Para gerenciar o roteamento e navegação entre páginas. 

Styled Components: Para escrever CSS em JavaScript. 

useState e useEffect: Hooks do React usados para gerenciar estado e lidar com efeitos colaterais. 

API OpenWeatherMap: Usada para buscar dados climáticos.