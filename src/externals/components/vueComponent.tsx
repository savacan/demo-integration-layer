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

const VueComponent: React.FC = () => {
  return (
    <Wrapper>
      <LabelDiv>vue component route</LabelDiv>
      <MountPoint
        microId={idetificationKeyFactory('vueComponent', 'common')}
        type="micro"
      />
    </Wrapper>
  )
}

export default VueComponent
