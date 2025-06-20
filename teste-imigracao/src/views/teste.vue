<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- Aqui vai TODO o HTML que você enviou da tela, adaptado para Vue -->

    <!-- Exemplo só da modal e lista de notificações: -->

    <!-- Notification List -->
    <div>
      <div
        class="notification-item border-b border-gray-200 p-4 bg-white cursor-pointer"
        data-id="8"
        @click="openModal"
      >
        <div class="flex justify-between items-start">
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 mt-1">
              <span class="status-dot status-read"></span>
            </div>
            <div>
              <div class="flex items-center mb-1">
                <span class="category-pill category-stock mr-2">Estoque</span>
                <span class="category-pill priority-low">Baixa Prioridade</span>
              </div>
              <h3 class="text-sm font-semibold text-gray-900">
                Novo lote de produto disponível: Produto ABC
              </h3>
              <p class="text-sm text-gray-600 mt-1 line-clamp-2">
                Um novo lote do Produto ABC (SKU: 123456) foi recebido e está disponível no estoque. Quantidade: 500 unidades.
              </p>
              <div class="flex items-center mt-2 text-xs text-gray-500">
                <span>12/07/2023, 11:15</span>
                <span class="mx-2">•</span>
                <span>Produto</span>
                <span class="mx-2">•</span>
                <span>Equipe de Estoque</span>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button
              class="text-gray-400 hover:text-gray-600 p-1"
              title="Mais opções"
              @click.stop
            >
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      id="notification-detail-modal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
      >
        <!-- Modal Header -->
        <div
          class="flex items-center justify-between border-b border-gray-200 p-4"
        >
          <div class="flex items-center">
            <span class="category-pill category-operational mr-2"
              >Operacional</span
            >
            <span class="category-pill priority-high">Alta Prioridade</span>
          </div>
          <div class="flex items-center space-x-2">
            <button
              id="notification-resolve-btn"
              class="text-sm bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-lg flex items-center"
              @click="resolveNotification"
            >
              <i class="fas fa-check mr-2"></i> Resolver
            </button>
            <button
              id="notification-delegate-btn"
              class="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg flex items-center"
              @click="delegateNotification"
            >
              <i class="fas fa-user-plus mr-2"></i> Delegar
            </button>
            <button
              id="notification-close-btn"
              class="text-gray-400 hover:text-gray-600"
              @click="closeModal"
            >
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 overflow-y-auto custom-scrollbar p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">
            Pedido #12345 atrasado
          </h2>

          <div class="flex items-center text-sm text-gray-500 mb-6">
            <span>Hoje, 10:45</span>
            <span class="mx-2">•</span>
            <span>Pedido</span>
            <span class="mx-2">•</span>
            <span>Equipe Logística</span>
          </div>

          <div class="prose max-w-none text-gray-700">
            <p>
              O pedido #12345 para o cliente Empresa ABC está com 2 dias de atraso.
              É necessária ação imediata para resolução.
            </p>

            <h3 class="text-lg font-medium mt-6 mb-2">Detalhes do Pedido</h3>
            <ul>
              <li><strong>Cliente:</strong> Empresa ABC Ltda.</li>
              <li><strong>Data do Pedido:</strong> 10/07/2023</li>
              <li><strong>Data Prevista de Entrega:</strong> 13/07/2023</li>
              <li><strong>Status Atual:</strong> Em separação</li>
              <li><strong>Motivo do Atraso:</strong> Falta de estoque do item XYZ-789</li>
            </ul>

            <h3 class="text-lg font-medium mt-6 mb-2">Ações Recomendadas</h3>
            <ol>
              <li>Verificar disponibilidade do item XYZ-789 em outros armazéns</li>
              <li>Contatar o cliente para informar sobre o atraso</li>
              <li>Avaliar possibilidade de entrega parcial dos itens disponíveis</li>
              <li>Priorizar a expedição assim que o item estiver disponível</li>
            </ol>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <div class="flex">
                <div class="flex-shrink-0">
                  <i class="fas fa-exclamation-triangle text-yellow-400"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    Este cliente é classificado como VIP e possui SLA de entrega
                    contratual. O não cumprimento pode gerar penalidades financeiras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

function openModal() {
  showModal.value = true;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  showModal.value = false;
  document.body.style.overflow = "auto";
}

function resolveNotification() {
  alert("Notificação marcada como resolvida!");
}

function delegateNotification() {
  alert("Abrir modal de delegação para outro usuário ou equipe");
}
</script>

<style scoped>
/* Copie aqui seus estilos específicos ou personalizados */
.status-dot {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 9999px;
}
.status-read {
  background-color: #34d399; /* verde-400 */
}
.status-unread {
  background-color: #ef4444; /* vermelho-500 */
}

/* Estilo para category-pill */
.category-pill {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
}
.category-stock {
  background-color: #bfdbfe; /* azul-200 */
  color: #1e40af; /* azul-900 */
}
.priority-low {
  background-color: #d1fae5; /* verde-100 */
  color: #065f46; /* verde-800 */
}
.category-operational {
  background-color: #fef3c7; /* amarelo-100 */
  color: #b45309; /* amarelo-700 */
}
.priority-high {
  background-color: #fee2e2; /* vermelho-100 */
  color: #991b1b; /* vermelho-800 */
}

/* Scrollbar customizada para modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Limitar linhas e esconder o excesso */
.line-clamp-2 {
  display: -webkit-box;
  --webkit-line-clamp: 2;
  --webkit-box-orient: vertical;
  overflow: hidden;
}
</style>