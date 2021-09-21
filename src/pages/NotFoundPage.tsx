import React from "react";
import { NotFound, Head } from "../components";
import { Main } from "../utils/global";

const NotFoundPage = () => (
  <>
    <Main>
      <Head title="Expense Tracker | Not Found" />
      <NotFound />
    </Main>
  </>
);

export default NotFoundPage;
