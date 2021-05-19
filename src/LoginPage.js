import React from "react";
import { Login, LoginForm } from "react-admin";
import { withStyles } from "@material-ui/core/styles";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "firebase";
// import ForgotPasswordButton from "./ForgotPassword";

// Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: "popup",
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: "#/",
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
// };

// const SignInScreen = () => (
//   <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
// );

const styles = {
  main: { background: "#59756e" },
  avatar: {
    background: "url()",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 80,
  },
  icon: { display: "none" },
};

const MyLoginFormStyle = withStyles({
  button: { background: "#F15922" },
})(LoginForm);

const MyLoginForm = (props) => (
  <div>
    <div style={{ fontFamily: "monospace", marginLeft: "15px" }}></div>
    <LoginForm {...props} />
    {/* <ForgotPasswordButton {...props} /> */}
    {/* <SignInScreen /> */}
  </div>
);

const LoginPage = (props) => (
  <Login loginForm={<MyLoginFormStyle />} {...props}>
    <MyLoginForm {...props} />
  </Login>
);

export default withStyles(styles)(LoginPage);
