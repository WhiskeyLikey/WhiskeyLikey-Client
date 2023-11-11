import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg';
import likelion from './assets/likelion.svg';
import prevBtn from './assets/prevBtn.svg';
import pin from './assets/pin.svg';
import fivealls from './assets/fivealls.png';
import bar1 from './assets/bar1.png';
import bar2 from './assets/bar2.png';
import bar3 from './assets/bar3.png';
import bar4 from './assets/bar4.png';
import bar5 from './assets/bar5.png';
import bar6 from './assets/bar6.png';
import bar7 from './assets/bar7.png';
import bar8 from './assets/bar8.png';
import bar9 from './assets/bar9.png';
import bar10 from './assets/bar10.png';
import bar11 from './assets/bar11.png';
import bar12 from './assets/bar12.png';
import { Wrapper, Section } from './Mag1';

function Mag3() {
  const navigator = useNavigate();
  const goPrev = () => {
    navigator(-1); // 바로 이전 페이지로 이동
  };

  return (
    <Wrapper>
      <TopBar>
        <img src={prevBtn} onClick={goPrev} className="prevBtn" />
        <Logo src={logo}></Logo>
      </TopBar>
      <h2>🌃 서울 위스키 바 추천</h2>
      <Contents>
        <Intro>
          <h3>1. 홍대 더파이브 올스</h3>
          <img src={fivealls}></img>
          <Link
            to="https://map.naver.com/p/entry/place/35408316?lng=126.92849220000001&lat=37.5554860009119&placePath=%2Fhome&entry=plt"
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <MapDiv>
              <div className="pinContainer">
                <img src={pin}></img>
              </div>
              <div className="description">
                <p>더파이브 올스</p>
                <p>서울특별시 마포구 와우산로 29길 26-5</p>
              </div>
            </MapDiv>
          </Link>
        </Intro>
        <Section>
          <TwoImgContainer>
            <img src={bar1}></img>
            <img src={bar2}></img>
          </TwoImgContainer>
          <p>
            귀여운 고양이들이 테이블 위를 걸어 다니는 가성비 칵테일바다.🐈
            <br />
            안주와 술이 모두 전체적으로 저렴하고 가벼운 편이라 2차로
            안성맞춤이다.
            <br />
            위스키를 단독으로도, 칵테일로도 모두 즐기고 싶다면 이곳을 추천한다.
          </p>
        </Section>
        <Section>
          <TwoImgContainer>
            <img src={bar3}></img>
            <img src={bar4}></img>
          </TwoImgContainer>
          <p>
            종류가 매우 많은 편이어서 술을 고르는 데에만 시간을 엄청나게 쓰게
            되고는 한다.
            <br />
            &lt;위스키라이키&gt;에서 추천받은 위스키를 온 더 락으로도 마셔보고,
            락으로도 마셔보고,
            <br /> 해당 위스키 기반의 칵테일이나 하이볼도 맛보기를 추천한다.
            <br />
            추천한다. 사람이 많은 평일 늦은 저녁이나 주말엔 꼭 먼저 전화로
            자리를 확인하고 방문하는 것이 좋다.
          </p>
        </Section>
      </Contents>
      <Contents>
        <Intro>
          <h3>2. 서울역 세올</h3>
          <img src={bar5}></img>
          <Link
            to="https://map.naver.com/p/entry/place/1843424565?placePath=%2Fhome&c=15.00,0,0,0,dh"
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <MapDiv>
              <div className="pinContainer">
                <img src={pin}></img>
              </div>
              <div className="description">
                <p>세올</p>
                <p>서울특별시 용산구 청파로 89길 43</p>
              </div>
            </MapDiv>
          </Link>
        </Intro>
        <Section>
          <OneImgContainer>
            <img src={bar6}></img>
          </OneImgContainer>
          <p>
            서울역에서 5분 정도만 걸으면 갈 수 있는 세올. 접근성이 매우 좋다.
            <br />
            싱글 몰트, 버번, 블렌디드, 하이랜드 등 위스키 라인업이 매우 폭넓다는
            장점이 있다.
            <br /> 심지어 오픈런 해야만 구매할 수 있는 위스키가 준비돼 있다.
            (사장님 배우신 분 😎)
          </p>
        </Section>
        <Section>
          <OneImgContainer>
            <img src={bar7}></img>
          </OneImgContainer>
          <p>
            입문자에게 추천하는 가장 큰 이유는 네 가지의 위스키 테이스팅 코스가
            있기 때문이다.
            <br /> &lt;위스키라이키&gt;에서 추천받은 위스키를 포함해서 여러 가지
            여러 가지 위스키를 맛보며
            <br /> 취향을 찾아보는 이색 데이트 코스는 어떨까?
          </p>
        </Section>
        <Section>
          <OneImgContainer>
            <img src={bar8}></img>
          </OneImgContainer>
          <p>
            인테리어도 고급 지고 예뻐서 누구나 호불호 없이 좋아할 만 하다.
            <br />
            미리 네이버 예약도 가능하니 예약하고 여유 있게 방문해 보자.
          </p>
        </Section>
      </Contents>
      <Contents>
        <Intro>
          <h3>3. 종로 각 서울</h3>
          <OneImgContainer>
            <img src={bar9}></img>
          </OneImgContainer>
          <Link
            to="https://map.naver.com/p/entry/place/1823444442?placePath=%2Fhome"
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <MapDiv>
              <div className="pinContainer">
                <img src={pin}></img>
              </div>
              <div className="description">
                <p>각 서울</p>
                <p>서울특별시 종로구 삼일대로 15길 1</p>
              </div>
            </MapDiv>
          </Link>
        </Intro>
        <Section>
          <OneImgContainer>
            <img src={bar10} className="verImg"></img>
          </OneImgContainer>
          <p>
            이곳을 추천하는 이유는 바로 ‘추천 칵테일/위스키’이다.
            <br /> 바텐더에게 본인의 취향, 또는 오늘따라 땡기는 분위기 맛 향을
            말씀드리면 뚝딱 만들어주신다.
          </p>
        </Section>
        <Section>
          <OneImgContainer>
            <img src={bar11} className="verImg"></img>
          </OneImgContainer>
          <p>
            보통 입문자들에게는 추천해달라는 한마디가 어렵게 느껴지곤 한다.
            <br />
            하지만 이곳에서는 부담 없이 어떤 것이든 요청할 수 있는 분위기가
            형성돼있어 좋다.
          </p>
        </Section>
        <Section>
          <OneImgContainer>
            <img src={bar12}></img>
          </OneImgContainer>
          <p>
            &lt;위스키라이키&gt;에서 추천받은 위스키 한 잔,
            <br />
            비슷한 계열의 위스키를 추천받아 또 한 잔 하다 보면 어느새 위른이가
            된 나를 발견할 수 있을 것이다.✌️
            <br /> 이곳 또한 네이버 예약을 받고 있으니 미리 예약해 센스쟁이가
            되어보자.
          </p>
        </Section>
      </Contents>
      <BottomLogo src={likelion} style={{ marginBottom: '1rem' }} />
    </Wrapper>
  );
}

