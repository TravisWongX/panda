const string = `
.wrapper {
  background: #6bbe92;
  display: grid;
  justify-content: center;
  align-content: center;
}

.container {
  width: 9rem;
  height: 10rem;
  position: relative;
  display: grid;
  justify-content: center;
  align-content: end;

}

.panda {
  opacity: 0.78;
  display: grid;
  justify-content: center;
  align-content: flex-end;
  position: relative;
  padding-bottom: 0.5rem;
}

.head {
  position: relative;
  height: 2.5rem;
  transform: rotate(-3deg) translateX(-0.2rem);
}

.head .main {
  width: 3.8rem;
  height: 2rem;
  margin-right: 0.2rem;
  background-color: #efefef;
  border-radius: 5rem 4rem 0 0;
  transform: rotate(-6deg) translateY(10%);
}

.head .main::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  position: absolute;
  border-radius: 40% 50%;
  top: 60%;
  left: 0;
}

.forehead {
  background-color: #efefef;
  width: 3.75rem;
  height: 1.5rem;
  position: absolute;
  right: 0;
  top: 10%;
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
}

.snout {
  width: 2.2rem;
  height: 2rem;
  background-color: #efefef;
  position: absolute;
  border-radius: 0 2px 1.5rem 0;
  top: 1.3rem;
  right: -0.35rem;
  overflow: hidden;
  transform: rotate(-2deg);
}

.snout::after {
  content: "";
  display: block;
  position: absolute;
  background-color: #000;
  width: 0.27rem;
  height: 1rem;
  right: 0;
  transform-origin: top left;
  transform: rotate(-25deg);
}

.eye {
  width: 0.7rem;
  height: 1rem;
  background-color: #000;
  position: absolute;
  top: 1.2rem;
  right: 0.45rem;
  border-radius: 60% 40% 50% 50% / 55% 55% 45% 45%;
  transform: rotate(15deg);
}

.eye::after {
  content: "";
  display: block;
  background-color: #efefef;
  border-radius: 50%;
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  right: 0.16rem;
  top: 0.14rem;
  animation: eye-move 3s 0.25s ease-in-out infinite;
}

.ear-left {
  width: 1.1rem;
  height: 1.1rem;
  background-color: #000;
  position: absolute;
  border-radius: 55% 45%;
  left: -0.3rem;
  top: 0.75rem;
}

.ear-right {
  width: 1rem;
  height: 1rem;
  background-color: #000;
  position: absolute;
  border-radius: 55% 45%;
  left: 1.5rem;
  top: 0.45rem;
}

@keyframes eye-move {
  0% {
    transform: translateX(-0.1rem)
  }

  50% {
    transform: translateX(0.05rem)
  }

  100% {
    transform: translateX(-0.1rem)
  }
}

.body {
  position: relative;
  height: 4rem;
}

.foot-left {
  position: absolute;
  bottom: 0.05rem;
  width: 1rem;
  height: 1.2rem;
  background-color: #000;
  left: -0.25rem;
  border-radius: 0.25rem 0 0 0.75rem;
}

.foot-right {
  position: absolute;
  bottom: 0.05rem;
  left: 60%;
  width: 1.2rem;
  height: 1.5rem;
  transform-origin: left center;
  transform: rotate(5deg);
  box-sizing: border-box;
  border-left: 1.95rem solid #000;
  border-right: 0;
  border-top: 0.6rem solid transparent;
  border-bottom: 0.3rem solid transparent;
}

.foot-right::after {
  content: "";
  display: block;
  position: absolute;
  background-color: #000;
  width: 0.35rem;
  height: 0.85rem;
  right: -0.01rem;
  bottom: 0;
  border-radius: 40% 40% 0.1rem 0;
  transform-origin: right bottom;
  transform: rotate(2deg);
}


.shoulder {
  width: 4.5rem;
  height: 2.2rem;
  background: linear-gradient(108.93deg,
      #000 10.92%,
      #000 94.87%,
      rgba(100, 100, 100, 0) 94.88%);
  position: absolute;
  border-radius: 4rem 4.5rem 0 0;
  transform: rotate(8deg);
  left: -0.1rem;
  display: flex;
  justify-content: center;
}

.shoulder::before {
  content: "";
  display: block;
  width: 1.6rem;
  height: .4rem;
  border-radius: 50%;
  background-color: #000;
  transform: translate(-5%, -9%);
}


.shoulder::after {
  content: "";
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #000;
  position: absolute;
  right: 0.08rem;
  bottom: 0rem;
  border-radius: 0 0 1.2rem 0.5rem;
  transform-origin: top right;
  transform: rotate(-12deg);
}

.back {
  width: 4rem;
  height: 2.9rem;
  background-color: #efefef;
  position: absolute;
  bottom: 0;
  left: -0.25rem;
  border-radius: 1.4rem 50% 50% 1.4rem;
}

.back::before {
  content: "";
  display: block;
  background-color: #efefef;
  width: 100%;
  height: 2rem;
  border-radius: 2.4rem 2.7rem 0 0;
  top: -0.7rem;
  position: absolute;
}

.back::after {
  content: "";
  display: block;
  position: absolute;
  width: 88%;
  height: 60%;
  background-color: #efefef;
  bottom: 0;
  left: 50%;
  border-radius: 58% 42% 55% 45% / 36% 40% 60% 64%;
  transform: translate(-52%, 7%) rotate(-2deg);
}

.tail {
  width: 1rem;
  height: 0.9rem;
  border-radius: 49%;
  background-color: #000;
  position: absolute;
  bottom: -0.2rem;
  left: 0.8rem;
  transform-origin: bottom center;
  animation: wiggle 4s linear infinite;
}

@keyframes wiggle {
  0% {
    transform: translateX(0rem) rotate(0deg);
  }

  3% {
    transform: translateX(-0.01rem) rotate(-2deg);
  }

  7% {
    transform: translateX(0.01rem) rotate(2deg);
  }

  10% {
    transform: translateX(0rem) rotate(0deg);
  }

  100% {
    transform: translateX(0rem);
  }
}

.butterfly {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: move 3s infinite alternate;
  opacity: 0.8;
}

@keyframes move {
  0% {
    transform: translateY(.2rem);
  }

  100% {
    transform: translateY(.6rem);
  }
}

.butterfly .main {
  width: 0.3rem;
  height: 0.6rem;
  margin: 0 0.1rem 0.35rem;
  box-sizing: border-box;
  border-top: 0.6rem solid #000;
  border-left: 0.15rem solid transparent;
  border-bottom: 0;
  border-right: 0.15rem solid transparent;
  opacity: 0.7;
}

.wing {
  width: 0.8rem;
  height: 1.4rem;
  position: relative;

  opacity: 1;
}

.wing::before,
.wing::after {
  content: "";
  display: inline-block;
  box-sizing: border-box;
}

.wing-right {
  transform-origin: left center;
  transform: rotateY(75deg);
  animation: flap 0.35s ease-in-out infinite;
}

.wing-right::before {
  border-left: 0;
  border-right: 0.8rem solid hsla(51, 73%, 64%, 1);
  border-bottom: 0.4rem solid transparent;
  border-top: 0.6rem solid transparent;
}

.wing-right::after {
  position: absolute;
  bottom: 0;
  left: 0;
  border-right: 0;
  border-left: 0.5rem solid hsla(51, 73%, 64%, 1);
  border-bottom: 0.3rem solid transparent;
  border-top: 0.3rem solid transparent;
  transform-origin: top left;
  transform: rotate(-5deg);
}

.wing-left {
  transform-origin: right center;
  transform: rotateY(75deg);
  animation: flap 0.35s ease-in-out infinite;
}

.wing-left::before {
  border-right: 0;
  border-left: 0.8rem solid hsla(51, 73%, 64%, 1);
  border-bottom: 0.4rem solid transparent;
  border-top: 0.6rem solid transparent;
}

.wing-left::after {
  position: absolute;
  bottom: 0;
  right: 0;
  border-left: 0;
  border-right: 0.5rem solid hsla(51, 73%, 64%, 1);
  border-bottom: 0.3rem solid transparent;
  border-top: 0.3rem solid transparent;
  transform-origin: top right;
  transform: rotate(5deg);
}

@keyframes flap {
  0% {
    transform: rotateY(0deg);
  }

  45% {
    transform: rotateY(75deg);
  }

  100% {
    transform: rotateY(0deg);
  }
}

@keyframes box-move {
  0% {
    transform: translateX(-1rem);
  }

  50% {
    transform: translateX(1.4rem);
  }

  100% {
    transform: translateX(-1rem);
  }
}

.butterfly-box {
  animation: box-move 3s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(25deg);
  }

  50% {
    transform: rotate(-25deg);
  }

  100% {
    transform: rotate(25deg);
  }
}

.butterfly-rotate {
  position: absolute;
  width: 2.5rem;
  top: 0.5rem;
  right: 0;
  animation: rotate 3s -2.25s ease-in-out infinite;
}
`

export default string