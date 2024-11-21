# Netflix Clone

A full-stack movie streaming application built with React, Node.js, and Express. This application uses The Movie Database (TMDb) API for movie data.

## Features
- Browse popular movies and TV shows
- Search for movies and TV shows
- View detailed information about movies and TV shows
- Responsive design
- User authentication
- Watchlist functionality

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- TMDb API key

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Create a `.env` file in the server directory and add your TMDb API key:
   ```
   TMDB_API_KEY=your_api_key_here
   ```
4. Start the development servers:
   - Frontend: `cd client && npm start`
   - Backend: `cd server && npm start`

## Tech Stack
- Frontend: React, Redux, Styled-components
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
