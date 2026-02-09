<template>
    <div class="login-screen min-vh-100 d-flex flex-column">
        <header class="px-4 px-lg-5 py-3 d-flex align-items-center justify-content-between">
            <div class="text-white">
                <div class="fs-4 fw-semibold">CiiG SYSTEMS</div>
                <small class="text-info">Central de Inteligência Integrada Global</small>
            </div>
            <button class="btn btn-sm btn-dark rounded-circle shadow-sm px-3 py-2">🌙</button>
        </header>

        <main class="flex-grow-1 d-flex align-items-center">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-12 col-lg-7 text-center text-lg-start">
                        <h1 class="display-5 fw-bold text-white mb-3">Bem-vindo de volta!</h1>
                        <p class="lead text-info mb-4">
                            Acesse sua conta e continue sua jornada<br class="d-none d-lg-inline" />
                            conosco.
                        </p>
                        <div class="divider my-4"></div>
                        <p class="text-info mb-1">Novo por aqui?</p>
                        <h2 class="h3 text-white fw-bold">Junte-se a nós!</h2>
                        <p class="text-info">
                            Crie sua conta e faça parte da nossa<br class="d-none d-lg-inline" />
                            comunidade global.
                        </p>
                        <div class="divider my-4"></div>
                        <p class="text-info mb-1">Já possui uma conta?</p>
                        <a class="text-decoration-none text-primary fw-semibold" href="#">Acesse agora</a>
                    </div>

                    <div class="col-12 col-lg-5">
                        <div class="card login-card border-0 shadow-lg">
                            <div class="card-body p-4 p-lg-5">
                                <h2 class="h4 fw-bold text-white">Efetue o Login</h2>
                                <p class="text-info">Insira suas credenciais para acessar</p>

                                <form class="mt-4">
                                    <div class="mb-3">
                                        <label class="form-label text-white" for="email">Usuário ou E-mail</label>
                                        <input id="email" type="email"
                                            class="form-control form-control-lg bg-dark border-0 text-white"
                                            placeholder="Digite seu usuário ou e-mail" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label text-white" for="password">Senha</label>
                                        <input id="password" type="password"
                                            class="form-control form-control-lg bg-dark border-0 text-white"
                                            placeholder="Digite sua senha" />
                                    </div>

                                    <div class="d-flex flex-column gap-2 mb-4">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="showPassword" />
                                            <label class="form-check-label text-info" for="showPassword">Mostrar
                                                senha</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="rememberMe" />
                                                <label class="form-check-label text-info" for="rememberMe">Lembrar de
                                                    mim</label>
                                            </div>
                                            <a class="text-decoration-none text-primary" href="#">Esqueceu a senha?</a>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100 btn-lg shadow-sm">
                                        Entrar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <ModalPassowrd />
</template>

<script setup>
import ModalPassowrd from '@/components/common/ModalPassowrd.vue'
</script>

<style scoped>
.login-screen {
    background: radial-gradient(circle at 20% 35%, #2b34d6 0%, #151a2f 55%, #0f1424 100%);
    color: #e6f1ff;
}

.divider {
    height: 1px;
    background: rgba(100, 130, 200, 0.3);
    width: 70%;
}

.login-card {
    background: rgba(35, 43, 59, 0.95);
    border-radius: 20px;
}

.form-control::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.btn-primary {
    background: linear-gradient(90deg, #2c36d4, #323cff);
    border: none;
}

.btn-primary:hover {
    background: linear-gradient(90deg, #3a44f0, #424dff);
}
</style>