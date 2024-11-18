# React-Clima
WeatherSearch - Busca de Previsão do Tempo
Este projeto é uma aplicação simples desenvolvida em React para buscar a previsão do tempo de uma cidade utilizando a API OpenWeatherMap. A aplicação permite que o usuário pesquise o clima de qualquer cidade e exiba informações como temperatura, umidade, vento e condições climáticas, junto com emojis para representar as condições de forma visual.

Funcionalidades
Busca de cidade: O usuário pode digitar o nome de uma cidade para buscar sua previsão do tempo.
Exibição de dados climáticos: Mostra informações como temperatura, condição do tempo, umidade e velocidade do vento.
Emojis climáticos: Os dados climáticos são acompanhados de emojis para uma visualização mais interativa.
Feedback de carregamento e erro: Durante a busca, é exibido um estado de carregamento, e se houver um erro (como cidade não encontrada), o usuário é notificado.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção da interface de usuário.
Fetch API: Para fazer requisições HTTP à API de clima.
OpenWeatherMap API: API utilizada para obter os dados de clima.
CSS: Estilização da aplicação.
Como Rodar o Projeto
Pré-requisitos
Node.js instalado em sua máquina.
npm (gerenciador de pacotes) ou yarn.

Passos:
Clone o repositório ou faça o download do projeto:
git clone https://github.com/seu-usuario/weather-search.git

Navegue até a pasta do projeto:
cd weather-search

Instale as dependências:

Se estiver usando npm:
npm install

Ou se estiver usando yarn:
yarn install

Inicie o servidor de desenvolvimento:

Se estiver usando npm:
npm start

Ou se estiver usando yarn:
yarn start

Abra o navegador e acesse http://localhost:3000.

Como Funciona
O usuário insere o nome da cidade na barra de pesquisa.
A aplicação faz uma requisição à API OpenWeatherMap.
Os dados retornados são exibidos na tela, incluindo temperatura, condição do tempo, umidade e velocidade do vento.
Emojis são exibidos ao lado das informações climáticas, representando visualmente o estado do tempo.
Emojis
A aplicação exibe emojis baseados nas seguintes condições climáticas:

🌧️: Chuva
☁️: Nublado
☀️: Sol
❄️: Neve
⛈️: Tempestade
🌤️: Nuvens dispersas
🔥: Muito quente
🧣: Frio
🌬️: Vento
💧: Umidade

Licença
Este projeto está licenciado sob a MIT License.
