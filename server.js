const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const ACTIONS = require('./src/Actions'); 
const path = require('path');
// app.use(express.static('build'));
// app.use((req,res,next)=>{
//     res.sendFile(path.join(__dirname,'build','index.html'));
// });
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        // origin: 'vedsync-5120tqjva-badboy3110s-projects.vercel.app',
        methods: ['GET', 'POST'],
    },
});

const userSocketMap = {};

function getAllConnectedClients(roomId) {
    const clientsInRoom = io.sockets.adapter.rooms.get(roomId) || new Set();
    return Array.from(clientsInRoom).map((socketId) => {
        return {
            socketId,
            username: userSocketMap[socketId],
        };
    });
}

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    // Handles a user joining a room
    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id,
            });
        });
    });

    // Handles real-time code changes
    socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    // Handles syncing code for new users
    socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
        io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    // This is the critical part for handling disconnections.
    // The client's disconnect() method will trigger this event.
    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomId) => {
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));