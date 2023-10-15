const MovieCard = (props) => {
  const { movie } = props;
  const rating = Number(movie.rating);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index < rating ? "gold" : ""}`}
    >
      ★
    </span>
  ));

  return (
    <>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>
        Rating:
        <div className="star-rating">{stars}</div>
      </p>
    </>
  );
};

export default MovieCard;
