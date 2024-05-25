import React from 'react'
import { GoPerson } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { FaStar } from 'react-icons/fa';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../../../firebase.config";
import { logout as userLogout } from "../../store/authSlice";

const Menu = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const hiddenEmail = userData.email.split('@')[0].slice(0,2) + "*".repeat(userData.email.split('@')[0].length-2)+ '@' + userData.email.split('@')[1];
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const googleLogout = async () => {
        try {
            await auth.signOut();
            dispatch(userLogout(null));
            localStorage.removeItem('user');
            navigate('/');
        } catch (error) {
            console.log("Error in googleLogout: ", error)
        }
    }
    return (
    <div className='w-full'>
        <div className='px-6'>
            <ul>
                <li className='flex gap-3 items-center py-2'>
                    <GoPerson  className='text-2xl opacity-40'/>
                    <span className='text-xs'>Profile</span>
                </li>
                <li className='flex gap-3 items-center py-2'>
                    <IoBookmarksOutline  className='text-2xl opacity-40'/>
                    <span className='text-xs'>Library</span>
                </li>
                <li className='flex gap-3 items-center py-2'>
                    <MdOutlineLibraryBooks  className='text-2xl opacity-40'/>
                    <span className='text-xs'>Stories</span>
                </li>
                <li className='flex gap-3 items-center py-2'>
                    <ImStatsBars className='text-2xl opacity-40'/>
                    <span className='text-xs'>Stats</span>
                </li>
            </ul>
        </div>
        <div className='h-[0.5px] bg-gray-300/50 my-5 w-full'></div>
        <div className="px-6">
            <ul>
                <li className='text-xs py-2'>Settings</li>
                <li className='text-xs py-2'>Refine recommendations</li>
                <li className='text-xs py-2'>Manage publications</li>
                <li className='text-xs py-2'>Help</li>
            </ul>
        </div>
        <div className='h-[0.5px] bg-gray-300/50 my-5 w-full'></div>
        <div className="px-6">
            <ul>
                <li className='text-xs py-2 flex justify-between items-center'>Become a Medium member <FaStar  className='text-yellow-400'/> </li>
                <li className='text-xs py-2'>Create a Mastodon account</li>
                <li className='text-xs py-2'>Apply for author verification</li>
                <li className='text-xs py-2'>Apply to the Partner Program</li>
                <li className='text-xs py-2'>Gift a membership</li>
            </ul>
        </div>
        <div className='h-[0.5px] bg-gray-300/50 my-5 w-full'></div>
        <div className="px-6 cursor-pointer"
        onClick={() => googleLogout()}
        >
            <ul>
                <li className='text-xs py-2'>Sign out</li>
                <li className='text-xs py-2 font-medium'>{hiddenEmail}</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu