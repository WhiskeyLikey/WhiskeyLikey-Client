import React from 'react';
import { styled } from 'styled-components';
import { Logo } from './Start';
import logo from './assets/logo.svg';
import prevBtn from './assets/prevBtn.svg';
import mag1 from './assets/mag1.png';
import high1 from './assets/high1.png';
import high2 from './assets/high2.png';
import high3 from './assets/high3.png';
import high4 from './assets/high4.png';
import high5 from './assets/high5.png';
import high6 from './assets/high6.png';
import likelion from './assets/likelion.svg';
import { Header, Wrapper } from './Mag2';

import { useNavigate } from 'react-router-dom';
const Mag1 = () => {
  const navigator = useNavigate();
  const goPrev = () => {
    navigator(-1); // 바로 이전 페이지로 이동
  };

  return (
    <>
      <Wrapper>
        <TopBar>
          <img src={prevBtn} onClick={goPrev} className="prevBtn" />
          <Logo src={logo}></Logo>
        </TopBar>
        <h2>🥃 하이볼, 나도 집에서 마셔보자!</h2>
        <Header>
          <img src={mag1}></img>
          <p>
            칵테일의 종류 중 하나이다. 위스키나 브랜디에 탄산수나 다른 음료를
            넣고 얼음을 띄워 만드는 것이
            <br /> 일반적이다. 일본에서 맥주, 사케 다음으로 술집에서 하이볼이
            없는 경우는 거의 존재하지 않는다고 될 정도로 대중적이며 우리나라도
            코로나를 기점으로 하이볼의 인기가 매우 높아졌다.
            <br />
            <br />
            일본에서는 보통 단맛이 없는 탄산수를 넣는 것이 대중적이나
            우리나라에서는 보통 토닉을 많이
            <br /> 넣는다. (그래서 우리나라 사람들 중에서는 일본 본토의 하이볼이
            맛없다고 하는 경우도 있다고..)
            <br />
            우리나라에서 하이볼은 많이 단 술로 많이 알려져 있는 듯 하다.
            <br />
            <br />
            언제 어디서나 간단히 만들어 먹을 수 있는 하이볼, 방법은 다음과 같다.
          </p>
        </Header>
        <Section>
          <TwoImgContainer className="imgContainer">
            <img src={high1}></img>
            <img src={high2}></img>
          </TwoImgContainer>
          <p>
            <strong>STEP 1</strong>
            <br />
            <br />
            하이볼 잔(탄산의 느낌을 더욱더 느끼고 싶다면 차갑게 해주는 것이
            좋다.)
            <br />에 얼음을 채우고, 그 위에 위스키를 붓는다. 표준적인 양은 30 ~
            45㎖ 이다. <br />
            소주잔이 대략 50㎖ 이니 소주잔의 반보다 조금더 넣으면된다.
          </p>
        </Section>
        <Section>
          <TwoImgContainer className="imgContainer">
            <img src={high3}></img>
            <img src={high4}></img>
          </TwoImgContainer>
          <p>
            <strong>STEP 2</strong>
            <br />
            <br />
            탄산수나 토닉워터, 사이다를 붓고 한 두 번만 살짝 저어준다.
            <br />
            통상의 비율은 위스키 1 : 탄산수 4 정도
          </p>
        </Section>
        <Section>
          <OneImgContainer className="imgContainer">
            <img src={high5}></img>
          </OneImgContainer>
          <p>
            <strong>STEP 3</strong>
            <br />
            <br />
            취향에 따라, 또는 위스키 종류에 따라 레몬 슬라이드 한 조각이나
            민트잎 등을 넣어주면 완성
          </p>
        </Section>
        <Header>
          <img src={high6}></img>
          <p>
            그런데 보통 소맥을 먹는 비율도 사람마다 다르듯이, 처음엔 비율을 잘
            맞춰먹다가
            <br /> 취향에 따라 위스키를 더넣거나 덜넣거나 하며 본인에게 가장
            잘맞는 맛의
            <br /> 하이볼을 찾을 수 있다. 이것이 직접 만드는 하이볼의 묘미가
            묘미가 아닐까 싶다.
            <br />
            <br />
            위스키를 즐길 수 있는 가장 라이트한 방법인 하이볼, 추천받은 위스키로
            직접 해먹어보는것은 어떨까?
          </p>
        </Header>
        <BottomLogo src={likelion} style={{ marginBottom: '1rem' }} />
      </Wrapper>
    </>
  );
};

export default Mag1;
export { Wrapper, Section, TwoImgContainer, BottomLogo };

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  height: fit-content;
  img {
    margin-right: 200px;
    border-radius: 20px;
  }
`;

const Section = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .imgContainer {
    margin-top: 12px;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    text-align: center;
    word-break: keep-all;
  }

  @media screen and (max-width: 500px) {
    margin-top: 40px;
    p {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
  }
`;

const TwoImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  img {
    width: 48%;
    border-radius: 20px;
  }
  @media all and (min-width: 501px) {
    width: 640px;
  }

  // @media screen and (max-width: 500) {
  //   width: 300px !important;
  //   img {
  //     width: 40%; !important;
  //   }
  // }
`;
// const TwoImgContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   width: 640px;
//   justify-content: space-between;
//   img {
//     width: 300px;
//     border-radius: 20px;
//   }

//   @media screen and (max-width: 500) {
//     width: 300px !important;
//     img {
//       width: 140px !important;
//     }
//   }
// `;

const OneImgContainer = styled.div`
  img {
    width: 300px;
    border-radius: 20px;
  }
`;

const BottomLogo = styled.img`
  padding-top: 72px;
  width: 176px;
  height: 18px;
`;
