describe('Tela de Login e Registro', () => {
    beforeEach(() => {
    cy.visit('http://localhost:5173/login')
    // Verificar se a página inicial carrega corretamente
    cy.url().should('include', '/login')
  })


  it('Deve cadastrar um novo usuário', () => {
    cy.contains('Registrar').click()

    cy.get('[data-testid="register-username"]').type('Novo Usuario')
    cy.get('[data-testid="register-email"]').type('novo@teste.com')
    cy.get('[data-testid="register-password"]').type('123456')

    cy.contains('Cadastrar-se').click()

    cy.contains('Cadastro realizado com sucesso!').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.get('[data-testid="login-username"]').should('be.visible')
    cy.get('[data-testid="login-password"]').should('be.visible')
    cy.contains('Esqueceu a sua Senha?').should('be.visible')
    cy.get('[data-testid="login-button"]').should('be.visible')
  })

  it('Deve fazer login com o usuário cadastrado', () => {
    cy.contains('Registrar').click()

    cy.get('[data-testid="register-username"]').type('Novo Usuario')
    cy.get('[data-testid="register-email"]').type('novo@teste.com')
    cy.get('[data-testid="register-password"]').type('123456')

    cy.contains('Cadastrar-se').click()

    cy.get('[data-testid="login-username"]').type('novo@teste.com')
    cy.get('[data-testid="login-password"]').type('123456')

    cy.get('[data-testid="login-button"]').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login realizado!')
    })
    cy.url().should('include', '/home')
    cy.contains("CIIG Systems Supply Chain").should("be.visible");
    cy.contains("Visão Geral").should("be.visible");
    cy.contains("Pedidos Pendentes").should("be.visible");
    cy.contains("Fornecedores Ativos").should("be.visible");
    cy.contains("Materiais em Estoque").should("be.visible");
    cy.contains("Alertas").should("be.visible");
    cy.contains("Contato CIIG Systems").should("be.visible");
    cy.contains("contato@ciigsystems.com").should("be.visible");
    cy.contains("Usuário").should("be.visible");
    cy.contains(
      "© 2023 CIIG Systems Supply Chain. Todos os direitos reservados."
    ).should("be.visible");
    cy.contains("Materiais").should("be.visible");
    cy.contains("Descontos").should("be.visible");
    cy.contains("Fornecedores").should("be.visible");
    cy.contains("Ouvidoria Geral").should("be.visible");
    cy.contains("Notificações").should("be.visible");
    cy.get(".main-button").contains("Perfil").should("be.visible");
    cy.contains("Gestão de Mercado").should("be.visible");
  })

  it('Deve dar erro ao cadastrar o mesmo usuário', () =>{
    cy.contains('Registrar').click()

    cy.get('[data-testid="register-username"]').type('Novo Usuario')
    cy.get('[data-testid="register-email"]').type('novo@teste.com')
    cy.get('[data-testid="register-password"]').type('123456')

    cy.contains('Cadastrar-se').click()

    cy.contains('Registrar').click()

    cy.get('[data-testid="register-username"]').type('Novo Usuario')
    cy.get('[data-testid="register-email"]').type('novo@teste.com')
    cy.get('[data-testid="register-password"]').type('123456')

    cy.contains('Cadastrar-se').click()

    cy.contains('Usuário já cadastrado.').should('be.visible')
  })

  it('Deve dar erro ao cadastrar o mesmo email', () =>{
    cy.contains('Registrar').click()

    cy.get('[data-testid="register-username"]').type('Novo Usuario')
    cy.get('[data-testid="register-email"]').type('novo@teste.com')
    cy.get('[data-testid="register-password"]').type('123456')

    cy.contains('Cadastrar-se').click()

    cy.contains('Registrar').click()

    cy.get('[data-testid="register-username"]').type('Novo Usuario 2')
    cy.get('[data-testid="register-email"]').type('novo@teste.com')
    cy.get('[data-testid="register-password"]').type('123456')

    cy.contains('Cadastrar-se').click()

    cy.contains('Email já cadastrado').should('be.visible')
  })

  it('Deve dar erro ao tentar fazer login com usuário não cadastrado', () => {
    cy.get('[data-testid="login-username"]').type('usuario_inexistente')
    cy.get('[data-testid="login-password"]').type('123456')
    cy.get('[data-testid="login-button"]').click()

    cy.contains('Usuário ou senha incorretos.').should('be.visible')
    })
})