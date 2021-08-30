import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 5rem 6rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 700px){
  padding: 2rem 1rem;
  }
  & > h2 {
    padding-bottom: 1rem;
  };
`