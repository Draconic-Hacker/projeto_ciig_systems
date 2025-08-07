<template>
    <!-- Modal for Change Password -->
    <div id="passwordModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 w-full max-w-md">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold text-gray-800">Trocar Senha</h3>
                <button id="closePasswordModal" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="currentPassword">
                        Senha Atual
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="currentPassword" type="password" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="newPassword">
                        Nova Senha
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="newPassword" type="password" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">
                        Confirmar Nova Senha
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword" type="password" />
                </div>
                <div class="flex items-center justify-end">
                    <button
                        class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        type="button" id="cancelPasswordChange">
                        Cancelar
                    </button>
                    <button
                        class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" id="savePasswordChange">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
// Change Password Modal
const changePasswordBtn = document.getElementById("changePasswordBtn");
const passwordModal = document.getElementById("passwordModal");
const closePasswordModal = document.getElementById("closePasswordModal");
const cancelPasswordChange = document.getElementById(
    "cancelPasswordChange"
);
const savePasswordChange = document.getElementById("savePasswordChange");

changePasswordBtn.addEventListener("click", function () {
    passwordModal.classList.remove("hidden");
});

function closePasswordModalFunc() {
    passwordModal.classList.add("hidden");
}

closePasswordModal.addEventListener("click", closePasswordModalFunc);
cancelPasswordChange.addEventListener("click", closePasswordModalFunc);

savePasswordChange.addEventListener("click", function () {
    alert("Senha alterada com sucesso!");
    closePasswordModalFunc();
});
</script>

<style scoped></style>