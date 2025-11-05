# 🚗 Parkr Frontend

_Smart Parking Web Application – React Frontend_

---

## 📘 Project & Repository Descriptions

### 🧭 Project Overview

**Parkr Frontend** is a modern, responsive **React Single Page Application (SPA)** designed to help users easily find, reserve, and manage parking spots in real time.  
The app connects to the **Parkr Backend API** to provide seamless booking, car management, and administrative control over parking lots and spots.

It’s built with **scalability**, **interactivity**, and **clean UI principles** in mind, providing distinct functionalities for users and administrators.

---

### ✨ Main Features

- Real-time parking spot reservation and management
- Car management with add, edit, and delete options
- Points system for vacated parking spots
- Secure user authentication with JWT
- Admin panel for parking lot and spot management
- Responsive and modern UI built with Tailwind CSS

---

## 🗂️ Repository Description

- **Frontend Repository (Current):** React-based SPA
- **React 18 + Vite:** Fast, modular, and developer-friendly
- **React Router 7:** Client-side routing
- **Component-Based Architecture:** Reusable and organized components
- **API Utilities:** Centralized backend communication layer
- **JWT Authentication:** Secure login/session handling
- **Styling:** CSS / Tailwind CSS

---

## 📄 Key Pages

- **LoginPage / LogoutPage / SignupPage:** User authentication and access control
- **HomePage:** Welcome page with project overview
- **CarPage:** Manage, add, edit, and delete cars; includes user points tracking
- **ReservationPage:** Create, update, cancel, and complete parking reservations
- **ParkrDetailPage:** View parking lot details and available parking spots
- **ParkrFormPage:** Add, edit, or delete parking lots (admin management)

---

## 🧰 Tech Stack

### Core Technologies

- **Framework:** React 18
- **Router:** React Router
- **Build Tool:** Vite
- **Language:** JavaScript (ES6+)

### Development Tools

- **Bundler:** Vite (Fast HMR and optimized builds)
- **Linting:** ESLint
- **Package Manager:** npm
- **React Plugin:** @vitejs/plugin-react

### Additional Libraries

- **Tailwind CSS:** Utility-first responsive styling
- **React Hooks:** State and lifecycle management

### Architecture

- **Component Structure:** Modular and feature-based organization
- **API Layer:** Centralized utilities in `src/utilities/`
- **Routing:** Protected and role-based routes
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)

---

## 🖥️ Backend Repository

