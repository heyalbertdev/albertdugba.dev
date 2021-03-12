import styled from 'styled-components';
import Github from '../../styles/Icons/github';

const Container = styled.div`
  .temp {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url(temp.gif) no-repeat 50% 50%;
    background-size: cover;
    animation: fadeOut 5s linear forwards;
    opacity: 1;
  }

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    41% {
      opacity: 1;
    }
    91% {
      opacity: 1;
    }
    92% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .first-block {
    position: absolute;
    width: 0%;
    height: 100vh;
    background: #272727;
    animation: go-left 4s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    left: 0;
  }

  @keyframes go-left {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0;
    }
  }

  .second-block {
    position: absolute;
    width: 0%;
    height: 100vh;
    background: #b08d74;
    animation: go-left 3.2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    animation-delay: 3s;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .loader ul li {
    display: inline-block;
    color: #fff;
    font-family: Poppins;
    font-weight: bolder;
    margin: 0 8px;
    font-size: 24px;
    text-transform: uppercase;
    animation: loadNow 4s ease-in-out forwards;
    opacity: 0;
    transform: translateX(0px);
  }

  @keyframes loadNow {
    0% {
      opacity: 0;
      transform: translateX(80px);
    }
    20% {
      opacity: 1;
      transform: translateX(0px);
    }
    80% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-80px);
    }
  }

  .loader ul li:nth-child(1) {
    animation-delay: 1.1s;
  }

  .loader ul li:nth-child(2) {
    animation-delay: 1.2s;
  }

  .loader ul li:nth-child(3) {
    animation-delay: 1.3s;
  }

  .loader ul li:nth-child(4) {
    animation-delay: 1.4s;
  }

  .loader ul li:nth-child(5) {
    animation-delay: 1.5s;
  }

  .loader ul li:nth-child(6) {
    animation-delay: 1.6s;
  }

  .loader ul li:nth-child(7) {
    animation-delay: 1.6s;
  }

  .third-block {
    position: absolute;
    width: 0%;
    height: 100vh;
    background: #f0f0f0;
    animation: expandNow 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 6.2s;
  }

  @keyframes expandNow {
    0% {
      width: 0%;
    }

    100% {
      width: 64%;
    }
  }

  .menu {
    position: absolute;
    right: 0;
    margin: 2em;
    font-size: 18px;
  }

  .logo {
    position: absolute;
    left: 0;
    margin: 2em;
    font-family: Poppins;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 18px;
  }

  .content {
    position: absolute;
    width: 440px;
    top: 46%;
    left: 28%;
    transform: translate(-50%, -50%);
    text-align: left;
  }

  .heading {
    font-family: Poppins;
    font-weight: bolder;
    font-size: 42px;
  }

  .desc {
    font-family: Poppins;
    font-weight: lighter;
  }

  .desc p {
    margin-top: 0px;
  }

  button {
    font-family: Poppins;
    border-radius: none;
    padding: 16px 40px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: #b08d74;
    color: #fff;
  }

  .img img {
    width: 440px;
  }

  .img {
    position: fixed;
    z-index: 0;
    top: 50%;
    right: 14%;
    transform: translateY(-50%);
  }

  img {
    opacity: 0;
    animation: appearimg 0.1s linear forwards;
    animation-delay: 6.4s;
  }

  .img:after {
    content: '';
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #272727;
    position: absolute;
    animation: rev-img 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 6s;
  }

  @keyframes rev-img {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      width: 440px;
      left: 0;
    }
    100% {
      left: 440px;
      width: 0;
    }
  }

  @keyframes appearimg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .media ul {
    list-style: none;
    position: fixed;
    right: 24px;
    bottom: 0;
    padding: 10px;
  }

  .media ul li {
    font-size: 18px;
    margin: 24px 0;
  }

  .watch {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 2em;
  }
`;

const MainWrapper = () => {
  return (
    <Container>
      <div className="temp"></div>
      <div className="first-block"></div>
      <div className="second-block"></div>
      <div className="loader"></div>
      <div className="third-block"></div>
      <div className="menu">Icon</div>
      <div className="logo">
        <span>Explore</span>
      </div>
      <div className="content">
        <div className="heading">
          <span>Faroe Islands</span>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            omnis nostrum eum, ipsa quia voluptatem. Quia ut, iste ad obcaecati
            doloremque voluptas porro at maiores eaque?
          </p>
        </div>
        <div className="link">
          <button type="button">VISIT NOW</button>
        </div>
      </div>
      <div className="img">
        <img src="hero.jpg" alt="" />
      </div>
      <div className="media">
        <ul>
          <li>Icon</li>
          <li>Icon</li>
          <li>Icon</li>
        </ul>
      </div>
    </Container>
  );
};

export default MainWrapper;
