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

```
npm install express dotenv cors mysql2
```

## **Atenção**
**Para que o projeto seja renderizado corretamente, você também precisa adicionar o Nodemon como devDependencies**

```
npm install --save-dev nodemon
```

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

# 1.1 version: API
nessa versão foi feito a configuração dos primeiros requests da nossa API, onde é feito o cadastro do novo usuário no nosso banco de dados, e também a comparação de dados para o usuário realizar seu login pela interface de login.

## *update 1: nova instalação*
para essa sub-versão, decidir desde já aumentar a segurança dos registros, ou seja, tornar as senhas cadastradas mais dificeis de serem vazadas ou hackeadas, ao invés de armazenar em texto plano. 

### **nova dependencia: bcrypt**
´comando para instalação:´
```
npm install bcrypt
```

### **prós e contra**
***prós***

- **Hash irreversível** -> a senha não fica armazenada em texto plano
- **Salt automático** -> cada hash é único, mesmo com senha igual
- **Seguro contra ataques** -> bem mais lento intencionalmente (força bruta fica impraticável)
- **Funciona com qualquer caractere** -> acentos, emojis, especiais, tudo funciona

***contra***
- Usuários antigos com senhas em texto plano não funcionarão mais. Você precisa limpar a tabela user ou re-registrar os usuários.
- O bcrypt é um algoritmo de hashing de senhas: transforma a senha em um valor fixo (hash) de forma irreversível — não existe “descriptografia”.

**bônus**
### Como verificar a senha (sem recuperar a original)

- Nunca se recupera a senha original. Em vez disso você compara a senha enviada pelo usuário com o hash armazenado:

Em Node: 
```
const ok = await bcrypt.compare(password, user.password)
```

`bcrypt.compare` usa o salt e o cost embutidos no hash e faz a verificação segura.

- Alternativa manual (não necessária): recomputar o hash com o mesmo salt e comparar — `bcrypt.compare` já faz isso pra você.

### Sobre caracteres especiais, acentos e comprimentos

- bcrypt funciona com `strings UTF‑8`; acentos e caracteres especiais são suportados desde que você use a mesma codificação ao gerar e comparar.

- Importante: o bcrypt tradicional tem limite de entrada de ~72 bytes — senhas maiores são truncadas antes do hash. Isso pode causar problemas se usuários usarem senhas longas ou multibyte (acentos, emojis) que somem mais bytes.

- Exemplo de problema: uma senha com muitos caracteres multibyte pode exceder 72 bytes e ser truncada, causando comportamento inesperado.

### Mitigações / boas práticas

Use um cost razoável (atualmente 10–12 é comum; aumente conforme hardware). 

### Para evitar o limite de 72 bytes:
- **Opção 1 (simples)**: *pré-hash* a senha com *SHA‑256* e então aplique bcrypt ao resultado:
Node exemplo:
```
const crypto = require('crypto');
const pre = crypto.createHash('sha256').update(password, 'utf8').digest('hex');
const hashed = await bcrypt.hash(pre, SALT_ROUNDS);
// comparar:
const pre = crypto.createHash('sha256').update(password, 'utf8').digest('hex');
const ok = await bcrypt.compare(pre, user.password);
```
Isso remove o problema de truncamento e normaliza encoding; é seguro se feito corretamente.

- Opção 2 (preferível a longo prazo): usar argon2 (mais moderno, sem truncamento, resistência a GPU) — troca simples de lib, mas revisão necessária.

### pergunta: "Se eu precisasse verificar a senha no banco, como saber qual é a senha exatamente?"

Resposta direta: você **não consegue** saber a senha original a partir do hash. Você **só pode verificar** se uma senha fornecida bate com o hash (usando bcrypt.compare). Se você **precisa do valor em texto** por algum motivo legítimo (raríssimo), a prática correta é não pedir isso — **solicite redefinição de senha ao usuário.**

## **bônus 2**
caso esteja muito curioso, pode verificar os comentários que deixei dentro do `index.js`, onde explico com mais clareza e objetividade as partes mais essenciais ok?

