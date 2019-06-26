import * as React from 'react'
import styled from '@emotion/styled'
import TempSideBar from '../container/sidebar'

const Wrapper = styled.div({
  display: 'flex'
})

const SidebarArea = styled.div({
  height: '100vh',
  borderRight: 'solid 3px gray'
})

const MainArea = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const MountArea = styled.div({
  marginTop: '100px'
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
        <TempSideBar />
      </SidebarArea>
      <MainArea>
        <MountArea>{children}</MountArea>
        <FooterArea>footer area</FooterArea>
      </MainArea>
    </Wrapper>
  )
}

export default DefaultLayout
