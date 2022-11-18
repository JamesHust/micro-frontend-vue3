<template>
    <v-app id="inspire">
        <v-app-bar flat>
            <v-container class="fill-height d-flex align-center">
                <v-avatar
                        class="mr-10 ml-4"
                        color="grey-darken-1"
                        size="32"
                ></v-avatar>
                <nav>
                    <v-btn
                            v-for="link in links"
                            :key="link"
                            @click="goToPath(`/${link.toLowerCase()}`)"
                    >
                        {{ link }}
                    </v-btn>
                </nav>
                <v-spacer></v-spacer>
                <v-responsive max-width="260">
                    <v-text-field
                            density="compact"
                            hide-details
                            variant="solo"
                    ></v-text-field>
                </v-responsive>
            </v-container>
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <div style="width: 100vw">
                <RouterView/>
            </div>
        </v-main>
    </v-app>
</template>

<script setup>
import {RouterView, useRouter} from 'vue-router'
import {ref} from 'vue'

const router = useRouter()
const links = ref([
    'Host',
    'Remote',
    'About'
])

const goToPath = (path) => {
    router.push({path: path})
}
</script>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
