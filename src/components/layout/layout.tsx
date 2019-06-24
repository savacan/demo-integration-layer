import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Wrapper = styled.div({
  display: 'flex'
})

const SidebarArea = styled.div({
  height: '100vh',
  background: 'gray'
})

const MainArea = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const FooterArea = styled.div({
  marginTop: 'auto',
  width: '100%',
  background: 'gray'
})

const DefaultLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Wrapper>
      <SidebarArea>
        <div>sidebar area upd: {Date.now()}</div>
        <Link to="/"> to top </Link>
        <Link to="/next"> to next </Link>
      </SidebarArea>
      <MainArea>
        <div> {children} </div>
        <FooterArea>footer area</FooterArea>
      </MainArea>
    </Wrapper>
  )
}

export default DefaultLayout
