import "../styles/artist.css";

const Artist = ({ image, name }) => {
  return (
    <div className='card'>
      <img src={image} className='img' alt='' />
      <div className="h2">heading 2</div>
      <div className='h3'>{name}</div>
    </div>
  );
};

export default Artist;
