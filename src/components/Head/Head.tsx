import React, { FC } from "react";
import { Helmet } from "react-helmet";

const Head: FC<{ title: string }> = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
