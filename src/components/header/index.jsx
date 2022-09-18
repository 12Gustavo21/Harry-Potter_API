import React from "react";
import * as S from "./style";
import SelecorHat from "../img/Selector-hat.png";
import AuioTheme from "../audio/Audio-theme.mp3";
import { Howl } from "howler";

export default function index() {
  const sound = new Howl({
    src: [AuioTheme],
    html5: true,
    loop: true
  });

  return (
    <S.Header>
      <S.Container>
        <S.Box1>
          <S.Image src={SelecorHat} alt="Selector Hat from Harry Potter" />
          <h1>HARRY POTTER</h1>
          <ul>
            <li>
              <a
                href="https://www.wizardingworld.com/discover/films"
                target={"_blank"}
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world"
                target={"_blank"}
              >
                Houses
              </a>
            </li>
            <li>
              <a
                href="https://my.wizardingworld.com/sorting-hat"
                target={"_blank"}
              >
                Know your house
              </a>
            </li>
          </ul>
        </S.Box1>
        <S.Box2>
          <div>
            <h1>Play music</h1>
            <button onClick={() => sound.play()}>Play</button>
            <button onClick={() => sound.pause()}>Pause</button>
          </div>
        </S.Box2>
      </S.Container>
    </S.Header>
  );
}
