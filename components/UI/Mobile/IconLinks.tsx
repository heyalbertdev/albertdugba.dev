import { SocialLinks } from 'components/containers/Social';
import Dev from 'styles/Icons/dev';
import Github from 'styles/Icons/github';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Medium from 'styles/Icons/medium';

export const IconLinks = () => {
  return (
    <>
      <Wrapper
        className='container'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: '49px' }}
        exit={{ opacity: 0 }}
      >
        <SocialLinks
          link='https://github.com/albertdugba'
          component={<Github size={25} color='#c9bad6' />}
        />

        <SocialLinks
          className='ml-1'
          link='https://www.linkedin.com/in/albertdugba/'
          component={<LinkedIn size={23} color='#c9bad6' />}
        />
        <SocialLinks
          className='ml-1'
          link='https://twitter.com/Albert_Dugba'
          component={<Twitter size={25} color='#c9bad6' />}
        />
        <SocialLinks
          className='ml-1'
          link='https://medium.com/@albert.dugba'
          component={<Medium size={29} color='#c9bad6' />}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  display: none;
  z-index: 30000000;

  svg {
    margin-top: 0.3rem;
  }

  @media (max-width: 701px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 200;
    background: var(--secondaryColor);
    border-radius: 8px;
    padding: 0.45rem;
    height: 49px;
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    left: 0;

    &:before {
      content: '';
      position: absolute;
      top: -5px;
      width: 20px;
      height: 20px;
      background: var(--secondaryColor);
      transform: rotate(45deg);
    }
  }
`;
