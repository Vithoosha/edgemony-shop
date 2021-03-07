import "./Error.css";

function Error({ text, retry, close }) {
  return (
    <div className="Error" id={!text ? "hide" : null}>
      <p>{text}</p>
      <div>
        <button onClick={() => retry()}>Retry</button>
        <button onClick={() => close()}>✖</button>
      </div>
    </div>
  );
}

export default Error;
