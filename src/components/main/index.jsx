import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";

export default function Index() {
  let Api = "http://hp-api.herokuapp.com/api/characters";

  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => {
      setcharacters(response.data.slice(0, 25));
    });
  }, [Api]);

  return (
    <S.Main>
      <S.BoxTitle>
        <h1>The famous ones of Hogwarts</h1>
      </S.BoxTitle>
      <S.Container>
        {characters.map((item) => (
          <S.Box>
            <S.Top>
              <S.Title>{item.name}</S.Title>
              <S.Image src={item.image} alt="personagem" />
            </S.Top>
            <div>
              <h5>Actor name: {item.actor}</h5>
              <h5>Birthday: {item.dateOfBirth}</h5>
              <h5>House: {item.house}</h5>
              <h5>Patronus: {item.patronus}</h5>
            </div>
          </S.Box>
        ))}
      </S.Container>
    </S.Main>
  );
}
