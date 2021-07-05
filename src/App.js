import "./App.css";
import HomePage from "./features/HomePage/index";
import { ThemeProvider } from "@material-ui/styles";
import useTheme from "./Components/CustomTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingPage from "./features/ListingPage";
import AppHeader from "./Components/AppHeader";
import MovieDetailPage from "./features/MovieDetailPage";

function App() {
  const theme = useTheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" component={ListingPage} />
          <Route path="/movie/:movieId" component={MovieDetailPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
