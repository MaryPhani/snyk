import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Dashboard from "./@@PDP/src/Dashboard";
import * as Sentry from "@sentry/react";
import LoginContainer from "@container/LoginContainer";

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

function Routing() {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <div className="my-10">
        <BrowserRouter>
          <SentryRoutes>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            {/* <Route path="/dashboard/:token" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
          </SentryRoutes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Sentry.withProfiler(Routing);
