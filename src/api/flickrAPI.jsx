const fetchRandomImages = async () => {
  const apiKey = "cd8f9f6092209e947c1da967024f625c";
  const randomPage = Math.floor(Math.random() * 1000) + 1; // Random page between 1 and 1000 to avoid dublicate ID's
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&page=${randomPage}&format=json&nojsoncallback=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const photos = data.photos.photo.map((photo) => ({
      id: photo.id,
      title: photo.title,
      imageUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
    }));
    return photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
export default fetchRandomImages;
