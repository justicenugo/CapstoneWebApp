<template>
    <div class="nazar-page">
        <div class="team-section1">
            <section class="primary-sect">
                <section class="secondary-sect split-left">
                    <div class="intro1-container">
                        <div class="intro1-header">
                            <h2>BIOGRAPHY</h2>
                        </div>
                        <div class="intro1-content">
                            <p>
                                I'm Ezra Lane, a computer science major at Texas A&M University. I work at a local software
                                consulting firm called Frogslayer.
                            </p>
                        </div>
                    </div>
                    <div class="intro2-container">
                        <div class="intro2-header">
                            <h2>FUTURE GOALS</h2>
                        </div>
                        <div class="intro2-content">
                            <p>
                                After I graduate I hope to go full time into software consulting.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="secondary-sect split-middle">
                    <div class="name-title">
                        <!-- <h1>Nazar Oladepo</h1> -->
                        <h1>
                            <span style="color: #000000;">E</span>
                            <span style="color: #800000;">z</span>
                            <span style="color: #000000;">r</span>
                            <span style="color: #800000;">a</span> <span> </span>
                            <span style="color: #000000;">L</span> 
                            <span style="color: #800000;">a</span>
                            <span style="color: #000000;">n</span>
                            <span style="color: #800000;">e</span>
                        </h1>
                    </div>
                    <div class="img-container">
                        <img src="../../assets/img/ezra/ezra1.jpeg" alt="Ezra1" class="mid-img" />
                    </div>
                </section>
                <section class="secondary-sect split-right">
                    <div class="socials">
                        <div class="socials-title">
                            <h2>Connect With Me!!!</h2>
                        </div>
                        <span style="font-size: 20px;">Sorry I dont have any links right now!!!</span>
                        <div class="socials-info">
                            <font-awesome-icon :icon="['fas', 'face-sad-tear']" size="10x" style="color: #ffa500;" />
                        </div>
                    </div>
                </section>
            </section>
        </div>

        <!-- ***************************************************************************************** -->
        <div class="team-section2">
            <section class="primary-sect">
                <section class="secondary-sect split-left">
                    <div class="role-container">
                        <div class="role-header">
                            <h2>PROJECT ROLE</h2>
                            <div class="role-content">
                                <p>
                                    In my role as Backend and Middleware Developer, I assumed a critical position for the
                                    project. I specifically addressed middleware challenges to
                                    establish seamless communication between the robot
                                    and our web-based platform. This involved not only guiding the technical direction of
                                    the project but also facilitating knowledge transfer within the team. My strategic role
                                    in both backend and middleware development ensured a cohesive integration, contributing
                                    to the overall success of our goal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="secondary-sect split-middle">
                    <div class="img-container">
                        <img src="../../assets/img/ezra/ezra2.jpeg" alt="Ezra2" class="mid-img" />
                    </div>
                </section>
            </section>
        </div>

        <!-- ***************************************************************************************** -->
        <div class="team-section3">
            <section class="primary-sect">
                <section class="secondary-sect split-left">
                    <div class="intro1-container">
                        <div class="intro1-header">
                            <h2>SKILLS & EXPERTISE</h2>
                        </div>
                        <div class="intro1-content">
                            <p>
                                I am proficient mainly in Python and C++, although I have experience with many other
                                languages including Java, JavaScript, HTML, C#, and a little bit of Flutter.
                            </p>
                            <p>
                                My main expertise is backend development, although I can do simple frontend tasks if need
                                be.
                            </p>
                        </div>
                    </div>
                    <div class="intro2-container">
                        <div class="intro2-header">
                            <h2>HOBBIES & INTERESTS</h2>
                        </div>
                        <div class="intro2-content">
                            <p>
                                One of my main hobbies is language learning. I like learning about how people who speak
                                other languages think and often that requires speaking their language. I studied Korean for
                                two years but it's been a while so I'm quite rusty. I have been studying Japanese for a
                                little over a year now and I would say that I am at an intermediate level.
                            </p>
                            <p>
                                Some of my interests include learning trivia, playing music, and playing video games.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="secondary-sect split-middle">
                    <div class="img-container">
                        <img src="../../assets/img/ezra/ezra3.jpeg" alt="Ezra3" class="mid-img" />
                    </div>
                </section>
                <section class="secondary-sect split-right">
                    <div class="extra">
                        <font-awesome-icon :icon="['fab', 'python']" fade size="10x" />
                        <font-awesome-icon :icon="['fab', 'java']" flip size="10x" />
                        <font-awesome-icon :icon="['fas', 'music']" beat size="10x" style="color: #000000;" />
                        <font-awesome-icon :icon="['fas', 'gamepad']" shake size="10x" style="color: #000000;" />
                    </div>
                </section>
            </section>
        </div>

        <!-- ***************************************************************************************** -->
        <div class="footer-nav">
            <section class="prev-next-member-sect">
                <div class="member-nav">
                    <div class="prev">
                        <router-link class="member-link" to="/team/members/1">
                            <button class="glow-on-hover" type="button">
                                <font-awesome-icon :icon="['fas', 'circle-arrow-left']" fade size="2xl"
                                    style="color: #ffffff;" />
                                <span>PREV</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="next">
                        <router-link class="member-link" to="/team/members/3">
                            <button class="glow-on-hover" type="button">
                                <span>NEXT</span>
                                <font-awesome-icon :icon="['fas', 'circle-arrow-right']" fade size="2xl"
                                    style="color: #ffffff;" />
                            </button>
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
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
    color: #000000;
    font-family: Montserrat, sans-serif;
}

