🚀 Vedsync: A Real-time Collaborative Code Editor
Vedsync is a real-time, browser-based code editor that allows multiple users to collaborate on code in a shared room. It's designed for pair programming, remote interviews, and collaborative learning—providing a seamless, instant coding experience.

✨ Features
⚡ Real-time Synchronization – See code changes instantly as they are typed by any user in the room.

🔗 Persistent Rooms – Create a new room with a unique ID or join one using a room ID and username.

👥 User Presence – Displays all connected users in a room with unique avatars.

📤 Code Sharing – New users automatically receive the latest code upon joining.

🖥 Intuitive UI – Clean, distraction-free interface for smooth collaboration.

🔔 Notifications – Real-time feedback for actions like joining, leaving, and creating rooms (powered by react-hot-toast).

🛠 Tech Stack
Frontend

⚛ React – User interface

📝 CodeMirror – Browser-based code editor

🌐 React Router DOM – Client-side routing

🔔 React Hot Toast – Notifications

🆔 UUID – Unique room ID generation

👤 React Avatar – User avatars

Backend

🟢 Node.js + Express – Backend server

🔄 Socket.IO – Real-time communication

📦 Setup & Installation
Prerequisites
Node.js

Yarn

Steps
bash
Copy
Edit
# Clone the repository
git clone https://github.com/VedantPatil3110/VEDSYNC.git
cd VEDSYNC

# Install dependencies
yarn install
Create .env file in the root directory:

env
Copy
Edit
PORT=5000
Run the application locally:

bash
Copy
Edit
# Start backend
yarn server

# Start frontend
yarn start
App will be available at: http://localhost:3000

☁ Deployment
Frontend (Vercel)
Connect your GitHub repo to Vercel.

Deploy the React frontend.

Add environment variable in Vercel:

Name: REACT_APP_BACKEND_URL

Value: https://vedsync-backend.onrender.com

Backend (Render)
Connect your GitHub repo to Render.

Create Web Service:

Root Directory: (leave blank)

Build Command: yarn install

Start Command: node server.js

💡 How to Use
Create a Room – Click "New Room" to generate a unique ID.

Join a Room – Enter your username and room ID.

Collaborate – Write code, watch changes sync instantly.

Invite Others – Share the room ID using "Copy ROOM ID".

📬 Contact
📧 Email: vedantpatil3110@gmail.com
💻 GitHub: VedantPatil3110




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
