<template>
    <!-- <ModalPassowrd />      -->

    <div class="container-fluid p-0">
        <div class="row g-0 vh-100">
            <!-- Metade Esquerda -->
            <div class="col-md-6 bg-dark text-white animated-gradient d-flex align-items-center justify-content-center">
                <div class="floating-orb orb-1"></div>
                <div class="floating-orb orb-2"></div>
                <div class="floating-orb orb-3"></div>
                <h2 class="fade-in">Lado Esquerdo</h2>
            </div>

            <!-- Metade Direita -->
            <div class="col-md-6 bg-blue-dark d-flex align-items-center justify-content-center">
                <RigthLogin />
                <themetoggle />
            </div>
        </div>
    </div>


</template>

<script setup>
import ModalPassowrd from '@/components/common/ModalPassowrd.vue'
import RigthLogin from '@/components/login/RigthLogin.vue'
import themetoggle from '@/components/common/theme-toggle.vue'
// import LeftRegister from '@/components/login/LeftRegister.vue'
</script>

<style scoped>
.bg-blue-dark {
    background-color: #1f2937;
}

@keyframes gradientDance {
    0% {
        background-position: 0% 50%;
    }

    25% {
        background-position: 100% 50%;
    }

    50% {
        background-position: 100% 100%;
    }

    75% {
        background-position: 0% 100%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.animated-gradient {
    background: linear-gradient(135deg, #000000, #1a1a8c, #2b2bb2, #0d0d5c, #000000);
    background-size: 400% 400%;
    animation: gradientDance 15s ease infinite;
}

@keyframes floatOrbs {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
    }

    25% {
        transform: translate(30px, -30px) scale(1.1);
        opacity: 0.5;
    }

    50% {
        transform: translate(-20px, 20px) scale(0.9);
        opacity: 0.4;
    }

    75% {
        transform: translate(20px, 10px) scale(1.05);
        opacity: 0.35;
    }
}

.floating-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
}

.orb-1 {
    width: 300px;
    height: 300px;
    background: #2b2bb2;
    top: 10%;
    left: 10%;
    animation: floatOrbs 12s ease-in-out infinite;
}

.orb-2 {
    width: 250px;
    height: 250px;
    background: #1a1a8c;
    bottom: 20%;
    right: 10%;
    animation: floatOrbs 15s ease-in-out infinite reverse;
}

.orb-3 {
    width: 200px;
    height: 200px;
    background: #3d3dd4;
    top: 50%;
    left: 30%;
    animation: floatOrbs 18s ease-in-out infinite 2s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.5s ease forwards;
}
</style>
