import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Suspense } from "react";
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <RecoilRoot>
      {/* <RecoilizeDebugger/> */}
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

/*i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    react: { 
      useSuspense: false //   <---- this will do the magic
    }
});*/
