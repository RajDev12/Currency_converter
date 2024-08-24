# React + Vite

# Currency Converter Application

## Overview

The Currency Converter application is a React-based web application designed to provide users with a seamless and intuitive way to convert amounts between different currencies. The app leverages custom hooks and modern React practices to create a dynamic, responsive, and user-friendly interface.

## Features

### 1. **Real-time Currency Conversion**
   - Users can input an amount in a selected currency and convert it to another currency in real-time.
   - The app fetches current currency exchange rates and uses them to perform accurate conversions.

### 2. **Swap Currency Functionality**
   - Users can easily swap the "from" and "to" currencies with the click of a button.
   - The app automatically updates the input fields, maintaining a smooth user experience.

### 3. **Custom Hook for Currency Information (`UseCurrencyInfo`)**
   - The app uses a custom hook, `UseCurrencyInfo`, to fetch and manage currency data.
   - This custom hook abstracts the logic of fetching and storing currency rates, making the code cleaner and more reusable.

### 4. **Responsive UI**
   - The UI is built with Tailwind CSS, ensuring that the app is fully responsive and works well on all screen sizes.
   - Aesthetic background images and transparent, blurred containers give the app a modern, visually appealing design.

### 5. **Form Handling**
   - The app features a well-structured form with input validation.
   - The form handles user input efficiently, updating the state and triggering the conversion when submitted.

## Technologies Used

### 1. **React**
   - Core framework used for building the user interface.
   - Utilizes functional components and hooks (`useState`) to manage state and lifecycle.

### 2. **Custom Hooks**
   - **`UseCurrencyInfo`**: A custom hook that encapsulates the logic for fetching currency data, making the main component (`App`) more readable and maintainable.

### 3. **Tailwind CSS**
   - Provides utility-first CSS classes for designing the UI.
   - Ensures responsive design with minimal custom CSS.

### 4. **JavaScript (ES6+)**
   - Used throughout the app to manage logic, state, and DOM manipulation.
   - Arrow functions, destructuring, and other modern ES6+ features make the code concise and efficient.

### 5. **HTML5 and JSX**
   - Markup is written in JSX, combining HTML and JavaScript to create a dynamic UI.
   - Semantic HTML ensures accessibility and improves SEO.


   ![Project UI](image-1.png)

## Installation

To run this project locally:

1. Clone the repository:
   git clone https://github.com/RajDev12/Currency_converter.git
2.npm i
3.Configure Tailwind Css
4. npm run dev

