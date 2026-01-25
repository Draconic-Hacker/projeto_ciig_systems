## *Atenção*

**Para cada alteração, atualização ou adição de novas coisas, serão relatadas em cada respectivo Readme, ou seja, alterações feitas na pasta do Front-end, serão relatadas somente em seu readme respectivo o que diz respeito àquela pasta, assim por diante.**

No **readme principal** do diretório, serão relatados:
- Novas Versões (incluindo subversões oficiais e não oficiais)
- Breves Resumos do que foi feito naquela versão

Dito isto, peçamos que haja acima de tudo: **respeito, dignidade e humildade**.

`Este trabalho como outros deste perfil e de outros perfis, merecem mesmo que não sejam profissionais, respeito e valorização.`

# 1.0 Version: start
Dado o nascimento da ***CIIG SYSTEMS***, foi feito a configuração de todo o ambiente dentro das pastas: **_Front-end_** e **_Back-end_**, veja o que foi feito resumidamente:

- criação zerada do projeto Vue e do Back-end
- instalação das dependencias nescessárias para ambos os ambientes via **_npm_**
- criação do **README** para cada área específica
- reutilização dos componentes: **TelaDeEntrada.vue** e **TelaLogin.vue**
- ajustes minimos tanto nos arquivos .vue quanto nos arquivos .css
- configuração do **router** e criação das duas primeiras rotas da aplicação
- correção de nomeclatura das imagens presentes nas patas `public` e `src\assets`
- feito a correção de bug ao tentar inicializar a aplicação, adicionando a configuração do alias `@` no `vite.config.js`
- feito também a criação do Banco de Dados ainda vazio no MySQL

Para informaçõs mais detalhadas, entre nas pastas <a href="frontend">frontend</a> e <a href="backend">backend</a> e veja seus respectivos **README.md**

Atenciosamente: Draconic-Hacker

<!-- # para rodar testes e2e
npx cypress open --e2e

# para rodar testes de componente
npx cypress open --component

# para teste jest: 
cd teste-imigracao
npx vitest
npx vitest run tests/TelaLogin.test.ts
npx vitest run tests/TelaHome.test.ts
npx vitest run tests/TopNav.test.ts
npx vitest run tests/Sidebar.test.ts


# Dependencias:
copie e cole e execute no terminal, e sim, tem, deve e precisa executar todos os comandos em orgem

1.
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome

2.
npm install -D tailwindcss postcss autoprefixer

3.
npx tailwindcss init -p

4.
npm audit fix

5.
npx tailwindcss init -p

6.
npm cache clean --force

7.
npx tailwindcss init -p

8.
npm install -g tailwindcss

9.
npx tailwindcss init -p

10.
npm install --save @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons

# Importante
Aos que estão baixando este repositório localmente do GitHub, 
para que os testes: Jest e Cypress Funcionem, precisa-se usar estes comandos no terminal 
(CMD/Command Prompt), 
siga em ordem respectiva para que possa baixar tudo conforme necessário:

npm install --save-dev @vue/test-utils@next jest vue-jest@next
npm install --save-dev vitest @vitest/ui @vue/test-utils
npm install -D vitest @vue/test-utils @testing-library/vue happy-dom
npm install -D vitest @vue/test-utils @testing-library/vue jsdom
yarn add cypress --dev
npm install cypress --save-dev
npx cypress open


1.

npm install --save-dev jest

2.

npm install --save-dev cypress

# Aviso: 
verifique sua conexão com a internet, para que não demore muito para baixar os arquivos
Caso esteja baixando os arquivos, espere até ele terminar, 
não feche ou reinicie nada, espere ele terminar de baixar e mostrar a 
mensagem de confirmação no terminal para não acarretar em erros ou bugs futuros

# Considerações Finais
Caso você não precise de realizar nem um teste ou não é seu objetivo não nescessita da utilização destes comandos,
isto é apenas para quando nescessário a realização dos testes jest e cypress.
Atenciosamente: Equipe CIIG Systems -->