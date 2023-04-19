import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const CustomBtnStyle = {
  width: 220,
  fontSize: "25px",
  color: "white",
  fontWeight: 700,
  marginBlock: 10,
};

const S = {
  Container: styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: black;
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
    /* 위로정렬되는거 */
    /* justify-content: center; */
    background-color: black;
  `,
  Header: styled.div`
    display: flex;
    width: 100%;
    @media all and (max-width: 767px) {
      width: 100%;
    }
    font-size: 30pt;
    font-weight: 550;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
  `,
  Title: styled.div`
    font-size: 30pt;
    font-weight: 550;
    color: white;
  `,
  Desc: styled.div`
    font-size: 18pt;
    font-weight: 550;
    width: 90%;
    text-align: center;
    color: white;
  `,
  SubDesc: styled.div`
    margin-top: 10px;
    font-size: 15pt;
    font-weight: 550;
    width: 90%;
    text-align: center;
    color: gray;
  `,

  LogoImage: styled.div`
    display: flex;
    width: 20rem;
    height: 20rem;
    background-color: lightgrey;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  `,
  InnerImg: styled.div`
    width: 90%;
    height: 90%;
    background-color: whitesmoke;
    border-radius: 15px;
  `,
  IImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
  `,

  BtnGroup: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((s) => s.best === type);
    setResultData(result);
  }, [type]);
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>결과</S.Header>
        {/* <S.LogoImage>
          <S.InnerImg>
            <p>테스트</p>
            <S.IImg src={resultData.image} alt="옴팡사진" />
          </S.InnerImg>
        </S.LogoImage> */}
        <S.Desc>{resultData.name}</S.Desc>
        <S.Desc>{resultData.desc}</S.Desc>

        {/* <S.SubDesc>제조사 : {resultData.make}</S.SubDesc> */}

        <S.BtnGroup>
          <Button
            onClick={() => {
              navigate("/");
              window.location.reload("/");
            }}
            variant="danger"
            style={CustomBtnStyle}
          >
            테스트 다시하기
          </Button>
        </S.BtnGroup>
      </S.Wrapper>
    </S.Container>
  );
};

export default Result;
