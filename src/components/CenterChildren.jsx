import styled from "styled-components"


const StyledCenterChildren = styled.div`
    display: flex;
    justify-content: center;
`


function CenterChildren({children, gap}) {
  return (
    <StyledCenterChildren style={{gap: gap}}>
        {children}
    </StyledCenterChildren>
  )
}
export default CenterChildren