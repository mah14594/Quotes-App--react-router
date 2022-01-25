import Card from "../UI/Card";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const Sort = queryparams.get("sort");
  const isAscending = Sort === "asc";
  console.log(location);
  const sorthandler = () => {
    history.push(`${location.pathname}?sort=${isAscending ? "desc" : "asc"}`);
  };
  const sortedQuotes = sortQuotes(props.quotes, isAscending);
  return (
    <Card>
      <div className={classes.sorting}>
        <button onClick={sorthandler}>
          sort {isAscending ? "descinding" : "ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Card>
  );
};

export default QuoteList;
