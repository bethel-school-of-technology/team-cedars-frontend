// import React, { Component } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";

// import Button from 'react-bootstrap/Button';

// import AdminVideoApp from '../VideosPage/Videos';
// import EventsApp from '../EventsPage/EventsApp';

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import AdminVideoApp from '../VideosPage/AdminVideoApp';
import EventsApp from '../EventsPage/EventsApp';
import Navigating from '../AdminPage/AdminNav';
import ImageGrid from '../EventsPage/Components/ImageGrid';



function Admin() {
    return (
        <div>
            <Router>
                <div className="navbar">

                    <div className="contents">
                        <Switch>
                            <Route exact path="/create-video">
                                < AdminVideoApp />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/create-event">
                                <EventsApp />
                                <ImageGrid />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Navigating />
            </Router >
        </div>
    );
}
export default Admin


// export class Admin extends Component {
//     render() {
//         return (
//             <>
=======



//                 <Button href="/events/create-event" variant="secondary" size="lg" block>
//                     EVENTS
//                     </Button>

//                 <Button href="/AdminVideo" variant="secondary" size="lg" block>
//                     VIDEOS
//                     </Button>

//                 <Router>
//                     <Switch>
//                         <Route path="/events/create-event">
//                             <EventsApp />
//                         </Route>
//                         <Route path='/AdminVideo'>
//                             <AdminVideoApp />
//                         </Route>
//                     </Switch>
//                 </Router>
//             </>
//         )
//     }
// }


// export default Admin

