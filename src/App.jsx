import {useState, useEffect} from "react";
import fetchRandomImages from "./api/flickrAPI";
import "./App.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadImages = async () => {
    setLoading(true);
    const randomImages = await fetchRandomImages();
    setImages((prevImages) => [...prevImages, ...randomImages]);
    setLoading(false);
  };

  useEffect(() => {
    loadImages(); // Fetch images when the component mounts
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      )
        return;
      loadImages();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <h1>Random Flickr Images</h1>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={`${image.id}`} className="image-item">
            <img src={image.imageUrl} alt={image.title} />
            <p>Title: {image.title}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading more images...</p>} {/* Show loading text */}
    </div>
  );
};

export default ImageGallery;
