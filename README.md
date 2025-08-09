Vedsync: A Real-time Collaborative Code Editor
Vedsync is a real-time, browser-based code editor that allows multiple users to collaborate on code in a shared room. It's built to provide a seamless and instant coding experience, making it perfect for pair programming, remote interviews, and collaborative learning.

🌟 Features
Real-time Synchronization: All users in a room see code changes instantly as they are typed.

Persistent Rooms: Users can create a new room with a unique ID or join an existing one using a room ID and username.

User Presence: The application displays a list of all connected clients in a room, with a unique avatar for each user.

Code Sharing: New users joining a room automatically receive the latest code, ensuring they are always up-to-date.

Intuitive UI: A clean and simple interface for a distraction-free coding environment.

Notifications: Uses react-hot-toast to provide clear feedback on user actions like creating a room, joining, or leaving.

🚀 Technologies Used
Frontend
React: For building the user interface.

Codemirror: A versatile text editor implemented in JavaScript for the browser.

react-router-dom: For client-side routing.

react-hot-toast: For elegant notifications.

uuid: To generate unique room IDs.

react-avatar: To create user avatars.

Backend
Node.js & Express: The runtime environment and web framework for the server.

Socket.IO: The core technology for enabling low-latency, bidirectional, and event-based communication between the server and clients.

🛠️ Setup and Installation
Prerequisites
Make sure you have Node.js and Yarn installed.

Steps
Clone the repository:

Bash

git clone https://github.com/VedantPatil3110/VEDSYNC.git
cd VEDSYNC
Install dependencies:

Bash

yarn install
Create a .env file for the backend:
Create a .env file in the root directory. Your backend will listen on port 5000 locally.

Code snippet

PORT=5000
Run the application locally:

Start the backend server in one terminal:

Bash

yarn server
Start the frontend development server in a separate terminal:

Bash

yarn start
The application will be running on http://localhost:3000.

☁️ Deployment
This project requires a two-part deployment: one for the frontend and one for the backend.

Frontend Deployment (Vercel)
The React frontend is hosted on Vercel.

Connect your GitHub repository to Vercel.

Vercel will automatically detect the React project and deploy it.

Once deployed, you will need to add an environment variable to connect to the backend.

Backend Deployment (Render)
The Node.js and Socket.IO backend is hosted on Render.

Connect your GitHub repository to Render and create a new Web Service.

Set the Root Directory to blank.

Set the Build Command to yarn install.

Set the Start Command to node server.js.

Final Connection
After both services are deployed, get the public URL for your Render backend (e.g., https://vedsync-backend.onrender.com). Go to your Vercel dashboard for the frontend project, navigate to Settings > Environment Variables, and add the following:

Name: REACT_APP_BACKEND_URL

Value: https://vedsync-backend.onrender.com

After saving the environment variable, Vercel will trigger a new deployment, and your frontend will correctly connect to your backend.

🤝 How to Use
Create a Room: On the homepage, click "new Room" to generate a unique room ID.

Join a Room: Enter a username and a valid room ID (copied from another user) and click "JOIN".

Collaborate: Start typing code! All other users in the room will see your changes in real-time.

Manage: Use the "Copy ROOM ID" button to invite others and the "Leave" button to exit the room.

📬 Contact
If you have any issues, feel free to contact vedantpatil3110@gmail.com.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn startfront`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
