import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import UserProvider from "./contexts/auth/authContext";
import RacesProvider, { RacesContext } from "./contexts/races/racesContext";
import { useContext, useEffect } from "react";
import useRaces from "./hooks/useRaces";

function App() {
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
