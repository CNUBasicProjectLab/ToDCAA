import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

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
    justify-content: center;
    background-color: white;
  `,
  Contents: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
    width: 100%;
  `,
  Title: styled.div`
    width: 100%;
    padding-inline: 10%;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: black;
    margin-top: 2rem;
    margin-bottom: 5rem;
  `,
};

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const navigate = useNavigate();

  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "NS", score: 0 },
    { id: "FT", score: 0 },
    // { id: "PJ", score: 0 },
  ]);

  const handleClickAnswer = (add, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + add } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const type = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 0 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/loading",
        search: `?${createSearchParams({
          type: type,
        })}`,
      });
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <ProgressBar
          now={(questionNo / QuestionData.length) * 100}
          style={{
            width: "80%",
            marginTop: 20,
          }}
        />
        <S.Contents>
          <S.Title>{QuestionData[questionNo].title}</S.Title>
          <ButtonGroup>
            <Button
              variant="primary"
              onClick={() =>
                handleClickAnswer(1, QuestionData[questionNo].type)
              }
              style={{
                width: "40%",
                minHeight: "200px",
                fontSize: "15pt",
                fontWeight: 700,
              }}
            >
              {QuestionData[questionNo].answera}
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                handleClickAnswer(-1, QuestionData[questionNo].type)
              }
              style={{
                width: "40%",
                marginLeft: "20px",
                minHeight: "200px",
                fontSize: "15pt",
                fontWeight: 700,
              }}
            >
              {QuestionData[questionNo].answerb}
            </Button>
          </ButtonGroup>
        </S.Contents>
      </S.Wrapper>
    </S.Container>
  );
};

export default Question;
