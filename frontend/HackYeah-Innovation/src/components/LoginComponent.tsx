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
      <div className="ibe-footer__creative-commons margins_l_r">
        <p className="ibe-footer__text-small">
          Serwis prowadzi Instytut Badań Edukacyjnych na zlecenie Ministerstwa
          Edukacji i Nauki.
        </p>
        <p className="ibe-footer__text-extra-small">
          Strony dostępne w domenie www.gov.pl mogą zawierać adresy skrzynek
          mailowych. Użytkownik korzystający z odnośnika będącego adresem e-mail
          zgadza się na przetwarzanie swoich danych (adresu e-mail oraz danych,
          które dobrowolnie podał w wiadomości) w celu uzyskania odpowiedzi na
          przesłane pytania. Szczegóły przetwarzania danych przez każdą z
          jednostek znajdują się w ich politykach przetwarzania danych
          osobowych.
        </p>
        <div className="ibe-footer__creative-commons-content">
          <div className="ibe-footer__creative-commons-icons">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M197.711,296.668c-22.267,0-30.808-18.799-30.808-40.659c0-27.108,10.285-40.656,30.808-40.656 c2.06,0,16.721,0.323,25.467,18.482l30.81-16.025c-12.325-22.176-32.711-33.267-61.201-33.258 c-27.479,0-67.357,17.037-67.357,71.467c0,61.888,47.632,71.457,68.592,71.457c36.548,0,54.651-25.477,60.375-36.149 l-28.332-14.376C220.573,290.092,211.131,296.668,197.711,296.668z"></path>
              <path d="M255.591,26.001C123.139,26.001,26.001,132.71,26.001,256c0,128.438,105.354,229.999,229.59,229.999 c120.5,0,230.408-93.549,230.408-229.999C485.999,128.138,387.118,26.001,255.591,26.001z M256.398,444.091 c-104.371,0-188.915-86.288-188.915-188.091c0-97.768,79.23-188.516,188.935-188.516c104.363,0,188.098,82.968,188.098,188.507 C444.506,368.849,352.071,444.091,256.398,444.091z"></path>
              <path d="M330.379,296.668c-22.249,0-30.809-18.818-30.809-40.659c0-27.108,10.276-40.656,30.809-40.656 c2.021,0,17.063,0.146,25.874,18.482l30.401-16.025c-12.037-22.176-32.319-33.267-60.801-33.258 c-27.507,0-67.36,17.056-67.36,71.467c0,62.304,47.551,71.457,68.594,71.457c40.527,0,58.417-32.672,60.365-36.149l-28.75-14.376 C353.24,290.092,343.78,296.668,330.379,296.668z"></path>
            </svg>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M318.045,198.871v94.041h-26.247v111.753h-71.504v-111.66h-26.245v-94.134c0-4.08,1.483-7.604,4.266-10.479 c2.875-2.876,6.399-4.359,10.48-4.359h94.503c3.803,0,7.232,1.483,10.295,4.359C316.467,191.359,318.045,194.791,318.045,198.871z M223.911,139.795c0-21.608,10.666-32.459,31.997-32.459c21.33,0,31.996,10.851,31.996,32.459 c0,21.331-10.666,31.995-31.996,31.995C234.577,171.79,223.911,161.126,223.911,139.795z M255.628,26.001 c131.509,0,230.371,102.109,230.371,229.999c0,136.422-109.898,229.999-230.371,229.999 C131.354,485.999,26.001,384.447,26.001,256C26.001,132.747,123.102,26.001,255.628,26.001z M256.371,67.457 c-109.62,0-188.914,90.795-188.914,188.543c0,101.829,84.579,188.08,188.914,188.08c95.709,0,188.081-75.213,188.081-188.08 C444.545,150.461,360.797,67.457,256.371,67.457L256.371,67.457z"></path>
            </svg>
          </div>
          <div className="ibe-footer__text-extra-small">
            Wszystkie treści publikowane w serwisie są udostępniane na licencji
            <a
              href="https://creativecommons.org/licenses/by/3.0/pl/"
              title="Otworzy się w nowej karcie"
              target="_blank"
            >
              Creative Commons Uznanie Autorstwa 3.0 Polska
            </a>
            , o ile nie jest to stwierdzone inaczej.
          </div>
        </div>
        <div className="ibe-footer__logotypes">
          <a
            href="https://www.gov.pl/web/edukacja-i-nauka"
            target="_blank"
            title="Otworzy się w nowym oknie"
          >
            <img
              className="ibe-footer__logotypes-item"
              alt="Ministerstwo Edukacji i Nauki"
              src="https://aplikacje.edukacja.gov.pl/app/assets/logo-mein.svg"
            />
          </a>
          <a
            href="https://www.gov.pl/web/govtech"
            target="_blank"
            title="Otworzy się w nowym oknie"
          >
            <img
              className="ibe-footer__logotypes-item"
              alt="GovTech Polska"
              src="https://aplikacje.edukacja.gov.pl/app/assets/logo-govtech.svg"
            />
          </a>
          <a
            href="https://www.gov.pl/web/meintech"
            target="_blank"
            title="Otworzy się w nowym oknie"
          >
            <img
              className="ibe-footer__logotypes-item"
              alt="MEiN Tech"
              src="https://aplikacje.edukacja.gov.pl/app/assets/logo-mein-tech.svg"
            />
          </a>
          <a
            href="https://ibe.edu.pl/"
            target="_blank"
            title="Otworzy się w nowym oknie"
          >
            <img
              className="ibe-footer__logotypes-item ibe-footer__logotypes-item--ibe"
              alt="Instytut Badań Edukacyjnych"
              src="https://aplikacje.edukacja.gov.pl/app/assets/logo-ibe.svg"
            />
          </a>
          <a
            href="https://www.ore.edu.pl/"
            target="_blank"
            title="Otworzy się w nowym oknie"
          >
            <img
              className="ibe-footer__logotypes-item"
              alt="Ośrodek Rozwoju Edukacji"
              src="https://aplikacje.edukacja.gov.pl/app/assets/logo-ore.svg"
            />
          </a>
          <a
            href="https://www.gov.pl/web/laboratoria"
            target="_blank"
            title="Otworzy się w nowym oknie"
          >
            <img
              className="ibe-footer__logotypes-item"
              alt="Laboratoria Przyszłości"
              src="https://aplikacje.edukacja.gov.pl/app/assets/logo-lp.svg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
