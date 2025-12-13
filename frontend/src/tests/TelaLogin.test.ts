import { render, fireEvent } from '@testing-library/vue'
import TelaLogin from '@/views/TelaLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Criar router mock
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/home', component: { template: '<div>Home</div>' } }],
})

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value },
    clear: () => { store = {} },
    removeItem: (key: string) => { delete store[key] }
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('TelaLogin.vue', () => {
  beforeEach(() => {
    localStorage.clear()
    router.push = vi.fn() // mock push
  })

  it('deve cadastrar novo usuário no localStorage', async () => {
    const { getByTestId, getByText } = render(TelaLogin, {
      global: { plugins: [router] },
    })

    await fireEvent.click(getByText('Registrar'))

    await fireEvent.update(getByTestId('register-username'), 'usuarioTeste')
    await fireEvent.update(getByTestId('register-email'), 'teste@teste.com')
    await fireEvent.update(getByTestId('register-password'), '123456')

    await fireEvent.click(getByText('Cadastrar-se'))

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    expect(users).toEqual([
      {
        username: 'usuarioTeste',
        email: 'teste@teste.com',
        password: '123456',
      },
    ])

    getByText('Cadastro realizado com sucesso!')
    expect(document.querySelector('.container')?.classList.contains('active')).toBe(false)
  })

  it('deve fazer login com usuário cadastrado e redirecionar', async () => {
    const usuarioValido = [{
      username: 'usuarioTeste',
      email: 'teste@teste.com',
      password: '123456'
    }]
    localStorage.setItem('users', JSON.stringify(usuarioValido))

    const { getByTestId, getByText, queryByText } = render(TelaLogin, {
      global: { plugins: [router] },
    })

    await fireEvent.update(getByTestId('login-username'), 'usuarioTeste')
    await fireEvent.update(getByTestId('login-password'), '123456')

    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    await fireEvent.click(getByTestId('login-button'))

    expect(alertMock).toHaveBeenCalledWith('Login realizado!')
    expect(router.push).toHaveBeenCalledWith('/home')
    expect(queryByText('Usuário ou senha incorretos.')).toBeNull()

    alertMock.mockRestore()
  })

  it('deve mostrar erro para login inválido', async () => {
    localStorage.clear()

    const { getByTestId, getByText, findByText } = render(TelaLogin, {
      global: { plugins: [router] },
    })

    await fireEvent.update(getByTestId('login-username'), 'usuarioErrado')
    await fireEvent.update(getByTestId('login-password'), 'senhaErrada')

    await fireEvent.click(getByTestId('login-button'))

    const erro = await findByText('Usuário ou senha incorretos.')
    expect(erro).toBeTruthy()
  })

  it('deve alternar entre login e registro com o toggle', async () => {
    const { getByText, container } = render(TelaLogin, {
      global: { plugins: [router] },
    })

    expect(container.querySelector('.container')?.classList.contains('active')).toBe(false)

    await fireEvent.click(getByText('Registrar'))
    expect(container.querySelector('.container')?.classList.contains('active')).toBe(true)

    await fireEvent.click(getByText('Conecte-se'))
    expect(container.querySelector('.container')?.classList.contains('active')).toBe(false)
  })

  it('não deve permitir registro com email já cadastrado', async () => {
    localStorage.setItem('users', JSON.stringify([
      { username: 'usuarioExistente', email: 'teste@teste.com', password: '123456' }
    ]))

    const { getByTestId, getByText, findByText } = render(TelaLogin, {
      global: { plugins: [router] },
    })

    await fireEvent.click(getByText('Registrar'))

    await fireEvent.update(getByTestId('register-username'), 'novoUsuario')
    await fireEvent.update(getByTestId('register-email'), 'teste@teste.com')
    await fireEvent.update(getByTestId('register-password'), 'novasenha')

    await fireEvent.click(getByText('Cadastrar-se'))

    expect(await findByText('Email já cadastrado.')).toBeTruthy()
  })
})
