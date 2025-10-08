import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { CircleCheck } from "lucide-react";
function Modal() {
  return createPortal(
    <dialog className={styles["result-modal"]} open>
      <span>
        <CircleCheck />
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <strong style={{ fontSize: "14px" }}>Dell XPS 15 added to cart!</strong>
        <p>View your cart to proceed to checkout</p>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
