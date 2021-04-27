import { connect } from "react-redux";
import { decremented, incremented, set } from "./store";

function Counter(props) {
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => props.incremented()}
        >
          +
        </button>
        <span>{props.count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => props.decremented()}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    console.log(state);
    return { count: state.counter.value };
  },
  { set, incremented, decremented }
)(Counter);
