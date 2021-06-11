import EventsHome from './Components/EventsHome';
import Navigating from './Components/Navigating'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEvents from './Components/CreateEvents';
import EventsDetails from './Components/EventsDetails';
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/ImageGrid';
import './Events.css';

function EventsApp() {
  return (
    <Router>
      <div className="">
        <Navigating />
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <EventsHome />
              <ImageGrid />
            </Route>
          </Switch>
          <Switch>
            <Route path="/create-event">
              <CreateEvents />
              <UploadForm />
            </Route>
          </Switch>
          <Switch>
            <Route path="/events/:id">
              <EventsDetails />
              <ImageGrid />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default EventsApp;

// npx json-server --watch data/db.json --port 8000