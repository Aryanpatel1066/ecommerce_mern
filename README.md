# 🛒 MERN eCommerce

An attractive and fully functional eCommerce web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This project includes user authentication, product management, cart functionality, and payment integration.

## 🚀 Features

- 🔐 **User Authentication** (Register/Login, JWT-based authentication)
- 🛍 **Product Management** (Add, edit, delete products)
- 🛒 **Shopping Cart** (Add/remove items, update quantity)
- 💳 **Payment Integration** (Stripe)
- 📦 **Order Management** (Order tracking, history)
- 📊 **Admin Dashboard** (Manage users, orders, products)
- 🔍 **Product Search & Filters**
- 🌎 **Responsive Design** (Fully mobile-friendly UI)

## 🏗️ Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Payment**: Stripe
- **Deployment**: Vercel (Frontend), Render (Backend)

## 📸 Screenshots 

 <p align="center">
  <figure>
      <figcaption><b>Product Page</b></figcaption>
      <img src="https://github.com/user-attachments/assets/8b08098a-8ad2-4ed1-bc34-0b01474db458" alt="Screenshot 1" />
  </figure>
  <figure>
      <figcaption><b>Checkout Page</b></figcaption>
      <img src="https://github.com/user-attachments/assets/02672edf-f0f4-4dd3-85cc-3901eb8ed2f5" alt="Screenshot 2"  />
  </figure>
  <figure>
      <figcaption><b>Order Summary</b></figcaption>
      <img src="https://github.com/user-attachments/assets/279e2348-a0d9-46a8-b336-8bf52e154f61" alt="Screenshot 3" />
  </figure>
</p>


## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd mern-ecommerce
```

### 2️⃣ Install Dependencies
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd frontend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root of the backend and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

### 4️⃣ Run the Application
#### Backend
```bash
npm run dev
```
#### Frontend
```bash
npm start
```

## 🎯 API Endpoints

| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | /api/products | Get all products    |
| GET    | /api/orders   | Get user orders     |
| POST   | /api/auth     | User login/register |

(Include more API details if needed)

## 🚀 Deployment

1. **Frontend**: Deploy on Vercel
2. **Backend**: Deploy on Render
3. **MongoDB**: Use MongoDB Atlas for cloud database

## 🔗 visit 
https://ecommerce-mern-mu.vercel.app/

## 🤝 Contributing

Feel free to submit issues or pull requests. Any contributions are welcome!

 
---
### 🌟 If you like this project, don't forget to give it a ⭐ on [GitHub](https://github.com/Aryanpatel1066/ecommerce-mern)!
