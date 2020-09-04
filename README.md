# :computer: Desafio 3lm!
Este repo faz parte do processo seletivo da 3lm.

Usuário teste: test2@test.com Senha: 123

Deploy front-end: https://front-end3lm.herokuapp.com/ (Aguardar o time de wake-up do heroku) <br />
Deploy back-end: https://back-end3lm.herokuapp.com/

## :rocket: Alguma tecnologias utilizadas:


- TypeScript
- React
- Styled-Components
- Axios
- Redux/Redux-saga
- React Toast Notifications
- MomentJS

Cique e veja a source do Back-end: https://github.com/daanielcruz/3lm-back-end

## :question: Como executar:

Para criar uma conta de admin (login area) deve-se enviar uma req POST para o endpoint /admin com email e password, ex:
```bash
{
	"email": "test@test.com",
	"password": "123"
}
```

Para clonar e rodar esta aplicação, você vai precisar de Git, Node.js e Yarn =)
```bash
## Clone este repositório
$ git clone https://github.com/daanielcruz/3lm-front-end

## Entre no repositório
$ cd 3lm-front-end

## Caso esteja utilizando o back-end offline
$ Navegue até '/src/services/api.ts' e troque a baseURL para http://localhost:3333/

## Instale as dependências
$ yarn install

## Inicie o servidor de desenvolvimento
$ yarn start

## O projeto React deve abrir após alguns segundos.
```
