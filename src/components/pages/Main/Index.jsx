import React, { useEffect, useState } from "react";
import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { Api } from "../../services/Api";
import * as S from "./style";

export default function Index() {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    Api.get().then((response) => {
      setcharacters(response.data.slice(0, 25));
    });
  }, []);

  return (
    <S.Main>
      <S.BoxTitle>
        <h1>The famous ones of Hogwarts</h1>
      </S.BoxTitle>
      <S.Container>
        {characters.map((item, index) => (
          <S.Box key={index}>
            <S.Top>
              <S.Title>{item.name}</S.Title>
              <S.Image src={item.image} alt={item.name} />
            </S.Top>
            <S.Description>
              <S.information>
                <BsFillPersonFill size="1em" />
                <h5>Actor name: {item.actor}</h5>
              </S.information>
              <S.information>
                <FaBirthdayCake size="1em" />{" "}
                <h5>Birthday: {item.dateOfBirth}</h5>
              </S.information>
              <S.information>
                <BsFillHouseDoorFill size="1em" />
                <h5>House: {item.house}</h5>
              </S.information>
              <S.information>
                <ImMagicWand size="1em" />
                <h5>Patronus: {item.patronus ? item.patronus : "Don't have patronus"}</h5>
              </S.information>
            </S.Description>
          </S.Box>
        ))}
      </S.Container>
    </S.Main>
  );
}
