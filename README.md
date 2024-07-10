
# Online Library Management System

This is an Online Library Management System project developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage books, borrow and return them, and administrators to manage users and books efficiently.


## Features

- **User Features:**
    - Browse books by category and search by title or author.
    - Borrow and return books with ease.
    - View personal borrowing history

- **Admin Features:**
    - Add, edit, and delete books
    - .Manage user accounts and borrowing records.
    - Dashboard with statistics on total books, students, and admins.

- **Technologies Used**
    - **Frontend:**
        - React.js
        - Axios for API requests
        - React Router for navigation
        - Bootstrap for styling

- **Backend:**
    - Node.js
    - Express.js
    - MongoDB with Mongoose for data storage


## Installation

- **Clone the repository**

```bash
  git clone https://github.com/Ankushkr14/Online-Library.git
```
- **Install dependencies:**

```bash
    cd Online-Library/client
    npm install
    cd ../server
    npm install
```

- **Set up environment variables:**
```bash
    PORT=9090
    MONGO_URI=<your_mongodb_connection_string>
```
- **Run the application:**
    - Start the backend Server:
```bash
    cd server
    npm start

```
- **Start the frontend server:**
```bash
    cd server
    npm start

```


- **Access the application:**
    - Open your browser and go to http://localhost:[Your_Port_Number] to view the application.
    
## Contributing

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository
- Create your feature branch (`git checkout -b feature/YourFeature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin feature/YourFeature`)
- Create a new Pull Request
