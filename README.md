# Image Gallery React App

## Overview

This project is a React application that fetches and displays random images from the Flickr API. Users can scroll to load more images, view the title and username of the image owner on hover, and mark images as favorites. The favorite images are stored in the browser's local storage.

## Features

- Image Loading: Fetches random images from Flickr API and displays them in a three-column layout.

- Infinite Scroll: Loads more images as the user scrolls to the bottom of the page.

- Image Hover Details: Displays the title and owner’s username when an image is hovered over.

- Favorite Images: Users can mark images as favorites, and these favorites are saved in local storage.

- Local Storage Integration: Favorites are persisted across page reloads by storing them in the browser's local storage.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm or yarn (npm comes with Node.js)

### Installation

1. Clone the repository:

```bash
Copy code
git clone https://github.com/your-username/image-gallery-react.git
cd image-gallery-react
```

2. Install dependencies:

```bash
Copy code
npm install
```

or

```bash
Copy code
yarn install
```

3. Set up the Flickr API key:

Create a .env file in the root of the project and add your Flickr API key:

```plaintext
Copy code
VITE_REACT_APP_FLICKR_API_KEY=your_flickr_api_key
```

4. Start the development server:

```bash
Copy code
npm run dev
```

or

```bash
Copy code
yarn dev
```

5. Open your browser:
   Visit http://localhost:3000 to see the application in action.

Project Structure

```bash
Copy code
├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ └── flickrAPI.js # Handles the API calls to Flickr
│ ├── App.css # Styling for the application
│ ├── App.js # Entry point for the React application
│ ├── index.js # Renders the React app
│ └── index.css # Global styles
├── .env # Environment variables (e.g., API keys)
├── package.json # Project dependencies and scripts
└── README.md # Project documentation (this file)
```

### API Module (flickrAPI.js)

- fetchRandomImages: Fetches random images from the Flickr API, including image details and owner’s username.
- fetchUserName: Retrieves the username of a Flickr user based on their user ID.

### Main Component (ImageGallery.js)

- State Management: Manages the loading state, images state, and triggers fetching of new images.
- Infinite Scroll: Automatically loads more images when the user scrolls to the bottom of the page.
- Favorite Functionality: Adds images to the local storage as favorites.

### Styling (App.css)

- Responsive Design: Ensures the gallery layout is responsive with a three-column grid system.
- Hover Effects: Shows image details (title and username) on hover.
- Favorite Button: Provides an interactive button for adding images to favorites.

### Usage

#### Marking an Image as Favorite

1. Hover over any image to reveal the title, username, and "Favorite" button.
2. Click the "Favorite" button to save the image to local storage.
3. The image will be stored in the browser’s local storage and can be accessed even after a page refresh.

#### Viewing Favorite Images

To view the favorite images, you can either:

- Console Check: Open the browser’s console and type JSON.parse(localStorage.getItem('favouriteImages')) to view all saved images.
- Enhancement: Implement a new component or page to list and view the favorite images.

#### Future Enhancements

- View Favorites Page: Add a separate page to view and manage all favorite images.
- Remove from Favorites: Add the ability to remove images from favorites.
- Lazy Loading: Implement lazy loading to optimize image loading and improve performance.
- Error Handling UI: Improve user experience by providing visual feedback when errors occur during image fetching.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
