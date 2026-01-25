## *Atenção*

**Para cada alteração, atualização ou adição de novas coisas, serão relatadas em cada respectivo Readme, ou seja, alterações feitas na pasta do Front-end, serão relatadas somente em seu readme respectivo o que diz respeito àquela pasta, assim por diante a pasta Back-end também.**

No **readme principal** do diretório, serão relatados:
- Novas Versões (incluindo subversões oficiais e não oficiais)
- Breves Resumos do que foi feito naquela versão, incluindo data

Dito isto, peçamos que haja acima de tudo: **respeito, dignidade e humildade**.

`Este trabalho como outros deste perfil e de outros perfis, merecem mesmo que não sejam profissionais, respeito e valorização.`

# 1.0 version: Criação do Backend
### Dependencias: Back-End

Agora também, ao mesmo tempo que for sendo desenvolvido o front, também irei conectando com o back-end.
Para o Back-end estarei utilizando as seguintes ferramentas:

- **Express**
- **Nodemon**
- **Dotenv**
- **Cors**
- **MySQL2**

**Obs: Utilize este comando para baixar tudo em uma vez só**

```npm install express dotenv cors mysql2```

## **Atenção**
**Para que o projeto seja renderizado corretamente, você também precisa adicionar o Nodemon como devDependencies**

```npm install --save-dev nodemon```

*O que cada um faz:*

- **express**: Framework web para Node.js
- **nodemon**: Monitora alterações e reinicia o servidor automaticamente
- **dotenv**: Gerencia variáveis de ambiente
- **cors**: Habilita requisições cross-origin
- **mysql2**: Driver MySQL para Node.js

# Atualizações feitas:
## *update 1: dotenv*
`por motivos de segurança, não irei compartilhar o .env com as credenciais que estou utilizando, porém você pode utilizar essa mesma base, para poder colocar suas próprias credenciais:`

```
DB_HOST=(o nome do seu host)
DB_USER=(o nome do seu usuario)
DB_PASSWORD=(sua senha do mysql, caso tenha, caso não só excluir)
DB_NAME=(o nome do seu banco de dados)
DB_PORT=(a porta que seu banco de dados está utilizando)
```
***Obs: por vias das dúvidas coloquei esse aviso**
você tem que substituir tudo o que tiver depois da igualdade por suas credenciais ok?

## *update 2: db.js*
para estabelecer a conexão com o meu mysql, configurei com base no meu dotenv, o meu db.js, onde vai ser a ponte de ligação com o mysql local e a aplicação.

`lembrete: você pode utilizar a mesma estrutura, só ajustando para a sua necessitade`

## *update 3: index.js*
criado o index.js, onde vai guardar todas as requisições (get, post, put e delete), de acordo com o meu database. por enquanto está vazio.