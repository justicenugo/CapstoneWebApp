<template>
    <div class="register-page">
        <section class="container">
            <div class="title">
                <img class="logo-gif" src="../assets/gif/loomo_light_unscreen.gif" />
                <h1>Create Your Account</h1>
                <h3>Create an account to access robot operation functionality.</h3>
            </div>
            <div class="reg-card">
                
            </div>
        </section>
        <section>

        </section>
    </div>
</template>

<style scoped>

*,
::after,
::before {
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
    box-sizing: border-box;
    background-color: #050505;
    font-family: Montserrat, sans-serif;
}

.register-page {
    background: #ffffff;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.container {
    padding: 2rem;
    height: 100%; /* edit this */
    height: 100vh;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 2rem;
}

.title {
    background: none;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    text-align: center;
    align-content: center;
    gap: 1rem;
}

.logo-gif {
    background: none;
    width: 30%;
    height: auto;
}

.title h1 {
    background: none;
    font-weight: bolder;
}

.title h3 {
    background: none;
    font-size: 1rem;
    color: #808080;
}

.reg-card {
    background: blue;
    width: 60%;
    height: 100%;
    border-radius: 2rem;
}

</style>