.nazar-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
}

.primary-sect {
    display: flex;
    width: 100%;
    /* background-color: #ffffff; */
    /* border: 3px solid #000000; */
    border-bottom: 5px solid #000000;
    min-height: 100vh;
}

.team-section3 .primary-sect {
    border-bottom: none;
}

.secondary-sect {
    /* activate border for debugging style */
    /* border: 1px solid blue; */
    padding: 10px;
}

.split-left {
    padding-left: 3rem;
}

.team-section1 .split-left,
.team-section1 .split-middle,
.team-section1 .split-right,
.team-section3 .split-left,
.team-section3 .split-middle,
.team-section3 .split-right {
    flex: 1;
    max-width: 100%;
}

.team-section1 .split-left {
    display: block;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 8rem 3rem;
}

.team-section1 .split-left>*:not(:last-child) {
    margin-bottom: 4rem;
}

.team-section3 .split-left>*:not(:last-child) {
    margin-bottom: -4rem;
}

.intro1-container,
.intro2-container {
    /* background: rgba(128, 128, 128, 0.7); */
    position: relative;
    top: 10%;
    height: calc(40% + 3rem);
    margin-bottom: 1rem;
    justify-content: center;
    text-align: justify;
    display: grid;
    gap: 1vh;
    border-radius: 50px;
    /* border: 10px double #000000; */
}

.intro2-container {
    height: 25%;
    top: 25%;
    border-radius: 143px 143px 143px 143px;
}

.intro1-header,
.intro2-header {
    /* background: blue; */
    margin: 0 20px 0 20px;
    height: 45%;
}

.team-section3 .intro2-header {
    padding: 0 3rem 0 2rem;
    top: 20%;
}

