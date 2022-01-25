import { Redirect, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";

const NewQuote = lazy(() => import("./Pages/NewQuote"));
const AllQuotes = lazy(() => import("./Pages/AllQuotes"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const QuoteDetails = lazy(() => import("./Pages/QuoteDetails"));
function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Quotes"></Redirect>
          </Route>
          <Route path="/Quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/New-Quote">
            <NewQuote />
          </Route>
          <Route path="/Quotes/:QouteID">
            <QuoteDetails />
          </Route>

          <Route path="*">
            {" "}
            {/**wiled card */}
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
