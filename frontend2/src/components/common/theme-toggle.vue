<script setup>
import { useTheme } from '@/main.js'

const { theme, setTheme } = useTheme()

const toggleTheme = () => {
    const themes = ['light', 'dark', 'auto']
    const current = themes.indexOf(theme.value)
    setTheme(themes[(current + 1) % themes.length])
}
</script>

<template>
    <button @click="toggleTheme">
        {{ theme }} clique aqui
    </button>
</template>