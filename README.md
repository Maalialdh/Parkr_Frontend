# Parkr Frontend
This is the *frontend* of the Parkr project — a smart parking web application built with *React*.  
The app allows users to find available parking spots in real time and earn reward points by reporting available spots.

---

## Tech Stack

- *React 18*
- *Vite* (for fast development and builds)
- *Axios* (for API requests)
- *React Router* (for navigation)
- *JWT Authentication*
- *CSS / Tailwind* (or any preferred styling library)

---

## 🎯 Features (Frontend Focus)

- **Authentication Pages**: Register, Login, Logout.
- **Profile Management**: Edit user info and delete account.
- **Car Management**: Add, edit, delete, and view cars.
- **Parklots & Parking Spots**: Browse available and occupied spots.
- **Reservation System**: Reserve or cancel parking spots; view history.
- **Admin Tools**: Create, edit, delete park lots and parking spots; update spot status.

---

## 🏗️ Frontend Structure
frontend
└── src
│   ├── assets/
│   ├── components/
|   |    ├── Navbar
|   |    |       ├── Navbar.jsx
│   │    |       └── styles.css
|   |    |
|   |    └── From ├── .jsx
│   │             └── style.css          
│   ├── pages/
│   │   ├── App
│   │   │   ├── App.jsx
│   │   │   └── styles.css
│   │   │ 
│   │   ├── HomePage
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │ 
│   │   ├── AboutPage
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │ 
│   │   ├── ParkrFromPage   
│   │   │   ├── ParkrFromPage.jsx   
│   │   │   └── styles.css  
|   |   |
│   │   ├── ParkrDetailPage   
│   │   │   ├── ParkrDetailPage.jsx   
│   │   │   └── styles.css 
│   │   │ 
│   │   ├── ParkrIndexPage    
│   │   │   ├── ParkrIndexPage.jsx   
│   │   │   └── styles.css  
│   │   │ 
        └── utilities/
           ├── Parkr-api.js
           ├── sendRequest.js
           ├── Car-api.js
           ├── Reservations-api.js
           └── user-api.js

<h3> Users</h3>
  <table>
    <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
    <tr><td><code>/register</code></td><td>RegisterPage.jsx</td><td>Create</td><td>Create a new user account</td></tr>
    <tr><td><code>/login</code></td><td>LoginPage.jsx</td><td>—</td><td>User login form</td></tr>
    <tr><td><code>/users</code></td><td>UserIndexPage.jsx</td><td>Read</td><td>View all users (admin)</td></tr>
    <tr><td><code>/users/:id</code></td><td>UserDetailPage.jsx</td><td>Read</td><td>View user details</td></tr>
    <tr><td><code>/users/:id/edit</code></td><td>UserFormPage.jsx</td><td>Update</td><td>Edit user info</td></tr>
    <tr><td><code>/users/:id/delete</code></td><td>Handled via Button</td><td>Delete</td><td>Delete user account</td></tr>
  </table>

 <h3> Cars</h3>
  <table>
    <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
    <tr><td><code>/cars</code></td><td>CarIndexPage.jsx</td><td>Read</td><td>List all cars</td></tr>
    <tr><td><code>/cars/new</code></td><td>CarFormPage.jsx</td><td>Create</td><td>Add new car</td></tr>
    <tr><td><code>/cars/:id</code></td><td>CarDetailPage.jsx</td><td>Read</td><td>View car details</td></tr>
    <tr><td><code>/cars/:id/edit</code></td><td>CarFormPage.jsx</td><td>Update</td><td>Edit car info</td></tr>
    <tr><td><code>/cars/:id/delete</code></td><td>Handled via Button</td><td>Delete</td><td>Delete car</td></tr>
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



   <h3>ParkLot</h3>
  <table>
    <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
    <tr><td><code>/parklots</code></td><td>ParkLotIndexPage.jsx</td><td>Read</td><td>Show all parking lots (static data)</td></tr>
    <tr><td><code>/parklots/:id</code></td><td>ParkLotDetailPage.jsx</td><td>Read</td><td>Show parking lot details</td></tr>
  </table>
<!-- 

   <h3>ParkingSpot</h3>
  <table>
    <tr><th>Path</th><th>Component</th><th>Action</th><th>Description</th></tr>
    <tr><td><code>/parkingspots</code></td><td>ParkingSpotIndexPage.jsx</td><td>Read</td><td>List all parking spots (static data)</td></tr>
    <tr><td><code>/parkingspots/:id</code></td><td>ParkingSpotDetailPage.jsx</td><td>Read</td><td>View parking spot info</td></tr>
  </table> -->