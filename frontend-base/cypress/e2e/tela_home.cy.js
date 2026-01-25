describe("Tela Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home");
    // Verificar se a página inicial carrega corretamente
    cy.url().should("include", "/home");
  });

  it("Deve renderizar toda a página", () => {
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
  });

  it("Deve redirecionar para a página Dashboard corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.contains("Materiais").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/DashboardVisaoGeral");
    });
  });

  it("Deve redirecionar para a página Descontos corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.contains("Descontos").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/TelaDeDescontos");
    });
  });

  it("Deve redirecionar para a página Fornecedores corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.contains("Fornecedores").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/TelaDeFornecedores");
    });
  });

  it("Deve redirecionar para a página Ouvidoria Geral corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.contains("Ouvidoria Geral").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/TelaDeOuvidoria");
    });
  });

  it("Deve redirecionar para a página Notificações corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.contains("Notificações").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/TelaDeNotificacoes");
    });
  });

  it("Deve redirecionar para a página Perfil corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.get(".main-button").contains("Perfil").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/Profile");
    });
  });

  it("Deve redirecionar para a página Gestão de Mercado corretamente", () => {
    cy.visit("http://localhost:5173/home");
    cy.contains("Gestão de Mercado").click();

    cy.origin("https://draconic-hacker.github.io", () => {
      // Comandos para verificar a página de descontos
      cy.url().should("include", "/Marketplace");
    });
  });
});
