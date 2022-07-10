import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App.jsx";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 
<div className="headerChildDiv">
      <PageLayout/>
      </div>

*/
const msalInstance = new PublicClientApplication(msalConfig);

/**
 * We recommend wrapping most or all of your components in the MsalProvider component. It's best to render the MsalProvider as close to the root as possible.
 */

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </React.StrictMode>
);

// ReactDOM.render(
//     <React.StrictMode>
//         <MsalProvider instance={msalInstance}>
//             <App />
//         </MsalProvider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );
