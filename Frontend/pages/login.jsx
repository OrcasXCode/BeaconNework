import { GoogleLogin } from "react-google-login";

const clientId =
  "537879712076-qaonqhsbtt9ft8bn57p7g4lnda0odeto.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Logged in successfully welcome", res.profileObj);
  };
  const onFailure = (res) => {
    console.error("LOGIN FAILED! res:", res);
  };
  <div className="bg-black">
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    ></GoogleLogin>
  </div>;
}

export default Login;
