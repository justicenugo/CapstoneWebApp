<template>
    <div class="team-page">
        <h1>The Minds Behind the Project</h1>
        <div class="wrapper">
            <div class="section1">
                <div class="cols">
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <img src="../assets/img/justice/justice1.jpg" alt="Justice1" class="grid-item" />
                                <div class="inner">
                                    <p class="memb-name">JUSTICE</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner" style="top: 25%;">
                                    <p>"Success is not final, failure is not fatal: It is the courage to continue that
                                        counts." - Winston Churchill
                                    </p>
                                    <p>
                                        "The only limit to our realization of tomorrow will be our doubts of today." -
                                        Franklin D. Roosevelt
                                    </p>
                                    <router-link class="member-link" to="/team/members/1" style="position: relative; top: -40%;">
                                        <button class="glow-on-hover" type="button" >ABOUT JUSTICE...</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <img src="../assets/img/capstone/ezra2.jpg" alt="Ezra1" class="grid-item" />
                                <div class="inner">
                                    <p>EZRA</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Nothing is particularly hard if you divide it into small jobs.</p>
                                    <router-link class="member-link" to="/team/members/2">
                                        <button class="glow-on-hover" type="button">ABOUT EZRA...</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ***************************************************************************************** -->
            <div class="section2">
                <div class="cols">
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <img src="../assets/img/capstone/alex2.jpg" alt="Alex1" class="grid-item" />
                                <div class="inner">
                                    <p class="memb-name">ALEX</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>"Simplicity is prerequisite for reliability." - Edsger W. Dijkstra</p>
                                    <router-link class="member-link" to="/team/members/3">
                                        <button class="glow-on-hover" type="button">ABOUT ALEX...</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <img src="../assets/img/capstone/nazar2.jpg" alt="Nazar1" class="grid-item" />
                                <div class="inner">
                                    <p>NAZAR</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>The best thing about a boolean is even if you are wrong, you are only off by a bit.
                                    </p>
                                    <router-link class="member-link" to="/team/members/4">
                                        <button class="glow-on-hover" type="button">ABOUT NAZAR...</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ***************************************************************************************** -->
            <div class="section3">
                <div class="cols">
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <img src="../assets/img/capstone/paul2.jpg" alt="Paul1" class="grid-item" />
                                <div class="inner">
                                    <p class="memb-name">PAUL</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>"I am not a wizard, but I like to apply the philosophy of 'Keep it simple, stupid'
                                        (KISS)
                                        to my work. -Kelly Johnson</p>
                                    <router-link class="member-link" to="/team/members/5">
                                        <button class="glow-on-hover" type="button">ABOUT PAUL...</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col" ontouchstart="this.classList.toggle('hover');">
                        <div class="container">
                            <div class="front">
                                <img src="../assets/img/capstone/daniel2.jpg" alt="Daniel1" class="grid-item" />
                                <div class="inner">
                                    <p>DANIEL</p>
                                </div>
                            </div>
                            <div class="back">
                                <div class="inner">
                                    <p>Nothing is random.</p>
                                    <router-link class="member-link" to="/team/members/6">
                                        <button class="glow-on-hover" type="button">ABOUT DANIEL...</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Team',
};
</script>

<style scoped>
.team-page h1 {
    text-align: center;
    margin-top: 50px;
    color: #800000;
}

.wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 85rem;
}

.cols {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 1rem 0 0 0;
}

.section3 .cols {
    padding: 1rem 0 4rem 0;
}

.col {
    width: calc(20% - 2rem);
    margin: 1rem;
    cursor: pointer;
    justify-content: end;
}

.grid-item {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    border-radius: 10px;
}

.container {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    width: 100%;
    height: 600px;
}

.front,
.back {
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-position: center;
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    box-shadow: 0 0 10px solid blue;

    height: auto;
    border-radius: 10px;
    color: #fff;
    font-size: 1.5rem;
    min-height: 600px;
}

.back {
    background: #800000;
    background: -webkit-linear-gradient(45deg, #800000 0%, #596a72 100%);
    background: -o-linear-gradient(45deg, #800000 0%, #596a72 100%);
    background: linear-gradient(45deg, #800000 0%, #4d5b61 100%);
}

.front:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: .6;
    background-color: #000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
}

.container:hover .front,
.container:hover .back {
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.inner {
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 9rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
    height: calc(70% - 2rem);

}

.container .back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.container .front {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.container:hover .back {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.container:hover .front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.front .inner p {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
}

.front .inner p:after {
    content: '';
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #fff;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -.75rem;
}

.front .inner span {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Montserrat';
    font-weight: 300;
}

.member-link {
    top: 100%;
}

.glow-on-hover {
    width: calc(100% - 4rem);
    height: calc(100% - 4vh);
    border: none;
    outline: none;
    color: #111;
    background: #800000;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    top: 100%;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
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
    /* background: #111; */
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
</style>