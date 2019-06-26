import * as React from 'react'
import styled from '@emotion/styled'
import MountPoint from '../../components/utility/mountPoint'
import idetificationKeyFactory from '../management/idetificationKeyFactory'

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
})

const LabelDiv = styled.div({
  fontSize: '32px',
  marginBottom: '100px'
})

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <LabelDiv>react component route</LabelDiv>
      <MountPoint
        microId={idetificationKeyFactory('sidebar', 'common')}
        type="micro"
      />
    </Wrapper>
  )
}

export default SideBar
