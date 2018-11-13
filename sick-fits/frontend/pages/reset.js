import ResetForm from "../components/Reset";

const Reset = props => {
  return (
    <div>
      <ResetForm resetToken={props.query.resetToken} />
    </div>
  );
};

export default Reset;
