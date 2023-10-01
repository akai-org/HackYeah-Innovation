import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

interface LoginComponentProps {
  onLogin: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin }) => {
  return (
    <>
      <header className="ibe-header">
        <a
          className="ibe-header__home"
          href="https://edukacja.gov.pl/"
          aria-label="Strona główna edukacja.gov.pl"
        >
          <h1 className="ibe-header__h1">
            <div className="ibe-header__emblem">
              <img
                className="ibe-header__emblem-image"
                alt="Herb Polski"
                src="https://aplikacje.edukacja.gov.pl/app/assets/herb-polski.svg"
              />
            </div>
            <span className="ibe-header__name">edukacja.gov.pl</span>
          </h1>
        </a>
        <p className="ibe-header__portal-name">Portal edukacji i nauki</p>
      </header>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white text-dark my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-dark-50 mb-5">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-dark"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-dark"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <p className="small mb-3 pb-lg-2">
                  <a className="text-dark-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <MDBBtn
                  outline
                  className="mx-2 px-5"
                  color="dark"
                  size="lg"
                  onClick={onLogin}
                >
                  Login
                </MDBBtn>

                <div className="d-flex flex-row mt-3 mb-5">
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "black" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "black" }}
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-3"
                    style={{ color: "black" }}
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-dark-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </>
  );
};

export default LoginComponent;
