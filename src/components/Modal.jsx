const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 relative w-[90%] max-w-[500px]">
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Modal;
