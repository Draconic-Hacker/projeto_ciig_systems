<!-- # Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support). -->

## *Atenção*

**Para cada alteração, atualização ou adição de novas coisas, serão relatadas em cada respectivo Readme, ou seja, alterações feitas na pasta do Front-end, serão relatadas somente em seu readme respectivo o que diz respeito àquela pasta, assim por diante a pasta Back-end também.**

No **readme principal** do diretório, serão relatados:
- Novas Versões (incluindo subversões oficiais e não oficiais)
- Breves Resumos do que foi feito naquela versão, incluindo data

Dito isto, peçamos que haja acima de tudo: **respeito, dignidade e humildade**.

`Este trabalho como outros deste perfil e de outros perfis, merecem mesmo que não sejam profissionais, respeito e valorização.`

# 1.0 Version
## Reestruturação do Front-End

Dado aos commits passados, irei recomeçar o projeto tudo do "zero" novamente, desta vez utilizando o fremwork Bootstrap.

### Adicionais: Back-End

Agora também, ao mesmo tempo que for sendo desenvolvido o front, também irei conectando com o back-end.
Para o Back-end estarei utilizando:

- **MySQL de Database**
- **Express**
- **Nodemoon**
- **Dotenv**
- **cors**
- **mysql2**

## Depêndencias
### Front-End

Para o Front-End, instalei as seguintes dependencias nessa primeira versão do projeto:
- **Bootstrap com o popperjs/core**
- **Axios**
- **Fontawesome**
- **Vue Router**

**Obs: Utilize este comando para baixar tudo e uma vez só caso queira baixar as dependencias em seu proprio projeto**

`npm install axios vue-router@4 bootstrap @popperjs/core @fortawesome/fontawesome-free`

*O que cada um faz nesse comando:*

- *axios*: Para suas requisições HTTP ao seu backend Express.
- *vue-router@4*: A versão mais recente e estável para o Vue 3.
- *bootstrap*: Instala os arquivos CSS e JS do framework.
- *@fortawesome/fontawesome-free*: A versão gratuita oficial para constar no seu package.json.

# Atualizações feitas:
## *update 1: app.vue*
Ajustado o App.vue, para que ele utilize o vue-vouter corretamente, excluindo o conteúdo que veio por padrão ao criar o projeto vue `npm create vite .` e substituindo pela versão atual:

`<template>`
`  <router-view />`
`</template>`

`<script setup>`
`import { ref, provide } from 'vue'`
`</script>`

## *update 2: main.js*
Ajustado o main.js da aplicação, para que seja imporado e renderizado a aplicação corretamente.

Foram adicionadas novas linhas, sendo estas:

`import 'bootstrap/dist/css/bootstrap.min.css'`

`import 'bootstrap/dist/js/bootstrap.bundle.min.js'`

para serem utilizados componentes e funcionalidades do framework Bootstrap.

Feito também a importação do Router, já que a aplicação utilizará a "mobilidade" desta ferramenta, ficando a construção do app:

`const app = createApp(App)
app.use(router)
app.mount('#app')`

## *update 3: style.css*
Desabilitado momentaneamente o css global da aplicação `frontend/src/style.css`.

Mesmo não utilizando o css que é feito ao criar o projeto em vue, decidi permanecer o arquivo intocável, junto com seu conteúdo, deixando todo seu conteúdo comentado pois pode ser útil em algum momento.

## *update 4: assets*
Adicionados o script para a utilização de ícones gratuitos da plataforma: **_fontawesome_** `frontend > src > assets > js > fontawesome.js`

além das duas imagens principais: 
- **Background** `src > assets > background.png`
- **Logo da CIIG** `src > assets > logo_ciig.png`

## *update 5: router*
Reutilização das rotas já criadas, apenas feitos alguns ajustes para começar com duas primeiras páginas, testando a conexão com o back-end e db (database, ou seja o banco de dados)

## *update 6: views and assets*
reutilização dos componentes: 
- **TelaLogin.vue**
- **TelaDeEntrada.vue**

além dos seus respectivos styles.css: 
- **entrada.css** `assets > css > entrada.css`
- **login.css** `assets > css > login.css`

## *update 7: assets, views and router*
fiz algumas pequenas alterações no `style.css` tanto da **tela de entrada** quanto da **tela de login**, corrigindo os nomes das imagens de:
- `captura-login.pgn` -> `background.png`
- `ciig.png` -> `logo_ciig.png`

depois disto, fiz mais alguns ajustes nos componentes *.vue* de ambas as telas.
na **tela de entrada** apenas fiz mudar o nome da imagem para `logo_ciig.png`, já na **tela de login** retirei o que se referia ao componente **ToastModal.vue** trocando por simples `alert()`, para fazer o teste de conexão e visualização da página e a funcionalidade de cadastro e login atraves do localstorage.

## *update 8: vite.config*
Ocorreu um bug ao tentar inicar a aplicação, dando problema de importação no index.js do router, pois o arquivo `vite.config.js` não estava com a configuração do alias `@`, então resolvi o problema adicionando as seguintes linhas:

`import path from 'path'`

`resolve: { alias: { '@': path.resolve(__dirname, './src'), },`

