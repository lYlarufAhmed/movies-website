import  {BrowserRouter as Router,Route,Redirect, Switch} from "react-router-dom";
import App from "./App";
import MovieDetail from "./MovieDetail";

export default function Main(props){
    return (
        <Router>
            <Switch>
                <Route path={'/movies/:genre'} component={App}/>
                {/*<Route exact path={'/'} component={App}/>*/}
                {/*<Route exact path={'/'}*/}
                {/*       <Redirect to={'/movies/top_rated'}/>*/}
                {/*    <App/>*/}
                {/*</Route>*/}
                <Route path={'/movie/:id'} component={MovieDetail} />
                <Redirect to={'movies/top_rated'}/>
            </Switch>
        </Router>
    )
}
