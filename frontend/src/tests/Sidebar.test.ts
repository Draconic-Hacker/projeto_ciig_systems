import { render, fireEvent } from '@testing-library/vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Criar router mock
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/dashboard', component: { template: '<div>Dashboard</div>' } }],
  })

describe('Sidebar', () => {
  beforeEach(() => {
    router.push = vi.fn() // mock push
  })

  it('deve renderizar a sidebar corretamente', () => {
    const { getByTestId, getByText } = render(Sidebar, {
      global: { plugins: [router] },
    })

    expect(getByText('CIIG SYSTEMS')).toBeTruthy()
    expect(getByText('Admin Gestor')).toBeTruthy()
    expect(getByText('Administrador')).toBeTruthy()
  })

  it('deve renderizar os itens da sidebar corretamente', () => {
    const { getByText } = render(Sidebar, {
      global: { plugins: [router] },
    })

    expect(getByText('Dashboard')).toBeTruthy()
    expect(getByText('Inventário')).toBeTruthy()
    expect(getByText('Pedidos')).toBeTruthy()
    expect(getByText('Fornecedores')).toBeTruthy()
    expect(getByText('Planejamento')).toBeTruthy()
    expect(getByText('Relatórios')).toBeTruthy()
    expect(getByText('Configurações')).toBeTruthy()
  })

  it('deve redirecionar para o dashboard ao clicar no item "Dashboard"', async () => {
    const { getByText } = render(Sidebar, {
      global: { plugins: [router] },
    })

    await fireEvent.click(getByText('Dashboard'))

    expect(router.push).toHaveBeenCalledWith('/dashboard')
  })

    it('deve redirecionar para os pedidos ao clicar no item "Pedidos"', async () => {
        const { getByText } = render(Sidebar, {
        global: { plugins: [router] },
        })
    
        await fireEvent.click(getByText('Pedidos'))
    
        expect(router.push).toHaveBeenCalledWith('/notificacoes')
    })

    it('deve redirecionar para os fornecedores ao clicar no item "Fornecedores"', async () => {
        const { getByText } = render(Sidebar, {
        global: { plugins: [router] },
        })
    
        await fireEvent.click(getByText('Fornecedores'))
    
        expect(router.push).toHaveBeenCalledWith('/fornecedores')
    })
})