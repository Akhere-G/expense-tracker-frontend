import React, {FC} from 'react'
import {Transaction as ITransaction } from '../../../types'
import {
  TransactionContainer, DescriptionAndDate, AmountAndCategory, UnderText, Type
} from '../Transaction.styled'

const Transaction: FC<ITransaction> = ({ amount, category, date,type, description }) => {
  return (
    <TransactionContainer>
      <DescriptionAndDate>
      <p>{ description}</p>
      <UnderText>{ date}</UnderText>

      </DescriptionAndDate>
      <AmountAndCategory>
        <Type type={type}>{ type === 'expense' ? '-' : '+'}£{amount }</Type>
      <UnderText>{ category}</UnderText>

      </AmountAndCategory>
    </TransactionContainer>
  )
}

export default Transaction
