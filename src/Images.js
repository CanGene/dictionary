import images from "./Images.css";

export default function Images(props) {
  if (!props.images || !props.images.photos) {
    return null;
  }

  return (
    <section className="Images">
      <div className="row">
        {props.images.photos.map(function (image, index) {
          return (
            <div className="col-4" key={index}>
              <a
                href={image.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  src={image.src.landscape}
                  alt={image.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
