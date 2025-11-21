import { createPortal } from 'react-dom'



function ModalContent({ children, className, ...props }) {
  const classes = `fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-4 rounded ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}


function ModalOverlay() {
  return (<div className='fixed z-20 inset-0 bg-black/50'></div>)
}


function ModalPortal({ children }) {
  return createPortal(
    <>
      {children}
    </>
    , document.body);
}


function Modal({ children, open }) {

  if (!open) {
    return <div className='hidden'></div>
  }

  return (
    <>
      {children}
    </>
  )
}

Modal.Portal = ModalPortal;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;

export default Modal