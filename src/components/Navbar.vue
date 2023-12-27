<template>
    <header :class="{ active: isNavbarActive }" class="navbar">
        <div class="logo">
            <router-link to="/" class="navbar-item">
                <img src="../assets/img/white logo/loomo_logo_white.png" class="loomoneers-logo" />
            </router-link>
        </div>
        <div class="navbar-end">
            <li :class="{ 'nav-item': true, active: $route.name === 'Home' }">
                <router-link :to="{ name: 'Home' }" class="nav-link"> Home </router-link>
            </li>
            <li :class="{ 'nav-item': true, active: $route.name === 'Overview' }">
                <router-link :to="{ name: 'Overview' }" class="nav-link"> Overview </router-link>
            </li>
            <li :class="{ 'nav-item': true, active: $route.name === 'Team' }">
                <router-link :to="{ name: 'Team' }" class="nav-link"> Team </router-link>
            </li>
            <li v-if="isAuthenticated" :class="{ 'nav-item': true, active: $route.name === 'Operate' }">
                <router-link :to="{ name: 'Operate' }" class="nav-link"> Operate </router-link>
            </li>
            <li v-if="isAuthenticated" :class="{ 'nav-item': true, active: $route.name === 'Account' }">
                <router-link :to="{ name: 'Account' }" class="nav-link"> Account </router-link>
            </li>
            <div class="nav-bar__buttons">
                <template v-if="!isAuthenticated">
                    <SignupButton class="nav-bar-button signup-button" />
                    <LoginButton class="nav-bar-button login-button" />
                </template>
                <template v-if="isAuthenticated">
                    <LogoutButton class="nav-bar-button logout-button" />
                </template>
            </div>
        </div>
    </header>
</template>

<script setup>
import LoginButton from "@/components/buttons/Login-button.vue";
import LogoutButton from "@/components/buttons/Logout-button.vue";
import SignupButton from "@/components/buttons/Signup-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>

<script>
export default {
    data() {
        return {
            isNavbarActive: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isNavbarActive = window.scrollY > 0;
        },
    },
};
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');

/* header {
    background-color: #300;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 1rem 2rem;
} */

header {
    background-color: rgb(5 5 5);

    position: relative;
    transition: background-color 0.3s ease;
    display: flex;
    height: 75px;
    transition: all 0.3s ease;
    z-index: 100;
}

header.active {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    /* background-color: #100; */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.333);
}

/* header.active {
    position: sticky;
    top: var(--_top);
    background-color: #100;

    box-shadow: 0 3px 6px #0005;
} */

/* .logo {
    position: relative;
    left: 10%;
    padding-left: 10rem;
} */

header .loomoneers-logo {
    max-width: 8%;
    position: relative;
    /* margin-top: 10px; */
    margin-left: 25px;
    z-index: 1;
    padding-bottom: 10px;
}

.nav-link {
    position: relative;
    text-decoration: none !important;
    color: #ffffff;
    /* padding-top: 20px; */
    /* font-weight: 700; */
}

.nav-link:hover {
    fill: #800000;
    color: #800000;
    cursor: pointer;
}

.nav-link::before,
.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.25s;
}

.nav-link::before {
    top: -3px;
    transform-origin: left;
}

.nav-link::after {
    bottom: -3px;
    transform-origin: right;
}

.nav-link:hover::before,
.nav-link:hover::after,
.active::before,
.active::after {
    transform: scaleX(1);
}

.navbar-end {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin-bottom: 25px;
    margin-right: 25px;
    /* padding-top: 20px; */
    padding: 10px;
}

.nav-item {
    position: relative;
}

.nav-link.active {
    color: #800000;
    /* Change this to the desired color for the active link */
}

.nav-bar__buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nav-bar-button {
    width: 6rem;
    height: 80%;
    background: #800000;
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #800000;
    cursor: pointer;
}

.signup-button {
    background: #000000;
    border: 1px solid #ffffff;
}
</style>