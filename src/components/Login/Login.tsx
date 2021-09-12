import React, { useState, useEffect, useRef } from "react";
import { Container } from "./Login.styled";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  const linkRef = useRef<HTMLAnchorElement>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    setShow(true);

    return () => setShow(false);
  }, [pathname]);

  return (
    <Container show={show}>
      <h2>Log In now</h2>
      <button
        onClick={() => {
          setShow(false);
          setTimeout(() => linkRef.current?.click(), 10);
        }}
      >
        Link
      </button>
      <Link ref={linkRef} to="/transactions" style={{ display: "none" }} />
    </Container>
  );
};

export default Login;
