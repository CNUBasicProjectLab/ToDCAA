import "./App.css";
import React from "react";
import { Home, Question, Loading, Result } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup className={"transitions-wrapper"}>
      <CSSTransition key={location.key} timeout={2000} classNames="right">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
