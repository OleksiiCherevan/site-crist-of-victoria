import styled from "styled-components"
import VICTORIA_CROSS from "../assets/images/kisspng-victoria-cross.png"
import Button from "./Button"
import CenterChildren from "./CenterChildren"

const StyledMain = styled.div`
    min-height: calc(100vh - 70px);
`

const MianImageWrapper = styled.div`
    padding-top: 50px;
    /* height   : 40vh ; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const MianImage = styled.img`
    width: 20%;
`

const Introducing = styled.div`
    margin-bottom: 50px;
`

const Title = styled.h1`
    
`

const Description = styled.span`
    text-align: center;
`

function Main() {
  return (
    <StyledMain>
        <MianImageWrapper>
            <MianImage src={VICTORIA_CROSS}/>   
            <MianImage src={VICTORIA_CROSS}/>   
            <MianImage src={VICTORIA_CROSS}/>        
        </MianImageWrapper>
        <Introducing>
            <Title>Хрест Вікторії</Title>
            <Description>Є найвищою та найпочеснішою нагородою за мужність перед лицем ворога,<br/> котрою можуть бути нагороджені військовики з країн, підлеглих Британської корони,<br/> будь-якого звання в будь-яких родах збройних сил, та цивільні особи під військовим командуванням.</Description>
        </Introducing>
        <CenterChildren gap="10px">
            <Button >Інформація</Button>
            <Button >Зображення</Button>
            <Button >Події</Button>
        </CenterChildren>
    </StyledMain>
  )
}
export default Main