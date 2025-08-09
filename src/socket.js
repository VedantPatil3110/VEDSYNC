import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };
    // Make sure your backend server URL is set correctly in a .env file
    return io(process.env.REACT_APP_BACKEND_URL, options);
};