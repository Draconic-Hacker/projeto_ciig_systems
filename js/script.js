// Modal open/close
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const modals = document.querySelectorAll('.modal');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.remove('hidden');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.add('hidden');
}

// Chat automático

const autoChatInput = document.getElementById('auto-chat-input');
const sendAutoMessageBtn = document.getElementById('send-auto-message');
const humanChatMessages = document.getElementById('human-chat-messages');

sendAutoMessageBtn.addEventListener('click', sendAutoMessage);

function sendAutoMessage() {
  const message = autoChatInput.value.trim();
  if (message === '') return;

  addChatMessage(humanChatMessages, message, 'user');
  autoChatInput.value = '';

  // Simula resposta do bot após 2s
  setTimeout(() => {
    let response = 'Desculpe, não entendi.';
    const msgLower = message.toLowerCase();

    if (msgLower.includes('oi') || msgLower.includes('olá')) {
      response = 'Olá! Como posso ajudar você hoje?';
    } else if (msgLower.includes('como funciona')) {
      response = 'Nosso sistema oferece suporte 24/7 para ajudar com suas dúvidas.';
    } else if (msgLower.includes('obrigado') || msgLower.includes('obrigada')) {
      response = 'De nada! Estamos aqui para ajudar.';
    }

    addChatMessage(humanChatMessages, response, 'bot');
  }, 2000);
}

// Função para adicionar mensagem ao chat
function addChatMessage(container, message, sender) {
  const div = document.createElement('div');
  div.className = 'chat-message flex items-start';

  if (sender === 'user') {
    div.innerHTML = `
      <div class="flex-shrink-0 mr-3">
        <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">U</div>
      </div>
      <div class="bg-primary-100 rounded-lg px-4 py-2 max-w-[80%] shadow">
        <p>${message}</p>
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="flex-shrink-0 mr-3">
        <div class="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center text-white">B</div>
      </div>
      <div class="bg-primary-500 rounded-lg px-4 py-2 max-w-[80%] shadow text-white">
        <p>${message}</p>
      </div>
    `;
  }

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

// Botões de sugestão no chat automático
document.querySelectorAll('#auto-chat-modal .suggestion-btn').forEach(button => {
  button.addEventListener('click', () => {
    autoChatInput.value = button.textContent;
    sendAutoMessage();
  });
});

// Filtro modal fornecedores
const supplierSearchInput = document.getElementById('supplier-search');
const supplierItems = document.querySelectorAll('.supplier-item');

supplierSearchInput.addEventListener('input', () => {
  const filter = supplierSearchInput.value.toLowerCase();
  supplierItems.forEach(item => {
    const name = item.querySelector('h4').textContent.toLowerCase();
    const category = item.querySelector('p').textContent.toLowerCase();
    if (name.includes(filter) || category.includes(filter)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

// Envio do formulário suporte funcionário
document.getElementById('submit-support').addEventListener('click', () => {
  const employeeId = document.getElementById('employee-id').value.trim();
  const category = document.getElementById('support-category').value;
  const description = document.getElementById('support-description').value.trim();

  if (!employeeId || !category || !description) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Simular envio e mostrar modal de sucesso
  showSuccessModal(
    'Solicitação Enviada!',
    'Sua solicitação de suporte foi enviada com sucesso. Entraremos em contato em breve.'
  );

  document.getElementById('employee-support-form').reset();
  closeModal(document.getElementById('employee-support'));
});

function showSuccessModal(title, message) {
  const successModal = document.getElementById('success');
  successModal.querySelector('#success-title').textContent = title;
  successModal.querySelector('#success-message').textContent = message;
  openModal(successModal);
}
