<template>
    <div class="account-page">
        <div v-if="isLoading">Loading ...</div>
        <div v-else class="else-block">
            <div v-if="isAuthenticated" class="container">
                <h1>Account</h1>
                <div class="user-info-container">
                    <button class="btn btn-secondary">
                        <img v-if="user.picture" :src="user.picture" alt="Profile Picture" class="profile-picture" />
                    </button><span><br></span>
                    <div class="user-info">
                        <p><strong>Username:</strong> {{ user.nickname }}</p>
                        <p><strong>Email:</strong> {{ user.email }}</p>
                        <p><strong>Email verified:</strong> {{ user.email_verified }}</p>
                        <p><strong>Last Updated:</strong> {{ formatDateTime(user.updated_at) }}</p>
                        <p><strong>Sub:</strong> {{ user.sub }}</p>
                    </div>
                    <button class="log-out-button" @click="logout">Log out</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Composition API
import { useAuth0 } from '@auth0/auth0-vue';

export default {
    setup() {
        const auth0 = useAuth0();

        const formatDateTime = (dateString) => {
            const date = new Date(dateString);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            return date.toLocaleString(undefined, options);
        };


        return {
            logout: () => auth0.logout({ returnTo: window.location.origin }),
            formatDateTime,
            user: auth0.user,
            isAuthenticated: auth0.isAuthenticated,
            isLoading: auth0.isLoading,
        };
    }
};
</script>

<style scoped>
.account-page {
    height: 105vh;
    color: white;
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
    align-items: center;
    justify-content: center;
    padding: 10%;
}

.container h1 {
    margin-bottom: 5%;
    margin-top: -25%;
}

.user-info-container {
    background-color: #800000;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    height: calc(100%);
    padding: 8%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.btn img {
    transition: all 0.5s;
}

.btn:hover img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 5%
}

.profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px 0;
}

.user-info {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 0.5rem;
    font-size: 16px;
    position: relative;
    top: -5%;
    color: #fff;
}

.user-info strong {
    font-size: 18px;
    font-weight: bolder;
}

.log-out-button {
    width: 100%;
    height: 4vh;
    background: #000000;
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #000000;
    font-size: 20px;
    padding: 5px 0 1rem 0;
    cursor: pointer;
}

.log-out-button:hover {
    border: 2px solid #ffffff;
}
</style>