<template>
    
    <div class="col-12 col-lg-8">
        <div class="card login-card border-0 shadow-lg">
            <div class="card-body p-5 p-lg-5">
                <h2 class="h4 fw-bold text-white">Efetue o Login</h2>
                <p class="custom-gray-text mb-8">Insira suas credenciais para acessar</p>

                <form class="mt-4">
                    <div class="mb-3">
                        <label class="form-label text-white" for="email">Usuário ou E-mail</label>
                        <input id="email" type="email" class="form-control form-control-lg bg-dark border-0 text-white"
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
</template>
<script setup>

</script>
<style scoped lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

.login-card {
    background: rgba(35, 43, 59, 0.95);
    border-radius: 20px;
}

.login-card::dark {
    background-color: #1f2937;
}

// Modo claro (padrão)
.custom-gray-text {
    color: $gray-500;
}

// Modo escuro via classe (forma correta)
:global(html.dark) .custom-gray-text {
    color: $green-400;
}

// Também suporta media query do sistema
@media (prefers-color-scheme: dark) {
    .custom-gray-text {
        color: $gray-400;
    }
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