import BigCirle from 'styles/Icons/big-cirlce';
import CircleOutline from 'styles/Icons/circle-outline';
import Dots from 'styles/Icons/dots';
import Fing from 'styles/Icons/fing';
import I from 'styles/Icons/i';
import Rect from 'styles/Icons/rect';
import Triange from 'styles/Icons/triangle';
import ZigZag from 'styles/Icons/zigzag';
import { Home } from './Section/Home/Home';
import styled from 'styled-components';
import Link from 'next/link';
import Github from 'styles/Icons/github';

const Landing = ({ posts, works }) => {
  return (
    <Wrapper>
      <div className='profile'>
        <img
          src='https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-0/p526x296/199548180_4843198325707173_1589442917293810159_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGOemwec3Sm0Ilhp_BE4-jSkBJ2qBLkopmQEnaoEuSimbwybb5za71pusO-YCw3CjkN7XuTtpgZsBKaueOuO4eC&_nc_ohc=lf6fKinu5m4AX9S899g&tn=y1hXR3x2ilqp3-Fs&_nc_ht=scontent.facc6-1.fna&tp=6&oh=e5f7ad5db1dc9a9e793d4a321cd21fbe&oe=60DEDB9E'
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />

        <div>
          <div className='align__center text__center'>
            <p> Hi</p> <span role='img'>👋</span>I'm Albert Dugba
          </div>
          <br />A self taught engineer from Ghana with 2+ years. As a UI
          engineer, I thrive to work with the right tools to deliver fast,
          performant and accessiblity from the ground up with great user
          experience.
          <p>I like to build design systems</p>
          <p>
            Check out my <Link href='/works'>works</Link>
            and <Link href='/posts'> articles</Link>
          </p>
        </div>
        <div className='flex'>
          <Github height={20} width={20} color='#000' />
          <Github height={20} width={20} color='#000' />
          <Github height={20} width={20} color='#000' />
          <Github height={20} width={20} color='#000' />
        </div>
      </div>

      <div className='circle'>
        <CircleOutline size={80} color='var(--secondaryColor)' />
      </div>

      <div className='triange'>
        <Triange size={300} />
      </div>

      <div className='fing'>
        <Fing size={200} />
      </div>

      <div className='b-circle'>
        <BigCirle size={150} color='purple' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: var(--primaryColor); */
  position: relative;
  overflow: hidden;

  a {
    display: block;
    margin-left: 0.7rem;
  }

  .circle {
    position: absolute;
    top: 0;
    right: 0;
  }

  .triange {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .fing {
    position: absolute;
    top: -60px;
    left: 10%;
    transform: skewY(20px);
  }

  .b-circle {
    position: absolute;
    bottom: -40px;
    right: 0;
  }

  .profile {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 90%;
    min-height: 60%;
    background: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    margin-top: 50px;
    position: relative;
    border-bottom: 5px solid purple;
    &:after {
      content: '';
      position: absolute;
      bottom: 0px;
      height: 20px;
      width: 98%;
      border-bottom: 5px solid var(--secondaryColor);
      border-radius: 25px;
    }

    img {
      position: absolute;
      top: -80px;
    }

    p,
    span {
      display: flex;
      text-align: center;
    }

    @media (min-width: 801px) {
      max-width: 45%;
    }
  }
`;

export default Landing;
