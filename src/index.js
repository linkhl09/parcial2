import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import localeEs from "./locales/es.json";
import localeEn from "./locales/en.json";
import PokemonList from "./components/PokemonList";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <IntlProvider
    locale={navigator.language || navigator.userLanguage}
    messages={
      (navigator.language || navigator.userLanguage).startsWith("es")
        ? localeEs
        : localeEn
    }
  >
    <PokemonList />
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
