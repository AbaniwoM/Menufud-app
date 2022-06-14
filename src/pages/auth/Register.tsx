import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import AuthContainer from "../../components/AuthContainer/index";
import ErrorText from "../../components/ErrorText";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interfaces/page";

const Register: React.FunctionComponent<IPageProps> = (props) => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    if (error !== "") setError("");

    setRegistering(true);

    auth
      .createUserWithEmailAndPassword(email, password as any)
      .then((result) => {
        logging.info(result);
        navigate("/login");
      })
      .catch((error) => {
        logging.error(error);

        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Email already in use.");
        } else {
          setError("Unable to register.  Please try again later.");
        }

        setRegistering(false);
      });
  };

  return (
    <div className="bg-primary">
      <AuthContainer header="Register">
        <FormGroup className="xs:block xs:-ml-10">
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
        <FormGroup className="mt-3">
          <Input
            autoComplete="new-password"
            type="password"
            name="confirm"
            id="confirm"
            placeholder="Confirm Password"
            onChange={(event) => setConfirm(event.target.value)}
            value={confirm}
            className="h-[6vh] p-3 w-[95%] rounded-md"
          />
        </FormGroup>
        <Button
          disabled={registering}
          color="success"
          block
          onClick={() => signUpWithEmailAndPassword()}
          className="bg-gradient-to-br from-green-400 to-green-400 w-[95%] lg:w-[95%] md:w-auto px-[40px] lg:px-[146px] py-1.5 mt-3 rounded-md hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Sign Up
        </Button>
        <small>
          <p className="text-[0.7rem] lg:text-[0.9rem] mt-2 -ml-2 lg:-ml-1 text-center text-white">
            Already have an account?
            <Link to="/login" className="text-green-500 ml-1">
              Login.
            </Link>
          </p>
        </small>
        <ErrorText error={error} />
      </AuthContainer>
    </div>
  );
};

export default Register;
