import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import UserProvider from "./contexts/userContext";
import RacesProvider, { RacesContext } from "./contexts/racesContext";
import { useContext, useEffect } from "react";
import useRaces from "./hooks/useRaces";

function App() {
  const [state, dispatch] = useContext(RacesContext);
  const { getRaces } = useRaces();

  useEffect(() => {
    getRaces();
  }, []);

  return (
    <div className="App h-full bg-gradient-to-tr from-rose-800 via-purple-700 to-violet-700">
      <UserProvider>
        <RacesProvider>
          <RouterProvider router={router} />
        </RacesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
