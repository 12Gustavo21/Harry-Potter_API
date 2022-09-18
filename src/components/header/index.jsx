import React from "react";
import * as S from "./style";
import SelecorHat from "../img/Selector-hat.png";
import AuioTheme from "../audio/Audio-theme.mp3";
import { Howl } from "howler";

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
          <S.Image src={SelecorHat} alt="Selector Hat from Harry Potter" />
          <S.Title>HARRY POTTER</S.Title>
          <S.List>
            <li>
              <S.A
                href="https://www.wizardingworld.com/discover/films"
                target={"_blank"}
              >
                Movies
              </S.A>
            </li>
            <li>
              <S.A
                href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world"
                target={"_blank"}
              >
                Houses
              </S.A>
            </li>
            <li>
              <S.A
                href="https://my.wizardingworld.com/sorting-hat"
                target={"_blank"}
              >
                Know your house
              </S.A>
            </li>
          </S.List>
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
