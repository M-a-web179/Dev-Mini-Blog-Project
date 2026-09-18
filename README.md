# Dev Insights — Mini Blog Project

A small internal blog interface built for **Dev Insights**, where employees can share short web-development tips, updates, and insights. The application displays a list of sample blog posts through reusable React components.

## Features

- Displays a **Dev Insights** header and a “New Post” navigation link
- Renders a list of hardcoded sample blog posts
- Shows each post’s title, author, content preview, and publication date
- Highlights new posts with conditional styling and a “New!” badge
- Uses reusable, typed React components
- Uses `React.memo` to reduce unnecessary component re-renders
- Uses a Higher-Order Component named `withLogger` to log component mount and unmount events in the browser console

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- Git and GitHub

## Project Structure

```text
Dev-Mini-Blog-Project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Post.tsx
│   │   ├── Post.css
│   │   ├── PostList.tsx
│   │   └── withLogger.tsx
│   ├── types/
│   │   └── Post.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone [PASTE-YOUR-GITHUB-REPOSITORY-URL-HERE]
```

2. Move into the project folder:

```bash
cd Dev-Mini-Blog-Project
```

3. Install the project dependencies:

```bash
npm install
```

## Run Locally

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build for Production

To check that the TypeScript and Vite production build works correctly, run:

```bash
npm run build
```

A successful build creates the production files in the `dist` folder.

## Component Design

The application uses functional components:

- `Header` displays the site title and navigation link
- `PostList` stores and maps through the sample post data
- `Post` is a reusable component responsible for displaying one post
- `App` is the root component that combines the main sections
- `withLogger` is a Higher-Order Component used to add logging behavior to another component

Functional components were chosen instead of class components because they are simpler, easier to read, and work naturally with React Hooks such as `useState` and `useEffect`. They are the modern standard approach for building React applications.

## Styling Approach

This project uses two styling approaches:

1. **External CSS files**: Files such as `App.css`, `Header.css`, and `Post.css` control the overall layout, colors, spacing, typography, and post-card design.
2. **Inline conditional styles**: Conditional logic changes the appearance of selected posts, such as highlighting new posts or posts by a specified author.

Using external CSS keeps most styles organized and reusable, while inline conditional styling is useful when the style depends on the current post data.

## Performance Optimization

The `Post` component uses `React.memo`. This prevents React from unnecessarily re-rendering a post when its props have not changed.

When rendering multiple posts with `.map()`, every post receives a unique `key` prop. Keys help React identify which list items changed, were added, or were removed, making list updates more efficient and predictable.

## Higher-Order Component

The project includes a Higher-Order Component called `withLogger`.

A Higher-Order Component is a function that accepts a component and returns an enhanced version of that component. `withLogger` uses `useEffect` to log messages in the browser console when the wrapped component mounts and unmounts. This helps demonstrate reusable behavior that can be added to different components without repeating the same code.

## Challenges and Solutions

One challenge was deciding how to separate the application into reusable components while keeping TypeScript types clear. This was addressed by creating a `Post` type/interface and using typed props for the `Post` component.

Another challenge was applying conditional styling without making the code difficult to read. This was solved by keeping base styles in CSS files and using small inline style conditions only where a post’s data determines its appearance.

## External Libraries

No external UI or CSS libraries were used. The project uses the dependencies provided by the Vite React TypeScript setup.