import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
export default function AllQuotes() {
  const {
    sendRequest,
    status,
    data: AllQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
  if (status === "completed" && (!AllQuotes || AllQuotes.length === 0)) {
    return <NoQuotesFound></NoQuotesFound>;
  }
  return (
    <div>
      <QuoteList quotes={AllQuotes} />
    </div>
  );
}
