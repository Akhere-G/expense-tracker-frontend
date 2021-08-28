import styled from 'styled-components'

export const TransactionContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  position: relative;
  &:after {
    content: '';
    width: calc(100% - 1rem);
    bottom: 0 ;
    position: absolute;
    border-bottom: 1px solid #4485;
  }
`

export const TransactionList = styled.div``

export const DescriptionAndDate = styled.div``

export const AmountAndCategory = styled.div`
  text-align: right;
`
export const Type = styled.p<{type: string}>`
  color: ${({type}) => type === 'expense' ? 'red' : 'green' }
`

export const UnderText = styled.p`
  font-size: 0.75rem;
  color: var(--secondary-font);
`