<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Esqueceu sua senha?
    </button>

    <!-- Modal 1: email adrees -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">

        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Insira seu Email cadastrado:</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Body -->
                <div class="modal-body">

                    <!-- Input groups -->
                    <div class="input-group mb-3">
                        <span class="input-group-text">@</span>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="ValidationFloatingInputGroup1"
                                placeholder="Endereço de email" aria-describedby="inputGroupPrepend1" v-model="email"
                                required>
                            <label for="ValidationFloatingInputGroup1">Endereço de email</label>
                        </div>
                    </div>

                    
                </div>
                <!-- Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <!-- Removemos o data-bs-toggle para validar o e-mail antes de passar -->
                    <button type="button" class="btn btn-outline-success" @click="processarEnvioEmail" :disabled="carregando">
                        {{ carregando ? 'Enviando...' : 'Próximo' }}
                    </button>
                </div>

            </div>
        </div>

    </div>

    <!-- Modal 2: validation code -->
    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel2" aria-hidden="true">

        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Insira o código de validação:</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Body -->
                <div class="modal-body">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="ValidationFloatingInputGroup1"
                            placeholder="Código de validação" aria-describedby="inputGroupPrepend1"
                            v-model="codigoDigitado" required>
                        <label for="ValidationFloatingInputGroup1">Código de validação</label>
                    </div>
                </div>
                <!-- Footer -->
                <div class="modal-footer">
                    <!-- O botão "Voltar" pode manter o data-bs-toggle, pois não precisa de validação -->
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <!-- O botão "Próximo" chama a nossa função de validação -->
                    <button type="button" class="btn btn-outline-success" @click="validarCodigoNoFront" :disabled="carregando">
                        {{ carregando ? 'Validando...' : 'Confirmar Código' }}
                    </button>
                </div>
            </div>
        </div>

    </div>

    <!-- Modal 3: reset password -->
    <div class="modal fade" id="exampleModalToggle2" data-bs-backdrop="static" data-bs-keyboard="false"
        aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">

        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

            <div class="modal-content">

                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Redefinição de senha</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body">

                    <!-- Campo Nova Senha -->
                    <div class="form-floating mb-3">
                        <input :type="showPassword ? 'text' : 'password'" v-model="novaSenha" class="form-control"
                            :class="{ 'is-invalid': novaSenha && !senhaEhValida, 'is-valid': senhaEhValida }"
                            id="floatingNewPassword">
                        <label>Nova senha</label>
                    </div>

                    <!-- Lista de Requisitos Dinâmica -->
                    <div class="p-2 border rounded bg-light mb-3" style="font-size: 0.85rem;">
                        <p class="mb-1 fw-bold">A senha deve conter:</p>
                        <div :class="requisitos.tamanho ? 'text-success' : 'text-muted'">
                            <i :class="requisitos.tamanho ? 'bx bx-check-circle' : 'bx bx-circle'"></i> Pelo menos 8
                            caracteres
                        </div>
                        <div :class="requisitos.maiuscula ? 'text-success' : 'text-muted'">
                            <i :class="requisitos.maiuscula ? 'bx bx-check-circle' : 'bx bx-circle'"></i> Uma letra
                            maiúscula
                        </div>
                        <div :class="requisitos.minuscula ? 'text-success' : 'text-muted'">
                            <i :class="requisitos.minuscula ? 'bx bx-check-circle' : 'bx bx-circle'"></i> Uma letra
                            minúscula
                        </div>
                        <div :class="requisitos.numero ? 'text-success' : 'text-muted'">
                            <i :class="requisitos.numero ? 'bx bx-check-circle' : 'bx bx-circle'"></i> Pelo menos um
                            número
                        </div>
                        <div :class="requisitos.especial ? 'text-success' : 'text-muted'">
                            <i :class="requisitos.especial ? 'bx bx-check-circle' : 'bx bx-circle'"></i> Um caractere
                            especial (@, #, $, etc)
                        </div>
                    </div>

                    <!-- Campo Confirmação -->
                    <div class="form-floating mb-3">
                        <input :type="showPassword ? 'text' : 'password'" v-model="confirmaSenha" class="form-control"
                            :class="{ 'is-valid': confirmaSenha && confirmaSenha === novaSenha, 'is-invalid': confirmaSenha && confirmaSenha !== novaSenha }"
                            id="floatingConfirm">
                        <label>Confirme a senha</label>
                        <div class="invalid-feedback">As senhas não coincidem.</div>
                    </div>

                    <!-- Show password -->
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="showPassword" id="checkDefault">
                        <label class="form-check-label" for="checkDefault">
                            Mostrar senha
                        </label>
                    </div>

                </div>

                <!-- Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-outline-success" @click="salvarNovaSenha">Salvar Alterações</button>
                </div>

            </div>

        </div>

    </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import api from '@/services/api' // Ajuste o caminho se necessário
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Estados
const email = ref('')
const codigoDigitado = ref('')
const carregando = ref(false)
const showPassword = ref(false)
const novaSenha = ref('')
const confirmaSenha = ref('')

// Instâncias dos Modais
let modal1, modal2, modal3

onMounted(() => {
    modal1 = new bootstrap.Modal(document.getElementById('staticBackdrop'))
    modal2 = new bootstrap.Modal(document.getElementById('staticBackdrop2'))
    modal3 = new bootstrap.Modal(document.getElementById('exampleModalToggle2'))

    // // Escuta o evento 'hidden.bs.modal' (disparado quando o modal termina de fechar)
    // const modais = ['staticBackdrop', 'staticBackdrop2', 'exampleModalToggle2']
    
    // modais.forEach(id => {
    //     const elemento = document.getElementById(id)
    //     elemento.addEventListener('hidden.bs.modal', () => {
    //         // Se o usuário fechar qualquer modal da sequência, limpamos tudo
    //         // Exceto se for uma transição programada (opcional)
    //         limparEstados()
    //     })
    // })
})

// Função do Modal 1
const processarEnvioEmail = async () => {
    if (!email.value) return alert("Digite seu e-mail")
    carregando.value = true
    try {
        await api.post('/api/esqueci-senha', { email: email.value })
        modal1.hide()
        modal2.show()
    } catch (err) {
        alert("E-mail não encontrado ou erro no servidor")
    } finally {
        carregando.value = false
    }
}

// Função do Modal 2
const validarCodigoNoFront = async () => {
    if (!codigoDigitado.value) return alert("Insira o código enviado ao seu e-mail.");

    carregando.value = true;
    try {
        // Chamada para a nova rota - converte código para UPPERCASE
        await api.post('/api/validar-codigo', {
            email: email.value,
            codigo: codigoDigitado.value.toUpperCase()
        });

        // Se validar, pula para o Modal 3 (Nova Senha)
        modal2.hide();
        modal3.show();
    } catch (error) {
        alert(error.response?.data?.message || "Código incorreto.");
    } finally {
        carregando.value = false;
    }
};

// Função do Modal 3 
const salvarNovaSenha = async () => {
    if (novaSenha.value !== confirmaSenha.value) {
        return alert("As senhas não coincidem!");
    }

    carregando.value = true;
    try {
        await api.post('/api/atualizar-senha', {
            email: email.value,
            codigo: codigoDigitado.value.toUpperCase(), // Converte para UPPERCASE
            novaSenha: novaSenha.value
        });

        alert("Senha alterada com sucesso!");
        modal3.hide();
        limparEstados(); // Limpa APÓS fechar modal
    } catch (error) {
        alert(error.response?.data?.message || "Erro ao salvar nova senha.");
    } finally {
        carregando.value = false;
    }
};

// Objeto reativo que testa cada requisito
const requisitos = computed(() => {
    return {
        tamanho: novaSenha.value.length >= 8,
        maiuscula: /[A-Z]/.test(novaSenha.value),
        minuscula: /[a-z]/.test(novaSenha.value),
        numero: /[0-9]/.test(novaSenha.value),
        especial: /[!@#$%^&*(),.?":{}|<>._\-/=]/.test(novaSenha.value)
    }
})

// Verifica se TUDO está ok para liberar o botão "Salvar"
const senhaEhValida = computed(() => {
    return Object.values(requisitos.value).every(req => req === true)
})

// Função para limpar estados e inputs
const limparEstados = () => {
    // Limpa os inputs
    email.value = ''
    codigoDigitado.value = ''
    novaSenha.value = ''
    confirmaSenha.value = ''
    
    // Reseta estados visuais
    showPassword.value = false
    carregando.value = false
}

</script>

<style scoped>
/* Aumenta o z-index para trazer o modal para frente */
:deep(.modal) {
    z-index: 9999 !important;
}

:deep(.modal-backdrop) {
    z-index: 9998 !important;
}
</style>