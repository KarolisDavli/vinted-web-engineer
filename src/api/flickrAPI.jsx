const apiKey = import.meta.env.VITE_REACT_APP_FLICKR_API_KEY;

// Function to fetch the username for a given user ID
const fetchUserName = async (userId) => {
  const url = `https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.person.username._content;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return "Unknown"; // Fallback in case of error
  }
};

const fetchRandomImages = async () => {
  const randomPage = Math.floor(Math.random() * 1000) + 1; // Random page between 1 and 1000 to avoid duplicate IDs
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&page=${randomPage}&format=json&nojsoncallback=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const photos = [];
    for (const photo of data.photos.photo) {
      const userName = await fetchUserName(photo.owner); // Fetch username for each photo

      // Add default title if not available
      const title = photo.title.trim() === "" ? "Untitled" : photo.title;

      photos.push({
        id: photo.id,
        user_id: photo.owner,
        userName: userName,
        title: title,
        imageUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
      });
    }

    return photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export default fetchRandomImages;
