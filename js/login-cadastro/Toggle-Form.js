export function removeActiveClass() {
    const container = document.querySelector('.container');
    container.classList.remove('active');
}

export function toggle() {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');
    
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });
    
    loginBtn.addEventListener('click', removeActiveClass);
}