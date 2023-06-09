import React from "react";
import styled from "styled-components";
import StyledBtn from "../components/StyledBtn";
import Think from "../assets/think.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InWrapper>
          <S.Intro>투디가 추천하는</S.Intro>
          <S.Title>내게 어울리는 개발자는?</S.Title>
          <S.LogoImage>
            <S.IImg src={Think} alt="상자" />
          </S.LogoImage>
          <Link to="/question" style={{ textDecoration: "none" }}>
            <StyledBtn msg={"시작하기"} />
          </Link>
        </S.InWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    /* background-color: black; */
    flex-direction: column;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    height: 100vh;
    width: 45%;
    //간단 모바일웹
    @media all and (max-width: 767px) {
      width: 100%;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: lightgrey; */
    border-radius: 15px;
  `,
  InWrapper: styled.div`
    display: flex;
    height: 95%;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    /* background-color: #f2f2f2; */
    border-radius: 15px;
  `,

  Intro: styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    /* color: black; */
  `,
  Title: styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: black;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,
  LogoImage: styled.div`
    width: 12rem;
    height: 12rem;
    background-color: transparent;
    margin-bottom: 2rem;
  `,
  IImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
  `,
};
export default Home;
