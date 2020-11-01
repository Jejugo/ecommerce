This is a [Next.js](https://nextjs.org/) project for a E-commerce boilerplate

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Project Structure

The project is made having folder organization in mind. The code was divided into several modules;
- /assets: In there there will be static images and main `.scss` files.
- /builder: Everything under this directory refers to functions that create or `build` an object, a variable, a string or whatever the app needs.
- /components: Every global react component will be stored here.
- /configs: All configuration and app global variables for different environments.
- /context: All context Api functions that provides global state for their children components.
- /features: Non global components that makes part of a "feature" inside the app.
- /hoc: All higher order components (functions that wraps other functions).
- /services: API calls organized in different contexts.

## Page Folder

Under Page folder we have directories for each page.
- dashboard
  - user-data
- product
  - [product-id]
- purchase
- verified
  - [verified]
- login.js
- signup.js
