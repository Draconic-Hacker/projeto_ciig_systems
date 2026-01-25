import Sidebar from '@/components/layout/Sidebar.vue'
import { mount } from 'cypress/vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('Sidebar Component', () => {
  let router

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/home', name: 'Home', component: { template: '<div>Home Page</div>' } },
        { path: '/dashboard', name: 'Dashboard', component: { template: '<div>Dashboard</div>' } },
        { path: '/inventario', name: 'Inventário', component: { template: '<div>Inventário</div>' } },
        { path: '/notificacoes', name: 'Notificações', component: { template: '<div>Notificações</div>' } },
        { path: '/fornecedores', name: 'Fornecedores', component: { template: '<div>Fornecedores</div>' } },
        { path: '/planejamento', name: 'Planejamento', component: { template: '<div>Planejamento</div>' } },
        { path: '/relatorios', name: 'Relatórios', component: { template: '<div>Relatórios</div>' } },
        { path: '/configuracoes', name: 'Configurações', component: { template: '<div>Configurações</div>' } }
      ]
    })
  })

  it('Deve renderizar todos os itens do menu', () => {
    mount(Sidebar, {
      global: {
        plugins: [router]
      }
    })

    cy.contains('Dashboard').should('exist')
    cy.contains('Inventário').should('exist')
    cy.contains('Pedidos').should('exist')
    cy.contains('Fornecedores').should('exist')
    cy.contains('Planejamento').should('exist')
    cy.contains('Relatórios').should('exist')
    cy.contains('Configurações').should('exist')
  })

  it('Deve redirecionar para "/home" ao clicar no topo (CIIG SYSTEMS)', () => {
    const pushSpy = cy.spy(router, 'push').as('pushSpy')

    mount(Sidebar, {
      global: {
        plugins: [router]
      }
    })

    cy.contains('CIIG SYSTEMS').click()

    cy.get('@pushSpy').should('have.been.calledWith', '/home')
  })

  it('Deve redirecionar corretamente ao clicar em cada item do menu', () => {
    const pushSpy = cy.spy(router, 'push').as('pushSpy')

    mount(Sidebar, {
      global: {
        plugins: [router]
      }
    })

    const routes = [
      '/dashboard',
      '/inventario',
      '/notificacoes',
      '/fornecedores',
      '/planejamento',
      '/relatorios',
      '/configuracoes'
    ]

    routes.forEach((route, index) => {
      cy.get('.sidebar-link').eq(index).click()
      cy.wrap(pushSpy).should('have.been.calledWith', route)
    })
  })
})
