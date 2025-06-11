// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme or system preference
if (localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// FAQ toggle functionality
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('.faq-icon');

        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);

        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

// Modal functionality
const modals = {
    'auto-chat': document.getElementById('auto-chat-modal'),
    'human-chat': document.getElementById('human-chat-modal'),
    'supplier': document.getElementById('supplier-modal'),
    'employee-support': document.getElementById('employee-support-modal'),
    'success': document.getElementById('success-modal')
};

document.getElementById('open-auto-chat').addEventListener('click', () => openModal('auto-chat'));
document.getElementById('open-human-chat').addEventListener('click', () => openModal('human-chat'));
document.getElementById('open-supplier-modal').addEventListener('click', () => openModal('supplier'));
document.getElementById('open-employee-support').addEventListener('click', () => openModal('employee-support'));

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        for (const key in modals) {
            modals[key].classList.add('hidden');
        }
    });
});

document.querySelectorAll('.close-success').forEach(button => {
    button.addEventListener('click', () => {
        modals['success'].classList.add('hidden');
    });
});

function openModal(modalKey) {
    for (const key in modals) {
        if (key === modalKey) {
            modals[key].classList.remove('hidden');
        } else {
            modals[key].classList.add('hidden');
        }
    }
}

// Auto Chat functionality
const autoChatMessages = document.getElementById('auto-chat-messages');
const autoChatInput = document.getElementById('auto-chat-input');
const sendAutoChat = document.getElementById('send-auto-chat');

sendAutoChat.addEventListener('click', () => sendAutoMessage());
autoChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendAutoMessage();
    }
});

function sendAutoMessage() {
    const message = autoChatInput.value.trim();
    if (message) {
        addChatMessage(autoChatMessages, message, 'user');
        autoChatInput.value = '';

        setTimeout(() => {
            let response;
            const msgLower = message.toLowerCase();

            if (msgLower.includes('login') || msgLower.includes('senha')) {
                response = "Para problemas de login, verifique se suas credenciais estão corretas. Se persistir, você pode redefinir sua senha na tela de login ou entrar em contato com o suporte técnico.";
            } else if (msgLower.includes('cadastrar') || msgLower.includes('produto')) {
                response = "Para cadastrar um novo produto, acesse o menu 'Produtos' > 'Novo Produto' e preencha todos os campos obrigatórios. Não se esqueça de incluir o código SKU e a categoria correta.";
            } else if (msgLower.includes('relatório') || msgLower.includes('relatorio')) {
                response = "Você pode gerar relatórios personalizados no menu 'Relatórios'. Selecione o tipo de relatório, o período desejado e os filtros específicos. Os relatórios podem ser exportados em PDF, Excel ou CSV.";
            } else {
                response = "Obrigado pelo seu contato. Para melhor atendê-lo, poderia fornecer mais detalhes sobre sua dúvida? Ou se preferir, você pode falar diretamente com um de nossos atendentes.";
            }

            addChatMessage(autoChatMessages, response, 'bot');
        }, 800);
    }
}

// Human Chat functionality
const humanChatMessages = document.getElementById('human-chat-messages');
const humanChatInput = document.getElementById('human-chat-input');
const sendHumanChat = document.getElementById('send-human-chat');

sendHumanChat.addEventListener('click', () => sendHumanMessage());
humanChatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendHumanMessage();
    }
});

function sendHumanMessage() {
    const message = humanChatInput.value.trim();
    if (message) {
        addChatMessage(humanChatMessages, message, 'user');
        humanChatInput.value = '';

        // Typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message flex items-start';
        typingDiv.innerHTML = `
            <div class="flex-shrink-0 mr-3">
                <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 max-w-[80%] shadow">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Ana Silva - Atendente</p>
                <p class="text-gray-800 dark:text-gray-200">
                    <span class="inline-flex">
                        <span class="typing-dot">.</span>
                        <span class="typing-dot">.</span>
                        <span class="typing-dot">.</span>
                    </span>
                </p>
            </div>
        `;
        humanChatMessages.appendChild(typingDiv);
        humanChatMessages.scrollTop = humanChatMessages.scrollHeight;

        setTimeout(() => {
            humanChatMessages.removeChild(typingDiv);

            let response;
            const msgLower = message.toLowerCase();

            if (msgLower.includes('olá') || msgLower.includes('oi') || msgLower.includes('bom dia') || msgLower.includes('boa tarde')) {
                response = "Olá! É um prazer atendê-lo. Como posso ajudar você hoje com o CIIG System?";
            } else if (msgLower.includes('problema') || msgLower.includes('erro') || msgLower.includes('bug')) {
                response = "Sinto muito pelo inconveniente. Poderia me fornecer mais detalhes sobre o problema que está enfrentando? Se possível, informe o módulo do sistema e os passos para reproduzir o erro.";
            } else if (msgLower.includes('treinamento') || msgLower.includes('aprender') || msgLower.includes('tutorial')) {
                response = "Temos diversos materiais de treinamento disponíveis. Posso enviar tutoriais em PDF, vídeos explicativos ou agendar uma sessão de treinamento personalizada com nossa equipe. O que seria melhor para você?";
            } else {
                response = "Obrigada por sua mensagem. Estou analisando sua solicitação e vou ajudá-lo da melhor forma possível.";
            }

            addChatMessage(humanChatMessages, response, 'bot');
        }, 2000);
    }
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

// Chat suggestions buttons - enviar mensagem ao chat automático
document.querySelectorAll('#auto-chat-modal .suggestion-btn').forEach(button => {
    button.addEventListener('click', () => {
        autoChatInput.value = button.textContent;
        sendAutoMessage();
    });
});

// Supplier modal search filter
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

// Employee support form submission
document.getElementById('submit-support').addEventListener('click', () => {
    const employeeId = document.getElementById('employee-id').value.trim();
    const category = document.getElementById('support-category').value;
    const description = document.getElementById('support-description').value.trim();
    const fileInput = document.getElementById('file-upload');

    if (!employeeId || !category || !description) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Para este exemplo, não vamos enviar arquivo, só simular sucesso.
    showSuccessModal(
        'Solicitação Enviada!',
        'Sua solicitação de suporte foi enviada com sucesso. Entraremos em contato em breve.'
    );

    // Reset form
    document.getElementById('employee-support-form').reset();

    // Fechar modal suporte funcionário
    modals['employee-support'].classList.add('hidden');
});

function showSuccessModal(title, message) {
    modals['success'].querySelector('#success-title').textContent = title;
    modals['success'].querySelector('#success-message').textContent = message;
    openModal('success');
}
