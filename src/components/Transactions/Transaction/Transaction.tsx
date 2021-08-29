import React, { FC } from "react";
import { Transaction as ITransaction } from "../../../types";
import {
  UnderText,
  Type,
  Separator,
  TransactionContainer,
} from "../Transaction.styled";

import { CloseButton, EditButton } from "../../../global";

interface Props extends ITransaction {
  hideSeparator?: boolean;
}

const Transaction: FC<Props> = ({
  amount,
  category,
  date,
  type,
  description,
  hideSeparator,
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
        <CloseButton />
      </td>
      <Separator hide={hideSeparator} />
    </TransactionContainer>
  );
};

export default Transaction;
