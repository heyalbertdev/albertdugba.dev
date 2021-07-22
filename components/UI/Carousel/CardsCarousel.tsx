import styled from 'styled-components';
import Link from 'next/link';
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

interface IProps {
  works?: any[];
  posts?: any[];
}

export const CardsCarousel: FunctionComponent<IProps> = ({ works, posts }) => {
  SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
  const router = useRouter();

  return (
    <Wrapper className='container'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect='coverflow'
        autoplay={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides={true}
        style={{ height: '100vh' }}
      >
        {router.pathname === '/works'
          ? works.map((work, idx) => (
              <SwiperSlide key={idx}>
                <Link href='/work/[slug]' as={`/work/${work.slug}`}>
                  <Card>
                    <span>Note Taking platform</span>
                    <div className='card__body'>
                      <img src={work.projectImage} />
                    </div>
                  </Card>
                </Link>
              </SwiperSlide>
            ))
          : posts.map((post, idx) => (
              <SwiperSlide key={idx}>
                <Link href='/post/[slug]' as={`/post/${post.slug}`}>
                  <Card>
                    {/* <span>{post.slug}</span> */}
                    <h1>{post.title}</h1>

                    {/* <img src={post.coverImage.url} /> */}
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  @media (max-width: 701px) {
    margin-top: 50px;
  }
`;

const Card = styled.div`
  height: 300px;
  width: 450px;
  padding: 1rem;
  border-radius: 15px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  color: #29203a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  background: #fff;

  .card__body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    height: 100%;

    img {
      border-radius: 5px;
      width: 100%;
      max-width: 230px;
      margin-top: -30px;

      @media (max-width: 701px) {
        max-width: 150px;
      }
    }
  }

  span {
    background: var(--secondaryColor);
    color: #fff;
    padding: 0.3rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 0.65rem;
  }

  @media (max-width: 701px) {
    height: 250px;
    width: 350px;
    margin-top: 50px;
    h1 {
      font-size: 1rem;
    }
  }

  @media (max-width: 601px) {
    height: 190px;
    width: 270px;
    margin-top: 50px;
    h1 {
      font-size: 1rem;
    }
  }
`;
