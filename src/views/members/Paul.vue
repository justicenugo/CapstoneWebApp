<template>
    <div class="paul-page">
        <div class="team-section1">
            <section class="primary-sect">
                <section class="secondary-sect split-left">
                    <div class="intro1-container">
                        <div class="intro1-header">
                            <h2>BIOGRAPHY</h2>
                        </div>
                        <div class="intro1-content">
                            <p>
                                I'm Paul Shin, a budding computer scientist whose love for technology is only surpassed by
                                my drive to innovate and inspire.
                            </p>
                            <p>
                                Drawn to computer science for its limitless potential to solve real-world problems, I began
                                my journey with a simple 'Hello, World!' and have since been on a quest to unlock the
                                secrets of machine learning and data science, with a side interest in the protective
                                strategies of cybersecurity.
                            </p>
                        </div>
                    </div>
                    <div class="intro2-container">
                        <div class="intro2-header">
                            <h2>FUTURE GOALS</h2>
                        </div>
                        <div class="intro2-content">
                            <p>
                                My academic path is a pursuit of excellence in artificial intelligence, a field I believe
                                holds the key to our future. I aim to master machine learning and data science, and I'm
                                equally fascinated by the challenges presented by cybersecurity.
                            </p>
                            <p>
                                My goal post-graduation is
                                to fuse my skills in algorithm design with robust cybersecurity practices to make
                                significant contributions to the tech industry.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="secondary-sect split-middle">
                    <div class="name-title">
                        <h1>
                            <span style="color: #000000;">P</span>
                            <span style="color: #800000;">a</span>
                            <span style="color: #000000;">u</span>
                            <span style="color: #800000;">l</span>  <span> </span>
                            <span style="color: #000000;">S</span>
                            <span style="color: #800000;">h</span>
                            <span style="color: #000000;">i</span>
                            <span style="color: #800000;">n</span>
                        </h1>
                    </div>
                    <div class="img-container">
                        <img src="../../assets/img/paul/paul3.jpg" alt="Paul1" class="mid-img" />
                    </div>
                </section>
                <section class="secondary-sect split-right">
                    <div class="socials">
                        <div class="socials-title">
                            <h2>Connect With Me!!!</h2>
                        </div>
                        <div class="socials-info">
                            <a target="_blank" href="mailto:shin3301@tamu.edu">
                                <font-awesome-icon :icon="['fas', 'envelope-circle-check']" beat size="10x"
                                    style="color: #5e0c8d;" />
                            </a>
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
                                    As a Flex Developer, I play a crucial role in ensuring that the middle and back-end
                                    elements of our project work in harmony. Along with my team members I was also
                                    responsible for creating detailed documentation and managing project deliverables,
                                    ensuring everything we do is clear and purpose-driven.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="secondary-sect split-middle">
                    <div class="img-container">
                        <img src="../../assets/img/paul/paul1.png" alt="Paul2" class="mid-img" />
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
                                Fluent in C++, Python, and Java, I'm also versed in several other modern programming
                                languages that equip me to tackle a variety of software development challenges.
                            </p>
                        </div>
                    </div>
                    <div class="intro2-container">
                        <div class="intro2-header">
                            <h2>HOBBIES & INTERESTS</h2>
                        </div>
                        <div class="intro2-content">
                            <p>
                                When I step away from the keyboard, you can find me on hiking trails, playing tennis,
                                traveling to new destinations, or experimenting with culinary recipes in my kitchen.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="secondary-sect split-middle">
                    <div class="img-container">
                        <img src="../../assets/img/paul/paul2.jpg" alt="Paul3" class="mid-img" />
                    </div>
                </section>
                <section class="secondary-sect split-right">
                    <div class="extra">
                        <font-awesome-icon :icon="['fab', 'python']" fade size="10x" />
                        <font-awesome-icon :icon="['fab', 'java']" flip size="10x" />
                        <font-awesome-icon :icon="['fas', 'plane-departure']" beat size="10x" style="color: #000000;" />
                        <font-awesome-icon :icon="['fas', 'martini-glass-citrus']" flip size="10x" style="color: #000000;" />
                    </div>
                </section>
            </section>
        </div>

        <!-- ***************************************************************************************** -->
        <div class="footer-nav">
            <section class="prev-next-member-sect">
                <div class="member-nav">
                    <div class="prev">
                        <router-link class="member-link" to="/team/members/4">
                            <button class="glow-on-hover" type="button">
                                <font-awesome-icon :icon="['fas', 'circle-arrow-left']" fade size="2xl"
                                    style="color: #ffffff;" />
                                <span>PREV</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="next">
                        <router-link class="member-link" to="/team/members/6">
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

.paul-page {
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
    top: 5%;
    border-radius: 143px 143px 143px 143px;    
}

.intro1-header,
.intro2-header {
    /* background: blue; */
    margin: 0 20px 0 20px;
    height: 45%;
}

.intro1-header h2,
.intro2-header h2 {
    background: #800000;
    padding-top: 5px;
    position: relative;
    top: 30%;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
}

.intro1-content,
.intro2-content {
    /* background: yellow; */
    margin: 0 20px 0 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    display: grid;
    /* gap: 1vh; */
    position: relative;
    top: -11%;
}

.intro2-content {
    top: -5%;
}

.intro1-content p,
.intro2-content p {
    color: #000000;
    position: relative;
    /* top: 10%;  */
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
    top: calc(100% + 4vh);
}

.team-section3 .intro1-content {
    position: relative;
    top: 30%;
}

.team-section3 .intro2-content {
    position: relative;
    top: 20%;
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

.team-section2 .primary-sect{
    padding: 0 10rem 0 10rem;
}

.role-container {
    position: relative;
    right: 10%;
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

