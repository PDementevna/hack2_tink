import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import phone from "./IPhone_X_vector.svg"
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCircle,
    faMicrophone,
    faQuestionCircle,
    faSearch
} from '@fortawesome/free-solid-svg-icons'


import WidgetPage from "./Components/WidgetPage";


library.add(faMicrophone, faSearch, faCircle, faQuestionCircle)

const categories = ['Кино', 'Рестораны', 'Концерты', 'Путешествия', 'Топливо', 'Товары', 'Спорт', 'Страхование', 'Театр'];
// <ServiceList categories={categories}></ServiceList>


function App() {
    return (
        <div className="wrapper">
            <div className="sub-wrapper">
                <img src={phone} className={"image-back"} alt={"mobile"}/>
                <div className="phone-wrapper">
                    <Router>
                        <Switch>
                            <Route path="/">
                                <WidgetPage/>
                            </Route>
                            {/*more routers here + TODO 404 page*/}
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
