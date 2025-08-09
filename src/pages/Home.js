import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const reactNavigator = useNavigate(); 

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Room Id & Username required ');
            return;
        }
        reactNavigator(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return(
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img src="/VEDSYNC__3_-removebg-preview.png" alt="code-sync" className="homePageLogo"/>
                <h4 className="mainLabel">Paste Room Id</h4>
                <div className="inputGroup">
                    <input type="text" 
                    className="inputBox" 
                    placeholder="ROOM ID"
                    onChange={(e) => setRoomId(e.target.value)}
                    value={roomId}
                    onKeyUp={handleInputEnter}
                    />
                    <input type="text" 
                    className="inputBox" 
                    placeholder="USERNAME"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="#" className="createNewBtn">
                            new Room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>If Issues, contact &nbsp;
                    <a href="mailto:vedantpatil3110@gmail.com">vedantpatil3110@gmail.com</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;