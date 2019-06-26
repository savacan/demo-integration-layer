import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Wrapper = styled.div({
  position: 'sticky',
  display: 'flex',
  flexDirection: 'column'
})

const LinkLayout = styled.div({
  margin: '40px 40px'
})

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit'
})

const NaviLabel = styled.div({
  width: '120px',
  height: '50px',
  background: '#d3d3d3',
  display: 'table-cell',
  verticalAlign: 'middle'
})

const NaviText = styled.p<{ size?: string; color?: string }>(
  ({ size = '10px', color = 'inherit' }) => {
    return {
      fontSize: size,
      color,
      textAlign: 'center'
    }
  }
)

const routes = [
  {
    text: 'to top',
    path: '/'
  },
  {
    text: 'to react component',
    path: '/react'
  },
  {
    text: 'to vue component',
    path: '/vue'
  }
]

const TempSideBar: React.FC = () => {
  return (
    <Wrapper>
      <div>sidebar area</div>
      {routes.map((e, i) => (
        <LinkLayout key={e.path}>
          <StyledLink to={e.path}>
            <NaviLabel>
              <NaviText size="16px">{e.text}</NaviText>
            </NaviLabel>
          </StyledLink>
        </LinkLayout>
      ))}
    </Wrapper>
  )
}

export default TempSideBar
