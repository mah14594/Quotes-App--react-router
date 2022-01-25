import React, { useEffect } from "react";
import Comments from "../components/comments/Comments";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
export default function QuoteComments() {
  const params = useParams();
  const Id = params.QouteID;
  const {
    sendRequest,
    status,
    data: singleQuotedata,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(Id);
  }, [sendRequest, Id]);
  const match = useRouteMatch();
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (!singleQuotedata.text) {
    return <p>No Quotes Found!</p>;
  }

  return (
    <section>
      <HighlightedQuote
        text={singleQuotedata.text}
        author={singleQuotedata.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
        <div className="centered">
          <Link className="btn--flat" to={match.url}>
            Hide Comments
          </Link>
        </div>
      </Route>
    </section>
  );
}
