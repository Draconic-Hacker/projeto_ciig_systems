<template>
    <div class="html">
        <div class="body">
            <div class="menu" ref="menu">
                <div class="toggle" @click="toggleMenu">
                    <ion-icon name="share-social"></ion-icon>
                </div>

                <li style="--i: 0; --clr: #1877f2">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li style="--i: 1; --clr: #25d366">
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </li>
                <li style="--i: 2; --clr: #1b1e21">
                    <a href="#" title="Sair"><i class="fa-solid fa-power-off"></i></a>
                </li>
                <li style="--i: 3; --clr: #ff5733">
                    <a href="#"><i class="fab fa-reddit-alien"></i></a>
                </li>
                <li style="--i: 4; --clr: #0a66c2">
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li style="--i: 5; --clr: #c32aa3">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li style="--i: 6; --clr: #1b1e21">
                    <a href="#"><i class="fab fa-github"></i></a>
                </li>
                <!-- <li style="--i: 7; --clr: #ff0000">
    <a href="#"><i class="fab fa-youtube"></i></a>
  </li> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menu = ref(null);

// Adiciona a classe 'active' ao carregar a página
onMounted(() => {
    menu.value.classList.add('active');
})

function toggleMenu() {
    menu.value.classList.toggle('active');
}
</script>

<style scoped>
.html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #252432;
}

.menu {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu .toggle {
    position: relative;
    height: 60px;
    width: 60px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 2rem;
    cursor: pointer;
    transition: 1.25s;
    z-index: 5;
}

.menu.active .toggle {
    transform: rotate(360deg);
    box-shadow:
        0 6px 8px rgba(0, 0, 0, 0.15),
        0 0 0 2px #333,
        0 0 0 8px #fff;
}

.menu li {
    position: absolute;
    left: 0;
    list-style: none;
    transition: 0.5s;
    transform: rotate(calc(360deg / 7 * var(--i))) scale(0);
    transform-origin: 140px;
    transition-delay: calc(0.05s * var(--i));
}

.menu.active li {
    transform: rotate(calc(360deg / 7 * var(--i))) scale(1);
}

.menu li a {
    position: relative;
    display: flex;
    transform: rotate(calc(360deg / -7 * var(--i)));
    width: 60px;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.75rem;
    color: var(--clr);
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
    text-decoration: none;
}

.menu li:hover a {
    font-size: 2.5rem;
    box-shadow:
        0 0 0 2px var(--clr),
        0 0 0 6px #fff;
}
</style>