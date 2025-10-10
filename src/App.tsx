import styled from 'styled-components'
import './App.css'
import { StyledBtn } from './components/Btn'
import { myTheme } from './styles/Theme.styled'
import myImage from './assets/ho.jpg'


function App() {

  return (
    <div>
      <Box>
        <BoxDiv>
          <MyImg src={myImage}/>
        </BoxDiv>
        <BoxDiv>
          <Hone>Headline</Hone>
        </BoxDiv>
        <BoxDiv>
          <Par>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Par>
        </BoxDiv>
        <BoxDiv>
          <StyledBtn color={myTheme.colors.primary} primary>See more</StyledBtn>
          <StyledBtn color={myTheme.colors.primary} outlined>Save</StyledBtn>
        </BoxDiv>
      </Box>
      
    </div>
  )
}

export default App

const Box = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  justify-content: baseline;
  align-items: start;
  flex-direction: column;
  column-gap: normal;
  background-color: #fff;
  border-radius: 15px;
`

const BoxDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: baseline;
  align-items: start;
`

const Par =styled.p`
  font-size: 12px;
  color: #ABB3BA;
  padding-left: 10px;
`

const Hone = styled.h1`
  text-align: start;
  font-size: 16px;
  padding-left: 10px;
`

const MyImg = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
`