import React from "react";
import * as S from "./style";
import { ImArrowUp } from "react-icons/im";
import Owl from "../../img/Owl.png";

export default function index() {
  return (
    <S.Footer>
      <S.Container>
        <S.Box>
          <S.A href="#top">
            <ImArrowUp size="3em" />
          </S.A>
          <S.A href="#top">
            <S.Farewell>See you soon</S.Farewell>
          </S.A>
        </S.Box>
        <figure>
          <S.IMG src={Owl} alt="Harry Potter movie owl" />
        </figure>
      </S.Container>
    </S.Footer>
  );
}
