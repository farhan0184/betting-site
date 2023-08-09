import { BsFillPersonFill } from 'react-icons/bs';
const Modal = ({ visible, onClose }) => {
    const handleCloseModal = (e) => {
        if (e.target.id === 'container') onClose()
    }
    if (!visible) return null
    return (
        <div id='container' onClick={handleCloseModal} className='z-50 fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <div className='p-2 bg-brightGray'>
            <form className=''>
                <input type="number" placeholder="Phone Number" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <button className='text-white'><BsFillPersonFill className='inline'/> Login </button>
            </form>
            </div>
        </div>
    );
};

export default Modal;

