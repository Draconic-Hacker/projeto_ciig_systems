import { render, fireEvent } from '@testing-library/vue'
import TopNav from '@/components/layout/TopNav.vue'
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

    it('deve renderizar a topnav corretamente', () => {
        const { getByTestId, getByText } = render(TopNav, {
        global: { plugins: [router] },
        })
    
        expect(getByText('AG')).toBeTruthy()
        expect(getByText('Admin Gestor')).toBeTruthy()
    })

    it('deve redirecionar para a página de notificações ao clicar no ícone de notificações', async () => {
        const { getByTestId } = render(TopNav, {
        global: { plugins: [router] },
        })

        const notificationIcon = getByTestId('notification-icon')
        await fireEvent.click(notificationIcon)

        expect(router.push).toHaveBeenCalledWith('/notificacoes')
    })

    it('deve redirecionar para a página de perfil ao clicar no ícone de perfil', async () => {
        const { getByTestId } = render(TopNav, {
        global: { plugins: [router] },
        })

        const profileIcon = getByTestId('profile-icon')
        await fireEvent.click(profileIcon)

        expect(router.push).toHaveBeenCalledWith('/perfil')
    })
})