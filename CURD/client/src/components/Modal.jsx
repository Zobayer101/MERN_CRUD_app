

const Modal = (open, setOpen) => {
    return open ? setOpen(() => false) :
        setOpen(() => true);

}

export default Modal;