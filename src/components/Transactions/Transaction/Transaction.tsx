import React, { FC } from "react";
import { Transaction as ITransaction } from "../../../types";
import {
  UnderText,
  Type,
  Separator,
  TransactionContainer,
} from "../Transaction.styled";

import { CloseButton, EditButton } from "../../../global";

export interface Props extends ITransaction {
  hideSeparator?: boolean;
  deleteTransaction: (transaction: ITransaction) => void;
}

const Transaction: FC<Props> = ({
  id,
  amount,
  category,
  date,
  type,
  description,
  hideSeparator,
  deleteTransaction,
}) => {
  return (
    <TransactionContainer>
      <td>
        <p>{description}</p>
        <UnderText>{date}</UnderText>
      </td>
      <td>
        <Type type={type}>
          {type === "expense" ? "-" : "+"}£{amount}
        </Type>
        <UnderText>{category}</UnderText>
      </td>
      <td>
        <EditButton />
        <CloseButton
          onClick={() =>
            deleteTransaction({ id, amount, category, date, type, description })
          }
        />
      </td>
      <Separator hide={hideSeparator} />
    </TransactionContainer>
  );
};

export default Transaction;
