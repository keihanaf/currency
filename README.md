# Currency Converter

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

This is a simple Currency Converter application built with React. It allows users to convert amounts between different currencies using real-time exchange rates. The application is designed to be user-friendly and responsive, making it easy for users to perform currency conversions on any device.

## Features

- **Select Currencies**: Users can choose the currencies they want to convert from and to, with a variety of options available.
- **Input Amount**: Users can input the amount they wish to convert, and the application will handle the conversion based on the latest exchange rates.
- **Real-Time Exchange Rates**: The application fetches the latest exchange rates from a reliable API, ensuring that users always have up-to-date information.
- **Swap Currencies**: With a single button click, users can easily swap the currencies they are converting between, enhancing usability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, allowing for a dynamic and responsive application.
- **Axios**: A promise-based HTTP client for making API calls to fetch exchange rates.
- **CSS Modules**: For styling components, ensuring that styles are scoped locally to avoid conflicts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to view the application.

<h3 align="left">Languages and Tools:</h3>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,vite,css,vscode" />
  </a>
</p>

## API

The application fetches exchange rates from the [ExchangeRate API](https://api.exchangerate-api.com). The base URL used in the application is:
