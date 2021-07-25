import styled, {keyframes} from 'styled-components'

export const Wrapper = styled.header`
  background-color: var(--primary-bg);
  color: var(--primary-color);
`

export const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: end;

`
const bounce = keyframes`
  0% {
    transform: rotate(0deg)
  }

  25% {
    transform: rotate(-15deg)
  }

  50% {
    transform: rotate(0deg)
  }

  75% {
    transform: rotate(15deg)
  }

  100% {
    transform: rotate(0deg)
  }


`

export const Logo = styled.span`
  margin-left: 1rem;
  animation: ${bounce} 750ms linear 100ms;
  color: #8f8;
  & > svg {
  font-size: 2rem ;

  }
`

export const Title = styled.h1`
  font-size: 2rem ;
`
