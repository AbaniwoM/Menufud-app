import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import AuthContainer from "../../components/AuthContainer/index";
import ErrorText from "../../components/ErrorText";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interfaces/page";

const Login: React.FunctionComponent<IPageProps> = (props) => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate("/dashboard");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };



  return (
    <AuthContainer header="Login">
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          className="h-[6vh] p-3 w-[95%] rounded-md"
        />
      </FormGroup>
      <FormGroup className="mt-3">
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          className="h-[6vh] p-3 w-[95%] rounded-md"
        />
      </FormGroup>
      <Button
        disabled={authenticating}
        color="success"
        block
        onClick={() => signInWithEmailAndPassword()}
        className="bg-gradient-to-br from-green-400 to-green-400 w-[100%] md:w-auto px-[155px] py-1.5 mt-3 rounded-md hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Login
      </Button>
      <small>
        <p className="m-2 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500">
            Register here.
          </Link>
        </p>
        <p className="m-1 text-center">
          <Link to="/forget" className="text-green-500">
            Forgot your password?
          </Link>
        </p>
      </small>
      <ErrorText error={error} />
      {/* <hr className="bg-info m-3" />
      <Button
        block
        disabled={authenticating}
        onClick={() => signInWithSocialMedia(Providers.google)}
        style={{ backgroundColor: "#ea4335", borderColor: "#ea4335" }}
      >
        <i className="fab fa-google mr-2"></i> Sign in with Google
      </Button> */}
    </AuthContainer>
  );
};

export default Login;
