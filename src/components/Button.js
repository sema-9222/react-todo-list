import "./Button.css";

export function Button(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Whatever!
    </button>
  );
}