.intro1-header h2,
.intro2-header h2 {
    background: #800000;
    padding-top: 5px;
    position: relative;
    top: 100%;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

.intro2-header h2 {
    top: calc(-100% - 12vh);
    left: -10%;
    width: calc(100% + 6rem);
}

.intro1-content,
.intro2-content {
    /* background: yellow; */
    margin: 0 20px 0 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    display: grid;
    gap: 3vh;
    position: relative;
    top: -10%;
}

.intro2-content {
    top: calc(-100% - 10vh);
    left: -10%;
}

.intro1-content p,
.intro2-content p {
    color: #000000;
}


.team-section1 .split-middle {
    display: block;
    align-items: center;
    justify-content: center;
}

.name-title {
    text-align: center;
    display: block;
    position: relative;
    top: 20px;
}

.name-title h1 {
    font-size: 3em;
    font-weight: 700;
}


.team-section1 .img-container,
.team-section3 .img-container {
    position: relative;
    background-color: #ffffff;
    padding: 20px;
    margin-block: 70px 20px;
    height: calc(100% - 18vh);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 18px 20px 5px 4px #886752;
    border: 3px solid #000000;
}

.team-section1 .mid-img,
.team-section3 .mid-img {
    max-width: 100%;
    max-height: 100%;
    /* height: 75vh; */
    object-fit: cover;
    border-radius: 20px;
}

.team-section2 .split-left {
    flex: 1;
    max-width: 60rem;
}

.team-section2 .split-middle {
    flex: 1;
    /* max-width: 100%; */
}

.team-section2 .img-container {
    background-color: #ffffff;
    padding: 20px;
    margin-block: 90px 20px;
    margin-left: 30px;
    width: calc(100% - 5rem);
    height: calc(100% - 18vh);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 18px 20px 5px 4px #886752;
    border: 3px solid #000000;
}

.team-section2 .mid-img {
    /* max-width: 100%; */
    height: calc(100% - 1vh);
    max-height: calc(100% - 7rem);
    height: 75vh;
    object-fit: cover;
    border-radius: 20px;
}

.team-section3 .intro1-container,
.team-section3 .intro2-container {
    height: calc(25%);
}

.team-section3 .intro1-container {
    top: 15%;
}

.team-section3 .intro2-container {
    top: 30%;
}

.team-section3 .intro1-header h2 {
    top: calc(100% + 5vh);
}

.team-section3 .intro2-header h2 {
    top: calc(100%);
}

.team-section3 .intro1-content {
    position: relative;
    top: 30%;
}

.team-section3 .intro2-content {
    position: relative;
    top: 18%;
    left: -2%;
}


.team-section2 .secondary-sect {
    /* background: blue; */
    background: none;
    /* Center items vertically */
}

.team-section2 .split-left {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Center items horizontally */
    justify-content: center;
    padding: 8rem 0 8rem 3rem;
}

.role-container {
    /* background: rgba(128, 128, 128, 0.7); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40%;
    /* height: calc(40% + 3rem); */
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    border-radius: 80px;
    /* padding: 3rem; */
    /* margin-bottom: 1rem; */
}

.role-header {
    background: #800000;
    height: 20%;
    text-align: center;
    position: relative;
    top: -35%;
}

.role-header h2 {
    padding: 10px;
    color: #ffffff;
}

.role-content {
    text-align: justify;
    position: relative;
    top: 70%;
}

.team-section3 .extra {
    padding-left: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.team-section1 .socials {
    /* background: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
    top: 25%;
}

.team-section1 .socials-title {
    background: #800000;
    width: 85%;
    text-align: center;
    padding: 5px;
}

.team-section1 .socials-title h2 {
    color: #ffffff;
}

.team-section1 .socials-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 6rem;
}

.footer-nav {
    width: 100%;
}

.prev-next-member-sect {
    display: flex;
    width: 100%;
    background-color: #ffffff;
    min-height: 30vh;
}

.member-nav {
    padding: 1rem 0 0 4rem;
    width: 100%;
    display: flex;
    gap: 63rem;
    gap: calc(100% - 52rem);
    /* background: blue; */
}

.glow-on-hover {
    width: 24rem;
    height: 20%;
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;
    z-index: 0;
    border-radius: 10px;
    top: 10%;
}

.glow-on-hover span {
    color: #ffffff;
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    position: relative;
    top: -1%;
}

.prev .glow-on-hover span {
    padding-left: 1rem;
}

.next .glow-on-hover span {
    padding-right: 1rem;
    /* background: blue; */

}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(10px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 1;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000;
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #800000;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}

.footer-nav .member-link {
    position: relative;
    top: 20%;
}
</style>

