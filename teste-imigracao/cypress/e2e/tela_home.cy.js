describe('Tela Home', () => {
    beforeEach(() => {
    cy.visit('http://localhost:5173/home')
    // Verificar se a página inicial carrega corretamente
    cy.url().should('include', '/home')
})

it('Deve renderizar toda a página', () => {
    cy.contains('CIIG SYSTEMS').should('be.visible')
    cy.contains('Supply Chain').should('be.visible')
    cy.contains('MATERIAL').should('be.visible')
    cy.contains('DESCONTOS').should('be.visible')
    cy.contains('FORNECEDORES').should('be.visible')
    cy.contains('OUVIDORIA GERAL').should('be.visible')
    cy.contains('NOTIFICAÇÃO').should('be.visible')
    cy.contains('PERFIL').should('be.visible')
})

it('Deve redirecionar para a página Dashboard corretamente', () => {
    cy.contains('MATERIAL').click()
    
    cy.url().should('include', '/dashboard')
})

it('Deve redirecionar para a página Fornecedores corretamente', () =>{
    cy.contains('FORNECEDORES').click()
    
    cy.url().should('include', '/fornecedores')
  })

it('Deve redirecionar para a página Ouvidoria Geral corretamente', () => {
    cy.contains('OUVIDORIA GERAL').click()

    cy.url().should('include', '/ouvidoria')
})

it('Deve redirecionar para a página notificações corretamente', () => {
    cy.contains('NOTIFICAÇÃO').click()

    cy.url().should('include', '/notificacoes')
})

it('Deve redirecionar para a página perfil corretamente', () =>{
    cy.contains('PERFIL').click()

    cy.url().should('include', '/perfil')
})
})