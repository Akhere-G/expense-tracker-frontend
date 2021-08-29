import React, { FC } from "react";
import { Transaction as ITransaction } from "../../../types";
import {
  UnderText,
  Type,
  Separator,
  TransactionContainer,
} from "../Transaction.styled";

import { StyledButton } from "../../../global";
import { Close, Edit } from "@material-ui/icons";

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
      <td style={{ textAlign: "right" }}>
        <StyledButton>
          <Edit fontSize="small" />
        </StyledButton>
        <StyledButton
          onClick={() =>
            deleteTransaction({ id, amount, category, date, type, description })
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
