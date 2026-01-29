<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
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
                                placeholder="Endereço de email" aria-describedby="inputGroupPrepend1" required>
                            <label for="ValidationFloatingInputGroup1">Endereço de email</label>
                        </div>
                    </div>
                </div>
                <!-- Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-target="#staticBackdrop2"
                        data-bs-toggle="modal">Understood</button>
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
                            placeholder="Código de validação" aria-describedby="inputGroupPrepend1" required>
                        <label for="ValidationFloatingInputGroup1">Código de validação</label>
                    </div>
                </div>
                <!-- Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-target="#staticBackdrop"
                        data-bs-toggle="modal">back</button>
                    <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal">Understood</button>
                </div>
            </div>
        </div>

    </div>

    <!-- Modal 3: reset password -->
    <div class="modal fade" id="exampleModalToggle2" data-bs-backdrop="static" data-bs-keyboard="false"
        aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">

        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Redefinição de senha</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Body -->
                <div class="modal-body">
                    <!-- Entry for new password -->
                    <div class="form-floating mb-3">
                        <input :type="showPassword ? 'text' : 'password'" class="form-control" id="floatingNewPassword"
                            placeholder="New Password">
                        <label for="floatingNewPassword">Nova senha <i class='bx bxs-lock-alt'></i></label>
                    </div>
                    <!-- Entry for password confirmation -->
                    <div class="form-floating mb-3">
                        <input :type="showPassword ? 'text' : 'password'" class="form-control"
                            id="floatingPasswordConfirmmation" placeholder="Password Confirmation">
                        <label for="floatingPasswordConfirmation">Confirme a senha <i
                                class='bx bxs-lock-alt'></i></label>
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
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const showPassword = ref(false)
</script>

<style scoped></style>