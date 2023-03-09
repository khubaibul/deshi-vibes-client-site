import React from 'react';
import { FaMailBulk, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import profileImage from "../../../assets/profile.png";

const UserProfile = () => {
    const { user, logOut } = useSelector(state => state.auth);
    return (
        <div>
            {
                user
                    ?
                    <div className={`flex flex-row justify-center items-center lg:mt-20 mt-10 px-2`}>
                        <div className={`bg-primary w-96 mx-auto  rounded-none text-white`}>
                            {
                                user?.photoURL ? <img className="w-32 mx-auto rounded-full border-8 border-white" src={user.photoURL} alt="" />
                                    : <img className="w-32 mx-auto rounded-full border-8 border-white" src={profileImage} alt="" />
                            }
                            <div className="text-center mt-2 text-3xl font-medium">{user?.displayName}</div>
                            {
                                user.email && <div className="text-center mt-2 font-light text-sm flex items-center justify-center gap-x-2">
                                    <FaMailBulk></FaMailBulk>
                                    {user?.email}
                                </div>
                            }
                            <small className="text-center font-semibold text-base  flex items-center justify-center gap-x-2">
                                <FaUserCircle></FaUserCircle> {user?.uid.toUpperCase()}
                            </small>
                            <hr className="mt-8" />
                            <div className='flex justify-center gap-x-4 p-2 font-bebas tracking-widest'>
                                <button className='rounded-none bg-secondary flex-1 p-1 hover:bg-gray-dark transition-all active:bg-opacity-80'>Update Profile</button>
                                <button onClick={logOut} className='rounded-none bg-secondary flex-1 p-1 hover:bg-gray-dark transition-all active:bg-opacity-80'>Log Out</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className='my-56 text-center text-xl '>Your Are Not Logged In. Please
                            <Link to="/login" className='underline-offset-4 underline'> Login</Link>
                        </h2>
                    </div>
            }
        </div>
    );
};

export default UserProfile;