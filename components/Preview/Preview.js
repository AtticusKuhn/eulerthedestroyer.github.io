import Link from '@/components/Link';
const Preivew = ({title, children, link, image}) => (
  <>
    <Link
      href={link}
    >
      <a className="preview">
        { image && <img alt={`this accurately describes what's going on`} src={image} className="image" />}
        <div className="text">
          <div className="title">{title}</div>
          <div className="body">{children}</div>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .preview {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        padding: 1.3vh;
        margin: 1.3vh 3.1ch 0 3.1vw;
        transition-duration: 1s;
        border-radius: 1vh;
        border: 1px solid var(--c5);
      }
      .preview:hover {
        border-color: var(--c1);
        transform: translateY(-1px);
      }
      .image {
        width: 13vh;
        height: 13vh;
        border-radius: 0.5vh;
        object-fit: cover;
        margin-right: 1.5vw;
      }
      .text {
        display: flex;
        flex-direction: column;
      }
      .title {
        font-size: 1.8vw;
        letter-spacing: 0.03vw;
        font-weight: 600;
        color: var(--c1);
        margin-bottom: 1.3vh;
      }
    `}</style>
  </>
);


export default Preivew