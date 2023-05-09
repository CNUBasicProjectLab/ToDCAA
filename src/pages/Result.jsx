import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

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
        <S.Intro>투디의 추천은?</S.Intro>
        <S.Name>{resultData.name}</S.Name>
        <S.ImgBox>
          <S.Img src={resultData.image} alt="이미지" />
        </S.ImgBox>

        <S.Desc>{resultData.desc}</S.Desc>
        <S.SubDesc>
          투디를 생성하시려면, 좌측 상단 뒤로가기 버튼을 눌러주세요.
        </S.SubDesc>

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
const S = {
  Container: styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: white;
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
    background-color: white;
  `,

  Intro: styled.div`
    width: 100%;
    /* background-color: #212629; */
    color: #007aff;
    text-align: center;
    font-size: x-large;
    font-weight: bold;
  `,

  Name: styled.div`
    display: flex;
    width: 100%;
    @media all and (max-width: 767px) {
      width: 100%;
    }
    font-size: 30pt;
    font-weight: bold;
    color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
  `,
  Title: styled.div`
    font-size: 30pt;
    font-weight: 550;
    color: black;
  `,
  Desc: styled.div`
    font-size: 18pt;
    font-weight: 700;
    width: 90%;
    text-align: center;
    color: black;
  `,
  SubDesc: styled.div`
    margin-block: 10px;
    font-size: 15pt;
    font-weight: 550;
    width: 90%;
    text-align: center;
    color: gray;
  `,

  ImgBox: styled.div`
    display: flex;
    width: 20rem;
    height: 18rem;
    /* background-color: lightgrey; */
    /* margin-top: 2rem; */
    /* margin-bottom: 2rem; */
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  `,
  // InnerImg: styled.div`
  //   width: 90%;
  //   height: 90%;
  //   background-color: whitesmoke;
  //   border-radius: 15px;
  // `,
  Img: styled.img`
    width: 80%;
    height: 80%;
    object-fit: fill;
  `,

  BtnGroup: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};

const CustomBtnStyle = {
  width: 220,
  fontSize: "25px",
  color: "white",
  fontWeight: 700,
  marginBlock: 10,
};
export default Result;
