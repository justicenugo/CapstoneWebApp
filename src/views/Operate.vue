<template>
    <div class="operate-page">
        <div v-if="isLoading">Loading ...</div>
        <div v-else class="else-block">
            <div v-if="isAuthenticated" class="container">
                <h1>Operate</h1>
                <div class="controls-container">
                    <h3>Use Buttons to Control the Robot</h3>
                    <div class="controls">
                        <button class="forward-btn" @click="testConnect('w')">
                            <font-awesome-icon :icon="['fas', 'angles-up']" beat size="2xl" />
                        </button>
                        <button class="left-btn" @click="testConnect('a')">
                            <font-awesome-icon :icon="['fas', 'angles-left']" beat size="2xl" />
                        </button>
                        <button class="stop-btn" @click="testConnect('status')">
                            <font-awesome-icon :icon="['fas', 'ban']" size="5x" />
                        </button>
                        <button class="right-btn" @click="testConnect('d')">
                            <font-awesome-icon :icon="['fas', 'angles-right']" beat size="2xl" />
                        </button>
                        <button class="backward-btn" @click="testConnect('s')">
                            <font-awesome-icon :icon="['fas', 'angles-down']" beat size="2xl" />
                        </button>
                    </div>
                    <div class="non-control-buttons">
                        <button class="script-btn" @click="testConnect('l')">SCRIPT</button>
                    </div>
                    <input class="input-box" @keyup="handleKeyPress" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Composition API
import { useAuth0 } from '@auth0/auth0-vue';
import axios from 'axios'
import { useWebSocket } from '@/useWebSocket'; // Path can be adjusted if needed (@useWebSocket for now)


export default {
    setup() {
        const auth0 = useAuth0();
        // const { data, error, send } = useWebSocket('ws://172.20.10.2:9090'); // replace <robot_ip> with server's IP address later 'ws://<robot_ip>:9090' perhaps 172.20.10.2
        const { data, error, send } = useWebSocket('ws://172.20.10.4:9090'); // replace <robot_ip> with server's IP address later 'ws://<robot_ip>:9090' perhaps 172.20.10.2
        console.log('Attempting WebSocket connection...');

        return {
            logout: () => auth0.logout({ returnTo: window.location.origin }),
            user: auth0.user,
            isAuthenticated: auth0.isAuthenticated,
            isLoading: auth0.isLoading,
            data, error, send
        };
    },

    methods: {
        // ... Existing methods ...

        testConnect(message) {
            this.send(message);
        },
        handleKeyPress(event) {
            // Check if the pressed key is the one you want, for example, the Enter key
            switch (event.key.toUpperCase()) {
                case 'W':
                    this.testConnect('w');
                    break;
                case 'A':
                    this.testConnect('a');
                    break;
                case 'S':
                    this.testConnect('s');
                    break;
                case 'D':
                    this.testConnect('d');
                    break;
                case 'L':
                    this.testConnect('l');
                    break;
                case ' ':
                    this.testConnect('goto:stop');
                    break;
            }
            this.inputValue = '';
        },
    },

};
</script>

<style scoped>
.operate-page {
    height: 135vh;
    color: #ffffff;
    text-align: center;
}

.else-block {
    height: inherit;
    width: inherit;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    padding: 5%;
}

.container h1 {
    margin-bottom: 1%;
    margin-top: -11%;
    font-size: 3rem;
}

.controls-container {
    padding: 9%;
    /* padding-top: 4%; */
    height: calc(100%);
    width: 100%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* position: relative;
    top: 15%; */
}

.controls-container h3 {
    font-size: 1.7rem;
    position: relative;
    /* top: 15%; */
}

.controls {
    /* background: orange; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: -6rem 0;
    gap: 3rem;
    font-size: 16px;
    position: relative;
    /* top: -5%; */
    width: 100%;
    height: 100%;
}



.forward-btn,
.left-btn,
.right-btn,
.backward-btn,
.stop-btn {
    background: #800000;
    /* width: 15%;
    height: 11vh;
    border-radius: 200px; */
    border-radius: 25px;
    border: 1px solid #800000;
    width: 13%;
    height: 10vh;
    cursor: pointer;

    /* display: flex;
    align-items: center;
    justify-content: center; */
    font-size: 20px;
    color: #ffffff;
}

.forward-btn {
    position: relative;
    top: 17.3%;
}

.left-btn {
    position: relative;
    top: 11%;
    left: -13%;
}

.stop-btn {
    position: relative;
    top: -10%;
    background: none;
    border: none;
    font-size: 16px;
    color: #ff0000;
}

.right-btn {
    position: relative;
    top: calc(-31%);
    left: 13%;
}

.backward-btn {
    position: relative;
    top: -37.3%;
}

.forward-btn:hover,
.left-btn:hover,
.right-btn:hover,
.backward-btn:hover,
.script-btn:hover {
    background-color: #ffffff;
    color: #800000;
}

.stop-btn:hover {
    background-color: #ffffff;
}
/* :active:after */
.script-btn {
    width: 10rem;
    height: 5.5vh;
    background: #800000;
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #800000;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: calc(-100% - 13rem);
    left: calc(100% + 2.1rem);
}

.input-box {
    width: 70%;
    height: 18vh;
    border-radius: 12px;
    position: relative;
    top: -28%;
    border: 1px solid #ffffff;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>