import "./App.css";
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./Screens/Lobby";
import Room from "./Screens/Room";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LobbyScreen />} />
                <Route path="/room/:roomId" element={<Room />} />
                <Route
                    path="*"
                    element={
                        <h2>
                            Aap jis duniya ko dhund Rahe he wo is universe me
                            exist hi nahi karta Hai.{" "}
                        </h2>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
