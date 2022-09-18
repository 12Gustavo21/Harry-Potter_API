import React from "react";
import AuioTheme from "../../audio/Audio-theme.mp3";
import { Howl } from "howler";
import SelecorHat from "../../img/Selector-hat.png";
import * as S from "./style";

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
          <S.DIV>
            <S.List>
              <li>
                <S.A href="https://www.wizardingworld.com/discover/films" target={"_blank"}>
                  Movies
                </S.A>
              </li>
              <li>
                <S.A href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world" target={"_blank"}>
                  Houses
                </S.A>
              </li>
              <li>
                <S.A href="https://my.wizardingworld.com/sorting-hat" target={"_blank"}>
                  Know your house
                </S.A>
              </li>
            </S.List>
          </S.DIV>
        </S.Box1>
        <S.Box2>
          <S.PlayTitle>Play music</S.PlayTitle>
          <S.Buttons>
            <S.Button onClick={() => sound.play()}>Play</S.Button>
            <S.Button onClick={() => sound.pause()}>Pause</S.Button>
          </S.Buttons>
        </S.Box2>
      </S.Container>
    </S.Header>
  );
}
