import TopNav from '@/components/layout/TopNav.vue'
import { mount } from 'cypress/vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('TopNav Component', () => {
  let router

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/notificacoes', name: 'Notificações', component: { template: '<div>Notificações</div>' } },
        { path: '/perfil', name: 'Perfil', component: { template: '<div>Perfil</div>' } }
      ]
    })
  })

  it('Deve renderizar os principais elementos do topo', () => {
    mount(TopNav, {
      global: {
        plugins: [router]
      }
    })

    // Campo de pesquisa
    cy.get('input[placeholder="Pesquisar..."]').should('exist')

    // Ícone de notificação
    cy.get('[data-testid="notification-icon"]').should('exist')

    // Ícone de perfil
    cy.get('[data-testid="profile-icon"]').should('contain', 'Admin Gestor')
  })

  it('Deve redirecionar para /notificacoes ao clicar no sino de notificações', () => {
    const pushSpy = cy.spy(router, 'push').as('pushSpy')

    mount(TopNav, {
      global: {
        plugins: [router]
      }
    })

    cy.get('[data-testid="notification-icon"]').click()
    cy.get('@pushSpy').should('have.been.calledWith', '/notificacoes')
  })

  it('Deve redirecionar para /perfil ao clicar no nome do perfil', () => {
    const pushSpy = cy.spy(router, 'push').as('pushSpy')

    mount(TopNav, {
      global: {
        plugins: [router]
      }
    })

    cy.get('[data-testid="profile-icon"]').click()
    cy.get('@pushSpy').should('have.been.calledWith', '/perfil')
  })
})
