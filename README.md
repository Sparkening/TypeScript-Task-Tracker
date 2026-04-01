# 📝 Mini Task Tracker (PHP + TypeScript)

A lightweight, full-stack web application built to demonstrate the separation of concerns between a backend API and a frontend client. 

This project was built to showcase core web development concepts including RESTful API design, asynchronous data fetching, and strict data typing—all without the overhead of heavy frameworks.

## 🚀 Overview

The application features a decoupled architecture:
* **The Backend:** A PHP-based REST API that handles cross-origin requests (CORS), processes HTTP methods, and serves data in JSON format.
* **The Frontend:** A Vanilla TypeScript client that fetches data asynchronously from the API, enforces strict data interfaces, and dynamically updates the DOM.

## 🛠️ Tech Stack

* **Backend:** PHP 8+
* **Frontend:** TypeScript, HTML5
* **Data Format:** JSON

## ⚙️ How to Run Locally

To run this project on your local machine, you will need [Node.js](https://nodejs.org/) (for the TypeScript compiler) and [PHP](https://www.php.net/) installed.

**1. Clone the repository**
```bash
git clone https://github.com/Sparkening/TypeScript-Task-Tracker.git
cd TypeScript-Task-Tracker
```

**2. Compile the TypeScript**
Because browsers cannot read TypeScript directly, you must compile it into JavaScript. Run this in your terminal:
```bash
npx tsc app.ts
```
*(This will generate the `app.js` file required by `index.html`.)*

**3. Start the PHP Server**
Launch PHP's built-in web server to host the API and frontend:
```bash
php -S localhost:8000
```

**4. View the App**
Open your web browser and navigate to `http://localhost:8000`.

---

## 💡 Architectural Highlights

* **Separation of Concerns:** PHP is strictly used as an API service, rather than mixing server-side rendering with UI logic.
* **Type Safety:** The frontend utilizes TypeScript interfaces (e.g., `ApiResponse<T>`) to ensure the data structure fetched from the backend is predictable and safe to use.
* **No Dependencies:** Built entirely with native language features to demonstrate a fundamental understanding of how the web works under the hood.
