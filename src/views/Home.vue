<template>
  <!-- <Navbar /> -->
  <div class="home-page">
    <!-- <h1>WE ARE THE LOOMONEERS</h1> -->
    <main class="bckgr-img">
      <div class="intro-bubble">
        <h1>Senior Capstone Project</h1>
        <h2>Presented by the Loomoneers </h2>
        <h3>Explore our Website <br /> Learn About our Project <br /> Get to Know Minds Behind it</h3>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */

*,
::after,
::before {
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
  box-sizing: border-box;
  background-color: #050505;
  font-family: Montserrat, sans-serif;
  /* color: red;
  text-align: center;
  padding: 10px; */
}

.bckgr-img {
  width: 100%;
  height: 120vh;
  /* background-position: center top; */
  /* position: absolute; */
  background-image: url('../assets/gif/loomo_dark_crop.gif');
  background-size: cover;
  position: relative;
  text-align: center;
}

.intro-bubble {
  position: absolute;
  top: 20%;
  left: 1%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.067);
  border-radius: 10px;
  /* background-color: transparent; */
  text-align: left;
  width: 740px;
  height: 60vh;
  color: rgba(255, 255, 255, 0.874);
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* border: 0 solid white; */
  /* border: 200ex; */
}

.intro-bubble:before {
  border-top: 1px solid white;
}

h1,
h2,
h3 {
  max-height: 24vh;
  height: 24vh;
  background: transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

h1 {
  margin-bottom: 20px;
  font-size: 65px;
  font-weight: bold;
  grid-row: 1;
  color: #800000;
}

h2 {
  line-height: 1.5;
  font-size: 35px;
  grid-row: 1;
  color: #ffffff;
}

h3 {
  margin-top: auto;
  width: 100%;
  grid-row: 2;
  font-size: 20px;
  line-height: 2;
  padding-bottom: 0;
}

/* br:after {
  content: "";
  display: block;
  margin: 15px 0;  
} */

header {
  position: absolute;
}

section {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
</style>