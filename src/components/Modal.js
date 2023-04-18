import { useDispatch } from "react-redux";

import { closeModal } from "../features/modalSlice";
import { clearCart } from "../features/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
