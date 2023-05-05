import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
interface Props {
  show: boolean;
  children: ReactNode;
}
function Modal({ show, children }: Props) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div>
      <div className="modal-backdrop show"></div>
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const element: HTMLElement | null = document.getElementById("my-element");
    if (element !== null) {
      return ReactDOM.createPortal(modalContent, element);
    }
    return null;
  } else {
    return null;
  }
}

export default Modal;
