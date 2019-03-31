import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import "./App.css"

const HomeIndex= Loadable({
    loader: () => import("./student/components/index"),
    loading: () => <div>Loading</div>,
});

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeIndex} />
                </Switch>
            </BrowserRouter>
        )
    }
}
