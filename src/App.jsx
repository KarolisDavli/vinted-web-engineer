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
    loadImages();
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

  const addToFavorites = (image) => {
    const favourites =
      JSON.parse(localStorage.getItem("favouriteImages")) || [];

    // Check if the image is already in favorites
    if (!favourites.some((fav) => fav.id === image.id)) {
      favourites.push(image);
      localStorage.setItem("favouriteImages", JSON.stringify(favourites));
      alert("Image added to favorites!");
    } else {
      alert("This image is already in your favorites!");
    }
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.imageUrl} alt={image.title} />
            <div className="image-info">
              <div className="details">
                <p className="title">{image.title}</p>
                <div className="divider" />
                <p className="user">{image.userName}</p>
                <button
                  className="fav-btn"
                  onClick={() => addToFavorites(image)}
                >
                  Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="loading">Loading more images...</p>}
    </div>
  );
};

export default ImageGallery;
