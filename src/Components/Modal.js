import "./Modal.css";

export default function Modal({ children, handleClosed }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}
