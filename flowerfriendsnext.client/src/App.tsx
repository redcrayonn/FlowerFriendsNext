import { Route, Switch } from "wouter";
import FlowerFriends from "./pages/FlowerFriends";

const App = () => (
  <>
      <Switch>
        <Route path="/flowerfriends" component={FlowerFriends} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
  </>
);

export default App;
