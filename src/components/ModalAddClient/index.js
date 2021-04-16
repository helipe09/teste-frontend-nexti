import { GrClose } from "react-icons/gr";
import "./styles.css";

const ModalAddClient = (props) => {
  return (
    <div className={`modal ${props.className}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>{props.title}</h3>
          <button className="btn-cloes" onClick={props.onClick}>
            {" "}
            <GrClose />
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button className="btn" onClick={props.onClick}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddClient;
