import React from "react";
import * as S from "./style";
import SelecorHat from "../img/Selector-hat.png";
import AuioTheme from "../audio/Audio-theme.mp3";
import { Howl } from "howler";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Error from "../pages/Error/index";
import Home from "../pages/Home/Index";
import Gryffindor from "../pages/Gryffindor/index";
import Hufflepuff from "../pages/Hufflepuff/index";
import Ravenclaw from "../pages/Ravenclaw";
import Slytherin from "../pages/Slytherin/index";

export default function index() {
  const sound = new Howl({
    src: [AuioTheme],
    html5: true,
    loop: true,
  });

  return (
    <S.Header id="top">
      <S.Container>
        <S.Box1>
          <Link to='/'> <S.Image src={SelecorHat} alt="Selector Hat from Harry Potter" /> </Link>
          <S.Title>HARRY POTTER</S.Title>
          <div>
            <Link to='/' >Home</Link>
            <Link to='/Gryffindor' >Gryffindor</Link>
            <Link to='/Hufflepuff' >Hufflepuff</Link>
            <Link to='/Ravenclaw' >Ravenclaw</Link>
            <Link to='/Slytherin' >Slytherin</Link>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gryffindor" element={<Gryffindor />} />
            <Route path="/Hufflepuff" element={<Hufflepuff />} />
            <Route path="/Ravenclaw" element={<Ravenclaw />} />
            <Route path="/Slytherin" element={<Slytherin />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </S.Box1>
        <S.Box2>
          <h1>Play music</h1>
          <div>
            <button onClick={() => sound.play()}>Play</button>
            <button onClick={() => sound.pause()}>Pause</button>
          </div>
        </S.Box2>
      </S.Container>
    </S.Header>
  );
}