export default Mag3;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  height: fit-content;
  img {
    margin-right: 200px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  h3 {
    margin-bottom: 32px;
  }
  img {
    padding-bottom: 12px;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 300px;
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 600px;
  }
`;

const TwoImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  // border: 1px solid red;

  img {
    width: 48%;
    border-radius: 20px;
  }

  @media all and (min-width: 501px) {
    width: 640px;
  }
`;

const OneImgContainer = styled.div`
  img {
    width: 600px;
    border-radius: 20px;
  }
  .verImg {
    width: 300px;
  }
`;

const Logo = styled.img`
  width: 160px;
`;

const MapDiv = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 600px !important;
  height: 4rem;
  background-color: white;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    transition: transform 0.15s linear;
    transform-origin: 50% 50%;
    transform: scale(1.03);
    box-shadow:
      0 4px 4px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1);
  }
  .pinContainer {
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      height: 36px;
      justify-content: center;
      padding-top: 10px;
    }
  }
  .description {
    padding: 1rem;
    box-sizing: border-box;
    text-align: left;
    p:nth-of-type(1) {
      font-size: 0.8rem;
      font-weight: 500;
      line-height: 2;
      margin: 0;
    }
    p:nth-of-type(2) {
      font-size: 0.69rem;
      color: #bbb;
      line-height: 1.5;
      margin: 0;
    }
  }

  @media all and (min-width: 431px) {
    width: 56.25rem;
    height: 6rem;

    .description {
      p:nth-of-type(1) {
        font-size: 1.2rem;
      }
      p:nth-of-type(2) {
        font-size: 0.9rem;
      }
    }
  }
`;

const BottomLogo = styled.img`
  margin-top: 48px;
  width: 176px;
  height: 18px;
`;