🔗 **[Backend Repository - GitHub](https://github.com/Maalialdh/Parkr_Backend.git)**  
📘 See backend README for API documentation and endpoint details.

---

🌐 **Frontend Live Site:** [http://localhost:5173/](http://localhost:5173/)

---

## ⚙️ Installation Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- Running backend API (see backend setup)

---

# 🧩 Frontend Setup

1️⃣ **Clone the Repository**

git clone https://github.com/Maalialdh/Parkr_Frontend.git
cd Parkr_Frontend

2️⃣ **Install Dependencies**

```bash
     npm install

3️⃣ Create Environment File (.env)

 # Create .env file in the root directory
 # Add the following:
VITE_API_BASE=http://localhost:8000

```

```bash
 #For production, update the API URL:
 VITE_API_BASE=https://your-backend-api-url.com
```

4️⃣ Start Development Server

```bash
npm run dev
```

5️⃣ Access the App

- Frontend will be available at: `http://localhost:5173`
- The app will automatically reload when you make changes

---

# 🐳Docker Setup (Optional)

1️⃣ Create a Dockerfile

```dockerfile
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

2️⃣ Create docker-compose.yml

```yaml
services:
  frontend:
    build: .
    container_name: parkr_frontend
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    env_file:
      - .env
    environment:
      - VITE_API_BASE=http://localhost:8000
```

3️⃣ Build and Run Containers

```bash
docker compose up -d
```

4️⃣ Access the Application

- Frontend will be available at: `http://localhost:5173`

---

### Build for Production

1️⃣ Build the Production Bundle

```bash
npm run build
```

2️⃣ Preview the Production Build

```bash
npm run preview
```

3️⃣ Deploy

- The /dist folder contains production-ready files
- Deploy to Vercel, Netlify, or any static host

---

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production files
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality

---

# Frontend Routing & Page Overview

<h3> Users </h3>
<table>
  <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
  <tr><td><code>/register</code></td><td>RegisterPage.jsx</td><td>Create</td><td>Create a new user account</td></tr>
  <tr><td><code>/login</code></td><td>LoginPage.jsx</td><td>Read</td><td>User login form</td></tr>
  <tr><td><code>/logout</code></td><td>Handled via Function/Button</td><td>Delete (Session)</td><td>Logs the user out and clears session/token</td></tr>
</table>

<h3> Cars </h3>
  <table>
    <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
    <tr><td><code>/cars</code></td><td>CarPage.jsx</td><td>Create</td><td>Add a new car</td></tr>
    <tr><td><code>/cars</code></td><td>CarPage.jsx</td><td>Read</td><td>View car details</td></tr>
    <tr><td><code>/cars</code></td><td>CarPage.jsx</td><td>Update</td><td>Edit car info or add points</td></tr>
    <tr><td><code>/cars</code></td><td>CarPage.jsx</td><td>Delete</td><td>Delete the car</td></tr>
  </table>

  <h3> Reservations</h3>
  <table>
    <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
    <tr><td><code>/reservations</code></td><td>ReservationIndexPage.jsx</td><td>Read</td><td>List all reservations</td></tr>
    <tr><td><code>/reservations/new</code></td><td>ReservationFormPage.jsx</td><td>Create</td><td>Create new reservation</td></tr>
    <tr><td><code>/reservations/:id</code></td><td>ReservationDetailPage.jsx</td><td>Read</td><td>View reservation details</td></tr>
    <tr><td><code>/reservations/:id/edit</code></td><td>ReservationFormPage.jsx</td><td>Update</td><td>Edit reservation</td></tr>
    <tr><td><code>/reservations/:id/delete</code></td><td>Handled via Button</td><td>Delete</td><td>Cancel reservation</td></tr>
  </table>

<h3> Parking Lots </h3>
<table>
  <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
  <tr><td><code>/parking</code></td><td>ParkrFromPage.jsx</td><td>Read</td><td>Show all parking lots (static data)</td></tr>
  <tr><td><code>/parking/:id</code></td><td>ParkrFromPage.jsx</td><td>Read</td><td>Show specific parking lot details</td></tr>
</table>

   <h3> Parking Spots </h3>
<table>
  <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
  <tr><td><code>/parkingspots</code></td><td>ParkrDetailPage.jsx</td><td>Read</td><td>List all parking spots (static data)</td></tr>
  <tr><td><code>/parkinglot/:id</code></td><td>ParkrDetailPage.jsx</td><td>Read</td><td>View all parking spots for a specific parking lot</td></tr>
</table>

# 🧩 Troubleshooting

## 1️⃣ Port Already in Use:

### Kill process on port 5173 (macOS/Linux)

lsof -ti:5173 | xargs kill -9

## Or change port in vite.config.js

---

## 2️⃣ API Connection Issues:

- Ensure backend is running on the port specified in VITE_API_BASE
- Check CORS settings in backend if getting CORS errors
- Verify JWT token is being stored correctly in localStorage

## 3️⃣ Module Not Found Errors:

## Delete node_modules and reinstall

rm -rf node_modules package-lock.json
npm install

---

# 🧊Ice Box Features (Future Enhancements)

  ### 1️⃣ Integration with Google Maps:

    Display all parking lots and spots on an interactive Google Map,
    allowing users to locate and navigate to available spots easily.

  ### 2️⃣ Real-time Parking Updates:

    Implement live synchronization so parking spot statuses update instantly
    when users complete or cancel reservations.

  ### 3️⃣ Rewards System:

    Allow users to redeem earned points from released parking spots
    for real rewards at partner locations such as malls, pharmacies, or markets.

# 📝 Additional Notes

- All API requests use sendRequest.js for token handling and error management.
- JWT tokens stored securely in localStorage.
- Role-based navigation logic (Admin vs Regular User) can be extended later.
- Optimized for modern browsers: Chrome, Firefox, Safari, Edge.

---

# Project Structure

```
Parkr_Frontend/
├── src/
│   ├── assets/     # images
│   ├── components/
│   │   └── Navbar/
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── App/
│   │   ├── HomePage/
│   │   ├── AboutPage/
│   │   ├── ParkrFormPage/
│   │   ├── ParkrDetailPage/
│   │   ├── CarPage/
│   │   ├── ReservationsPage/
│   │   ├── SignupPage/
│   │   └── LoginPage/
│   └── utilities/
│       ├── sendRequest.js
│       ├── Car-api.js
│       ├── Reservations-api.js
│       └── user-api.js
├── public/
├── dist/
├── package.json
└── vite.config.js
```
