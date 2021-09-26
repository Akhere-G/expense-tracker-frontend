import React, { FC, useState } from "react";
import { Transaction as ITransaction } from "../../../utils/types";
import {
  UnderText,
  Type,
  Separator,
  TransactionContainer,
  ButtonContainer,
  ButtonLargeScreen,
  ButtonSmallScreen,
} from "../Transaction.styled";

import { StyledButton } from "../../../utils/global";
import { Close, Edit, Menu } from "@material-ui/icons";

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
  const [showModal, setShowModal] = useState(false);

  const smallScreen = window.screen.width < 600;

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
        <ButtonContainer>
          <ButtonLargeScreen showModal={showModal}>
            <StyledButton
              disabled={!showModal && smallScreen}
              onClick={() => {
                setShowModal((prev) => !prev);
                updateTransaction({
                  _id,
                  amount,
                  category,
                  date,
                  type,
                  description,
                });
              }}
            >
              <Edit fontSize="small" />
            </StyledButton>
            <StyledButton
              disabled={!showModal && smallScreen}
              onClick={() => {
                setShowModal((prev) => !prev);
                deleteTransaction({
                  _id,
                  amount,
                  category,
                  date,
                  type,
                  description,
                });
              }}
            >
              <Close fontSize="small" />
            </StyledButton>
          </ButtonLargeScreen>
          <ButtonSmallScreen>
            <StyledButton onClick={() => setShowModal((prev) => !prev)}>
              <Menu />
            </StyledButton>
          </ButtonSmallScreen>
        </ButtonContainer>
      </td>
      <Separator hide={hideSeparator} />
    </TransactionContainer>
  );
};

export default Transaction;
