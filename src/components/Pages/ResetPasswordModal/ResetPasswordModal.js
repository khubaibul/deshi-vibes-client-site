import React from 'react';

const ResetPasswordModal = ({ setModalOpen, modalOpen, resetPasswordByEmail }) => {

    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
            <div onClick={() => setModalOpen(!modalOpen)} className="absolute w-full h-full opacity-60 bg-blend-overlay bg-black"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left">
                    <div className="flex justify-between items-center pb-3 px-6 text-primary">
                        <p className="text-xl font-light font-bebas">Reset Your Password</p>
                        <div className="modal-close cursor-pointer z-50">
                            <button className='w-8 h-8 border flex justify-center items-center rounded-full border-gray-400' onClick={() => setModalOpen(!modalOpen)}>
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='px-6 py-6'>
                        <form onSubmit={resetPasswordByEmail} className="flex flex-col gap-y-8">
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="email1" value="Your email" />
                                </div>
                                <input
                                    name="email"
                                    id="email1"
                                    type="email"
                                    className='w-full py-2 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="Type your email"
                                    required={true}
                                />
                            </div>
                            <button className='w-full bg-primary py-1 font-bebas text-white tracking-widest'>Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ResetPasswordModal;