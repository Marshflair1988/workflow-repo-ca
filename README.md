Holidaze Venue Booking

A venue booking application built with vanilla JavaScript, featuring user authentication, venue listings, and booking functionality.

# Features #

- User authentication (Login/Register)
- Venue listing and details
- Responsive design with Tailwind CSS
- End-to-end testing with Playwright
- Unit testing with Vitest

# Technologies #

- JavaScript (ES Modules)
- Tailwind CSS
- Playwright for E2E testing
- Vitest for unit testing
- ESLint & Prettier for code quality
- Husky for pre-commit hooks

# Prerequisites #

- Node.js (latest LTS version)
- npm

# Installation #

1. Clone the repository:
```bash
git clone [https://github.com/Marshflair1988/workflow-repo-ca.git]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (see `.env.example` for required variables)

# Running the Project #

Start the development server:
```bash
npm run dev
```

# Testing #

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run test:e2e
```

# Environment Variables #

Required environment variables:
```
TEST_USER_EMAIL=your-test-email@stud.noroff.no
TEST_USER_PASSWORD=your-test-password
```

# Code Quality #

- ESLint configuration for code quality
- Prettier for consistent code formatting
- Husky pre-commit hooks for:
  - Linting
  - Code formatting
  - Running tests

