<template>
  <!-- <Navbar /> -->
  <div class="overview-page">
    <section class="bckgr-img">
      <h1>Overview of our Project</h1>
    </section>

    <!-- *************************** PROJECT SCOPE *************************** -->
    <section class="scope">
      <div class="scope-container">
        <div class="scope-title">
          <h2>Project Scope</h2>
        </div>
        <div class="scope-content">
          <span>
            The project aims to transform a Loomo Segway robot into a mobile office assistant adept at navigating indoor
            environments. Core capabilities involve simultaneous localization and mapping (SLAM) for spatial awareness,
            efficient path planning around obstacles, and interfaces allowing users to designate navigation goals or
            monitor status. The current scope focuses on developing reliable autonomous navigation in cluttered real-world
            office spaces. Advanced skills like manipulating objects or complex human interactions are future work.
            Success hinges on accurate mapping, self-localization, and obstacle avoidance within dynamic office layouts
            using the sensors available on the Loomo hardware platform.
          </span>
        </div>
      </div>
    </section>

    <!-- *************************** ITERATION ONE *************************** -->
    <section class="iteration1">
      <div class="iter1-title">
        <h2>Iteration One Content</h2>
      </div>
      <div class="iter1-content-container">
        <div class="description">
          <h3>Description</h3>
          <span>
            Goal: Communication and Data Handling <br /><br />
            Established two-way communication between computer and LOOMO robot.
            Received and utilized data from LOOMO for script development, enabling features like object avoidance.
          </span>
        </div>
        <div class="images-cont">
          <img src="../assets/img/background/loomo descr diagrm.png" alt="Justice3" class="mid-img" />
        </div>
      </div>
    </section>

    <!-- *************************** ITERATION TWO *************************** -->
    <section class="iteration2">
      <div class="iter2-title">
        <h2>Iteration Two Content</h2>
      </div>
      <div class="iter2-content-container">
        <div class="images-cont">
          <!-- <img src="../assets/img/background/loomo descr diagrm.png" alt="Justice3" class="mid-img" /> -->
          <img src="../assets/gif/loomo_light.gif" alt="Justice3" class="mid-img" />
        </div>
        <div class="description">
          <h3>Description</h3>
          <span>
            Goal: Script Development and Movement Control <br /><br />
            Developed scripts for precise robot movement control.
            Set up a local machine backend as the foundation for user interaction.
          </span>
        </div>
      </div>
    </section>

    <!-- *************************** ITERATION THREE *************************** -->
    <section class="iteration3">
      <div class="iter3-title">
        <h2>Iteration Three Content</h2>
      </div>
      <div class="iter3-content-container">
        <div class="description">
          <h3>Description</h3>
          <span>
            Goal: Localization, Automation, and User Interface <br /><br />
            Implemented localization and automation for independent navigation in Peterson building.
            Created a user-friendly website for remote control and interaction with the LOOMO robot.

          </span>
        </div>
        <div class="images-cont">
          <img src="../assets/img/screenshots/team_page_ss.png" alt="Justice3" class="mid-img" />
          <img src="../assets/img/screenshots/operate_page_ss.png" alt="Justice3" class="mid-img" />
        </div>
      </div>
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

  font-family: Montserrat, sans-serif;
  color: #ffffff;
}

.bckgr-img {
  width: 100%;
  height: 120vh;
  background-image: url('../assets/img/background/loomo_bckgrnd.png');
  background-position: center top;
  background-size: cover;
}

.bckgr-img h1 {
  font-size: 3rem;
}

header {
  position: absolute;
}

section {
  /* background-color: #300; */
  min-height: 100vh;
  display: grid;
  place-items: center;
}

/* section:nth-child(odd) {
  background-color: #511;
} */

.scope {
  justify-content: center;
  align-content: center;
  text-align: center;
  /* background: blue; */
  margin: 4rem;
}

.scope-container {
  background: #800000;
  max-width: 100%;
  max-height: calc(550%);
  height: calc(250%);
  width: 70%;
  display: grid;
  gap: 4rem;
  justify-content: center;
  align-content: center;
  border-radius: 2rem;
}

.scope-title {
  /* background: #800000; */
  position: relative;
  top: 0%;
  left: 35%;
  width: 30%;
  height: calc(100%);
}

.scope-content {
  /* background: red; */
  width: 80%;
  position: relative;
  left: 10%;
  text-align: justify;
}

.iteration1,
.iteration2,
.iteration3 {
  /* background: green; */
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  margin: 4rem;
  /* flex: 1; */
}

.iter1-title,
.iter2-title,
.iter3-title {
  margin-top: 3rem;
  padding: 1rem;
}

.iter1-content-container,
.iter2-content-container,
.iter3-content-container {
  display: flex;
  gap: 4rem;
  /* background: blue; */
  width: 90%;
  max-height: 100vh;
  height: 100vh;
  margin: 2rem 0;
  padding: 2rem;
  justify-content: center;
  align-content: center;
}

.description {
  background: #800000;
  border-radius: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 70%;
  position: relative;
  top: 10%;
}

.description h3 {
  /* background: #000000; */
  padding: 8px;
  text-align: center;
}

.description span {
  /* background: black; */
  margin: 2rem;
  padding: 1rem;
  text-align: justify;
}

.images-cont {
  background: #ffffff;
  border-radius: 12rem;
  display: flex;
  justify-content: center;
  align-content: center;
  /* width: calc(100%); */
  /* height: calc(100% + 3rem); */
}

.iteration3 .images-cont {
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1rem;
  /* width: calc(100%); */
  /* height: calc(100% + 3rem); */
}

.images-cont img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12rem;
}

.iteration3 .images-cont img {
  border-radius: 0;
  width: 90%;
}

.iteration2 .description {
  left: 10%;
}
</style>
