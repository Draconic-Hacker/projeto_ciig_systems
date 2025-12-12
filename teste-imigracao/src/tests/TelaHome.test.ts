import { render, fireEvent } from '@testing-library/vue'
import TelaHome from '@/views/TelaHome.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Criar router mock
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/dashboard', component: { template: '<div>Dashboard</div>' } }],
})


describe('TelaHome', () => {
    beforeEach(() => {
    router.push = vi.fn() // mock push
  })

  it('deve renderizar a tela home corretamente', () => {
    const { getByTestId, getByText } = render(TelaHome, {
          global: { plugins: [router] },
        })

    expect(getByText('CIIG SYSTEMS')).toBeTruthy()
    expect(getByText('Supply Chain')).toBeTruthy()
    expect(getByText('MATERIAL')).toBeTruthy()
    expect(getByText('DESCONTOS')).toBeTruthy()
    expect(getByText('FORNECEDORES')).toBeTruthy()
    expect(getByText('OUVIDORIA GERAL')).toBeTruthy()
    expect(getByText('NOTIFICAÇÃO')).toBeTruthy()
    expect(getByText('PERFIL')).toBeTruthy()
  })

  it('deve redirecionar para o dashboard ao clicar no botão "Dashboard"', async () => {
    const { getByText } = render(TelaHome, {
      global: { plugins: [router] },
    })

    await fireEvent.click(getByText('MATERIAL'))

    expect(router.push).toHaveBeenCalledWith('/dashboard')
  })

    it('deve redirecionar para o dashboard ao clicar no botão "FORNECEDORES"', async () => {
        const { getByText } = render(TelaHome, {
        global: { plugins: [router] },
        })
    
        await fireEvent.click(getByText('FORNECEDORES'))

        expect(router.push).toHaveBeenCalledWith('/fornecedores')
    })

    it('deve redirecionar para o dashboard ao clicar no botão "OUVIDORIA GERAL"', async () => {
        const { getByText } = render(TelaHome, {
        global: { plugins: [router] },
        })
    
        await fireEvent.click(getByText('OUVIDORIA GERAL'))

        expect(router.push).toHaveBeenCalledWith('/ouvidoria')
    })

    it('deve redirecionar para o dashboard ao clicar no botão "NOTIFICAÇÃO"', async () => {
        const { getByText } = render(TelaHome, {
        global: { plugins: [router] },
        })
    
        await fireEvent.click(getByText('NOTIFICAÇÃO'))

        expect(router.push).toHaveBeenCalledWith('/notificacoes')
    })

    it('deve redirecionar para o perfil ao clicar no botão "PERFIL"', async () => {
        const { getByText } = render(TelaHome, {
        global: { plugins: [router] },
        })
    
        await fireEvent.click(getByText('PERFIL'))

        expect(router.push).toHaveBeenCalledWith('/perfil')
    })

})