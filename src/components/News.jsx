import React from 'react';
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import news1 from "../assets/images/news1.jpg";
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";
import news4 from "../assets/images/news4.jpg";
import news5 from "../assets/images/news5.jpg";
import news6 from "../assets/images/news6.jpg";
import news7 from "../assets/images/news7.jpg";
import news8 from "../assets/images/news8.jpg";
import news9 from "../assets/images/news9.jpg";
import news10 from "../assets/images/news10.jpg";

const NEWS = [
  {
    image: news1,
    description: "Найвища нагорода Великої Британії!",
  },
  {
    image: news2,
    description: "Пилипа Коновала вшанували званням кавалера Хреста Вікторії. Як українець вступив до лав канадської армії і чому помер в бідності – читайте далі.",
  },
  {
    image: news3,
    description: "Хрест Вікторії. Володарем найвищого ордену Британії, заснованого після Кримської війни, серед 14 іноземців став й українець",
  },
  {
    image: news4,
    description: "Корреспондент: Хрест Вікторії. Володарем найвищого ордену Британії, заснованого після Кримської війни, серед 14 іноземців став й українець",
  },
  {
    image: news5,
    description: "Хрести, цінніші за будь-який орден",
  },
  {
    image: news6,
    description: "ТОП-5 найдорожчих в світі орденів.",
  },
  {
    image: news7,
    description: "Президент вручив відзнаки «ХРЕСТ БОЙОВИХ ЗАСЛУГ», серед нагороджених  старокостянтинівці",
  },
  {
    image: news8,
    description: "У Кривому Розі встановили пам'ятний хрест «Воїнам, що віддали своє життя за  Україну»",
  },
  {
    image: news9,
    description: "ТОП-5 найдорожчих в світі орденів",
  },
  {
    image: news10,
    description: "Єдиний українець з Хрестом Вікторії - На скрижалях",
  },
  
]

const StyledNews = styled.span`
  padding: 100px 0;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const StyledItem = styled.div`
  position: relative;

  height: 300px;
  aspect-ratio: 4/2.5;
  /* width: 80%; */
  /* aspect-ratio: 2/4; */

  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: all .3s;

  &:hover {
    transform: scale(1.2);
  }
`

const Description = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0;

  padding: 20px;
  margin: 0;

  text-shadow: 2px 2px 2px black;
  background-color: #2c2c2cc0;
`
const Item = ({image, description}) => {
  return <StyledItem image={image}>
      <Description>
        {description}
      </Description>
  </StyledItem>
}
function News() {
  return (
    <StyledNews>
      {NEWS.map(news => <Item key={news.description} {...news} />)}
    </StyledNews>
  );
}

export default News;