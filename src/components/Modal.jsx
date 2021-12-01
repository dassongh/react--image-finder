export default function Modal({ url, alt, onClick }) {
  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={url} alt={alt} />
      </div>
    </div>
  );
}
