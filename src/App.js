import React, {Component} from 'react';
import routes from "./routes/index";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        {
                            routes.map((route, i) => route.redirect
                                ? <Redirect key={i} {...route} /> : <Route {...route} key={i}/>
                            )
                        }
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
