# LoveLocal

A React.js project for building dynamic and interactive dashboards using Recharts, D3, and other libraries for seamless data visualization.

## Table of Contents
1. [About the Project](#about-the-project)
2. [Technologies Used](#technologies-used)
3. [Folder Structure](#folder-structure)
4. [Setup Instructions](#setup-instructions)
5. [Scripts](#scripts)
6. [Features](#features)

---

## About the Project

LoveLocal is a React.js-based dashboard application that leverages libraries like **Recharts**  for visualizing data in a clean and user-friendly interface. The project is designed with reusable components, organized CSS styles, and a responsive design approach.

---

## Technologies Used
- **Node** (v18.20.5) - default node js version
- **React** (v18.3.1) - Frontend library for building user interfaces.
- **Recharts** (v2.13.3) - For building customizable charts.
- **D3.js** (v7.9.0) - For data-driven visualizations.
- **Axios** (v1.7.8) - For handling HTTP requests.


---

## Folder Structure

The project is organized as follows:

```
src/
├── api/
│   └── api.js                 # API service logic
├── assets/                    # Static assets (images, icons, etc.)
├── components/
│   ├── Charts/                # Reusable chart components
│   │   ├── AvgOrderValueChart.jsx
│   │   ├── DirectIndirectChart.jsx
│   │   └── RetailChart.jsx
│   ├── Dashboard/             # Dashboard layout and components
│   │   ├── Dashboard.jsx
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── TopNavbar.jsx
├── styles/                    # Component-specific and global styles
│   ├── avgOrderValueChart.css
│   ├── DirectIndirectChart.css
│   ├── global.css
│   ├── header.css
│   ├── retailCard.css
│   ├── sidebar.css
│   └── topNavbar.css
```

---

## Setup Instructions

Follow these steps to run the project locally:

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NAVEED476/lovelocal.git
   cd love local
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

---

## Scripts

Here are the available npm scripts:

- **`npm start`**: Starts the development server.
- **`npm build`**: Builds the app for production.
- **`npm test`**: Runs the test suite.
- **`npm eject`**: Ejects the app's configuration.

---
