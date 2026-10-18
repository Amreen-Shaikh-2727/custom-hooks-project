
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const {
    data: photos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=20");

  if (loading) {
    return <h2 className="message">Loading photos...</h2>;
  }

  if (error) {
    return <h2 className="message">Error: {error}</h2>;
  }

  return (
    <div className="container">
      <h2>Photos</h2>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />

            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
