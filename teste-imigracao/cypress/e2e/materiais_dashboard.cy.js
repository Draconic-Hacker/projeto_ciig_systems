describe("Tela Home", () => {
  beforeEach(() => {
    cy.visit("https://draconic-hacker.github.io/DashboardVisaoGeral");
    // Verificar se a página inicial carrega corretamente
    cy.url().should("include", "/DashboardVisaoGeral");
  });

  it("Deve renderizar toda a página", () => {
    cy.contains("CIIG Systems").should("be.visible");
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Movimentação de Estoque").should("be.visible");
    cy.contains("Inventário").should("be.visible");
    cy.contains("Pedidos").should("be.visible");
    cy.contains("Fornecedores").should("be.visible");
    cy.contains("Planejamento").should("be.visible");
    cy.contains("Relatórios").should("be.visible");
    cy.contains("Configurações").should("be.visible");
  });

      it("Deve redirecionar para a página Gestão de mercado corretamente", () => {
        cy.visit("https://draconic-hacker.github.io/DashboardVisaoGeral");
        cy.contains("Inventário").click();

        cy.origin("https://draconic-hacker.github.io", () => {
          // Comandos para verificar a página de descontos
          cy.url().should("include", "/DashboardVisaoGeral");
        });
      });

      it("Deve redirecionar para a página Gestão de mercado corretamente", () => {
        cy.visit("https://draconic-hacker.github.io/DashboardVisaoGeral");
        cy.contains("Inventário").click();

        cy.origin("https://draconic-hacker.github.io", () => {
          // Comandos para verificar a página de descontos
          cy.url().should("include", "/DashboardVisaoGeral");
        });
      });
});
