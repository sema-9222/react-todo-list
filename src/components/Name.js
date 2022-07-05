import "./Name.css";
export function Name(props) {
  return (
    <p className="name">
      I am {props.name} and I am {props.feeling}!
    </p>
  );
}
