import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
export default function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote, false);
  useEffect(() => {
    if (status === "completed") {
      history.push("/Quotes"); //.replace => prevent user from going back to the previous page!
    }
  }, [status, history]);
  const AddQouteHandler = (qouteData) => {
    console.log(qouteData);
    sendRequest(qouteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={AddQouteHandler} />
  );
}
