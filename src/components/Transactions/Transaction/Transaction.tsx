import React, { FC } from "react";
import { Transaction as ITransaction } from "../../../utils/types";
import {
  UnderText,
  Type,
  Separator,
  TransactionContainer,
} from "../Transaction.styled";

import { StyledButton } from "../../../utils/global";
import { Close, Edit } from "@material-ui/icons";

export interface Props extends ITransaction {
  hideSeparator?: boolean;
  deleteTransaction: (transaction: ITransaction) => void;
  updateTransaction: (transaction: ITransaction) => void;
}

const getDate = (date: string | Date) => {
  try {
    return new Date(date).toUTCString().substring(0, 16);
  } catch (err) {
    return "";
  }
};
const Transaction: FC<Props> = ({
  _id,
  amount,
  category,
  date,
  type,
  description,
  hideSeparator,
  deleteTransaction,
  updateTransaction,
}) => {
  return (
    <TransactionContainer>
      <td>
        <p key={description}>{description}</p>
        <UnderText key={date}>{getDate(date)}</UnderText>
      </td>
      <td style={{ textAlign: "center" }}>
        <Type type={type} key={amount + type}>
          {type === "expense" ? "-" : "+"}£{Number(amount).toFixed(2)}
        </Type>
        <UnderText key={category}>{category}</UnderText>
      </td>
      <td style={{ textAlign: "right" }}>
        <StyledButton
          onClick={() =>
            updateTransaction({
              _id,
              amount,
              category,
              date,
              type,
              description,
            })
          }
        >
          <Edit fontSize="small" />
        </StyledButton>
        <StyledButton
          onClick={() =>
            deleteTransaction({
              _id,
              amount,
              category,
              date,
              type,
              description,
            })
          }
        >
          <Close fontSize="small" />
        </StyledButton>
      </td>
      <Separator hide={hideSeparator} />
    </TransactionContainer>
  );
};

export default Transaction;
