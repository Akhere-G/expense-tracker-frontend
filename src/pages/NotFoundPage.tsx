import React from "react";
import { NotFound, Header, Footer } from "../components";
import { Main } from "../utils/global";

const NotFoundPage = () => (
  <>
    <Header />
    <Main>
      <NotFound />
    </Main>
    <Footer />
  </>
);

export default NotFoundPage;
