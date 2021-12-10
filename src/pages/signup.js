import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      emailAddress,
      password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
          .then(() => {
            navigate(ROUTES.BROWSE, {replace: true})
            // user.providerData.forEach((profile) => {
            //   console.log("Sign-in provider: " + profile.providerId);
            //   console.log("  Provider-specific UID: " + profile.uid);
            //   console.log("  Name: " + profile.displayName);
            //   console.log("  Email: " + profile.email);
            //   console.log("  Photo URL: " + profile.photoURL);
            // });
          })
          .catch((error) => {
            // console.log(error.message);
            setFullName("");
            setEmailAddress("");
            setPassword("");
            setError(error.message);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(errorMessage);
      });
  }

  const isInvalid = password === "" || emailAddress === "" || fullName === "";
  // const auth = getAuth();
  // createUserWithEmailAndPassword(
  //   auth,
  //   "alfialfarisi1@gmail.com",
  //   "alfialfarisi1@gmail.com"
  // )
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     updateProfile(user, {
  //       displayName: "Monyong",
  //       photoURL: "https://blabla.omcs",
  //     })
  //       .then(() => {
  //         user.providerData.forEach((profile) => {
  //           console.log("Sign-in provider: " + profile.providerId);
  //           console.log("  Provider-specific UID: " + profile.uid);
  //           console.log("  Name: " + profile.displayName);
  //           console.log("  Email: " + profile.email);
  //           console.log("  Photo URL: " + profile.photoURL);
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   });

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="Full name"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autpcomplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already have an account?{" "}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
