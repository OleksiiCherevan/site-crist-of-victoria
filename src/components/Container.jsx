import styled from "styled-components"


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const StyledContainer = styled.div`
    max-width: 1070px;
    padding: 0 30px;
`



function Container({children}) {
  return (
    <Wrapper>
        <StyledContainer>
            {children}
        </StyledContainer>
    </Wrapper>
  )
}
export default Container