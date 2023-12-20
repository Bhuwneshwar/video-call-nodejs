import { useState, useCallback, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useSocket } from "../Contexts.jsx/SocketProvider";
const LobbyScreen = () => {
    const socket = useSocket();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            socket.emit("room:join", { email, room });
        },
        [email, room, socket]
    );

    const handleJoinRoom = useCallback(data => {
        const { email, room } = data;
        navigate("/room/"+room)
    }, []);

    useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
            socket.off("room:join", handleJoinRoom);
        };
    }, [socket, handleJoinRoom]);
    return (
        <div className="lobby">
            <h1>Lobby</h1>
            <form onSubmit={handleSubmit} action="" method="get">
                <label htmlFor="email">email</label>
                <input
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                />
                <br />

                <label htmlFor="room">Room Number</label>
                <input
                    onChange={e => setRoom(e.target.value)}
                    type="number"
                    name="room"
                    id="room"
                    value={room}
                />
                <br />
                <button type="submit">Join Room</button>
            </form>
        </div>
    );
};

export default LobbyScreen;
