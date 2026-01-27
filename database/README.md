## *Atenção*

**Para cada alteração, atualização ou adição de novas coisas, serão relatadas em cada respectivo Readme, ou seja, alterações feitas na pasta do Front-end, serão relatadas somente em seu readme respectivo o que diz respeito àquela pasta, assim por diante.**

No **readme principal** do diretório, serão relatados:
- Novas Versões (incluindo subversões oficiais e não oficiais)
- Breves Resumos do que foi feito naquela versão

Dito isto, peçamos que haja acima de tudo: **respeito, dignidade e humildade**.

`Este trabalho como outros deste perfil e de outros perfis, merecem mesmo que não sejam profissionais, respeito e valorização.`

# 1.0 Version: start
nessa versão do banco de dados da ciig, apenas foi criado o `database` no MySQL usando o código:

```
create database ciig_systems;
```
# 1.1 version: first table
para o primeiro estágio inicial do projeto CiiG SyTems, onde temos apenas a tela de register/login, se teve a necessitado da criação da primeira tabela: **Table User**

## especificações: table user
a tabela *user* consta com as seguintes colunas:

- **id**
- **username**
- **email**
- **password**

Cada qual com sua configurações e tipagem:

### **id**
Coluna padrão universal, pois será este campo que será a identificação daquela tabela em específico, servindo para ser a chave primária.

sua configuração normal está desta forma:

```
id int not null auto_increment primary key
```

**atributos**
- **int** 
-> tipo de dado: numeral inteiro

- **not** 
-> tradução: `não`
-> função: "negação", "diferente de"

- **null**
-> tradução: `nulo`
-> função: permitir ou não que seja nulo, ou seja, permissão para ser vazio

**Nota**
nota-se que ao juntarmos os termos `not null`, estamos automáticamente dizendo que a configuração daquele campo **não pode ser nulo**, ou seja, não pode estar vazio.

- **auto**
-> função: tornar algo `automático`

- **increment**
-> tradução: incrementação
-> função: incrementar, adicionar

**Nota**
Juntando esses dois termos, nós estamos dizendo que aquele campo irá se preencher sozinho, ou seja, a cada novo registro este campo irá seguir uma ordem cronológica crescente. exemplo:

```
id 1
id 2
id 3
id 4
```

- **primary key**
-> tradução: chave primária
-> função: ser o atributo identificador daquela tabela

### **username**
nesta coluna irá ser registrados os nomes dos usuários cadastrados em nosso banco de dados.

**atributos**
- **varchar (200)**
-> função: este atributo serve para tornar aquele campo compatível com entrada de caracteres.
-> delimitador: para usar este atributo, você deve definir um limite de quantos caracteres são permitidos.

- **not null**

### **email**
nesta coluna irá ser registrados os endereços de email de cada usuário registrado.

**atributos**
- **varchar (200)**
- **not null**

### **password**
aqui ficarão registradas todas as senhas cadastradas por seus respectivos usuários.

**atributos**
- **varchar (255)**
- **not null**

