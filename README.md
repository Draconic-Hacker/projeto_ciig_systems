

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