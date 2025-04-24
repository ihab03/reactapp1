function CustomButton (props){

    return (
        <button className="btn btn-outline-danger bg-alert-dark rounded-pill mx-2">
          {props.text}
        </button>
      );
}

export default CustomButton