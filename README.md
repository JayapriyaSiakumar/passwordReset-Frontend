# Password Reset Frontend

A frontend application for password reset functionality built with modern web technologies.

## Features

- User-friendly password reset interface
- Email verification
- Secure token validation
- Form validation
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Project Structure

```
src/
├── components/
├── pages/
├── services/
├── utils/
└── App.js
```

## Technologies Used

- React
- Axios (for API calls)
- CSS/Bootstrap (styling)

## API Integration

This frontend connects to a backend API for password reset endpoints:

- POST `/api/auth/forgot-password`
- POST `/api/auth/reset-password`

## Environment Variables

Create a `.env` file with:

```
API_URL=https://passwordreset-backend-o89a.onrender.com
```

## Contributing

Please follow the project's code standards and submit pull requests for review.

## License

MIT
