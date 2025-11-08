# jsonplaceholder-posts-app

This project is a simple React application that fetches and displays posts from the JSONPlaceholder API. It demonstrates the use of functional components, hooks, and TypeScript for type safety.

## Project Structure

```
jsonplaceholder-posts-app
├── src
│   ├── index.tsx          # Entry point of the application
│   ├── App.tsx            # Main App component with routing and layout
│   ├── pages
│   │   └── Home.tsx       # Home component displaying the main content
│   ├── components
│   │   ├── PostList.tsx    # Component for fetching and displaying a list of posts
│   │   └── PostItem.tsx     # Component for displaying individual post details
│   ├── services
│   │   └── api.ts          # API service for fetching posts
│   ├── hooks
│   │   └── usePosts.ts     # Custom hook for managing posts fetching logic
│   ├── types
│   │   └── post.ts         # TypeScript interface for post structure
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd jsonplaceholder-posts-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Features

- Fetches posts from the JSONPlaceholder API.
- Displays a list of posts with individual post details.
- Utilizes TypeScript for type safety and better development experience.

## License

This project is licensed under the MIT License.