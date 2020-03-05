<p align="center">
    <a href="https://github.com/santos-jp7/yettz/" alt="Version">
        <img src="https://img.shields.io/github/package-json/v/santos-jp7/yettz/master" />
    </a>
    <a href="https://github.com/santos-jp7/yettz/" alt="Version">
        <img src="https://img.shields.io/github/stars/santos-jp7/yettz" />
    </a>
    <a href="https://github.com/santos-jp7/yettz/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/santos-jp7/yettz" />
    </a>
    <a href="https://discord.gg/zsAnRKZ">
        <img src="https://img.shields.io/discord/433127412444954634?logo=discord"
            alt="chat on Discord">
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=santos_jp7">
        <img src="https://img.shields.io/twitter/follow/santos_jp7?style=social&logo=twitter"
            alt="follow on Twitter">
    </a>
    <br />
     <a href="https://github.com/santos-jp7/yettz/issues">
        <img src="https://img.shields.io/github/issues/santos-jp7/yettz"
            alt="Issues">
    </a>
    <a href="https://github.com/santos-jp7/yettz/pulls">
        <img src="https://img.shields.io/github/issues-pr/santos-jp7/yettz"
            alt="Pull Request">
    </a>
</p>

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://cdn.discordapp.com/avatars/572283573034418176/2b1aa05828bf6f382bc811a953c126a2.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Yettz</h3>

  <p align="center">
    Um bot brasileiro para o Discord 100% open-source!
    <br />
    <a href="https://github.com/santos-jp7/yettz/issues">Informar um bug</a>
    <br />
    <a href="https://github.com/santos-jp7/yettz/issues">FAQ</a>
  </p>
</p>

# Sobre o projeto

Olá! Eu sou o Yettz! Fui desenvolvido pelo [santos-jp7](https://github.com/santos-jp7). Minha função é auxiliar nas tarefas administrativas e da diversão do meu [servidor no Discord](https://github.com/santos-jp7). Também tenho vários comandos divertidos! Alguns exemplos:

* `Clima`: Quer verificar o clima da sua enquanto joga? Eu verifico para você!
* `Encurtar`: Sabe aquele link imenso de um site? Você pode encurtar ele comigo!
* `Voteban`: Sabe aquela momento que entra uma pessoa pra bagunçar servidor e o administrador não está online? Pode deixar comigo.

Minha memória ainda é curta, mas em breve terei um banco de dados onde poderei armazenar tudo e ter funções novas. Estou fazendo um curso de DJ também, daqui alguns dias irei ser o responsável pelas baladinhas no Discord.

# Versão global

Clique [aqui](https://discordapp.com/api/oauth2/authorize?client_id=572283573034418176&permissions=8&scope=bot) para me adicionar ao seu servidor!

# Versão local

Bom... Se quer me ter em seu computador é só seguir esses passos:

## Pre-requisitos

* [NodeJs](https://nodejs.org/pt-br/download/)
* [Npm](https://www.npmjs.com/get-npm) ou [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [Git](https://git-scm.com/downloads) (Opcional)
* [Conta na Rebrandly](https://www.rebrandly.com) (Opcional)
* [Conta na WeatherStack](https://weatherstack.com) (Opcional)
* E também de uma [aplicação no Discord](https://discordapp.com/developers/applications), vamos utilizar apenas seu token!

## Instalação

1. Clone o repositório

```sh
git clone https://github.com/santos-jp7/yettz.git
```

Ou faça o [download](https://github.com/santos-jp7/yettz/archive/master.zip)

2. Instale as depedências

```sh
npm install
```

Ou caso esteja utilizando yarn
```sh
yarn
```

3. Crie um arquivo `.env` na raiz do projeto

```JS
DEV_ID={seu id de usuario}

TOKEN={o token de seu bot}
PREFIX={o prefixo para utilização dos comandos}

WEATHERSTACK_KEY={o seu token do weatherstack}
REBRANDLY_KEY={o seu token do rebrandly}
```
### Atenção
* Não esqueça de remover os colchetes
* Caso não for usar os comandos de clima ou encurtar, apague as linhas referentes (WEATHERSTACK_KEY, REBRANDLY_KEY)

## Como usar

```sh
npm start
```
ou
```sh
yarn start
```

Adicione o bot ao seu servidor caso não tenha adicionado ainda.

### Ocorreu algum erro ou está tendo dificuldades na instalação?

Entre [aqui](https://github.com/santos-jp7/yettz/issues) e crie uma issue para podermos te ajudar ;)!

## Contribuição

Deseja enviar uma contribuição?

1. Crie um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/Yettz`)
3. Comente suas mudanças (`git commit -m 'Add function Hello'`)
4. Envie sua branch (`git push origin feature/Yettz`)
5. Abra um Pull Request

### Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Todas as contribuições que você fizer são muito apreciadas .

# License

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

# Contato

Jean Pierre - [@santos-jp7](https://twitter.com/santos-jp7) - hjepih@gmail.com

# Referências

* [NodeJs](http://nodejs.org)
* [Discord.Js](https://discord.js.org)
* [Axios](https://github.com/axios/axios)
* [Rebrandly](https://www.rebrandly.com)
* [WeatherStack](https://weatherstack.com)