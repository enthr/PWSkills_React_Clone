import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { courseList, moreList } from '../Constants/List';

import Logo from '../assets/PWSkills_main.png';
import SearchIcon from '../assets/search_icon.svg';

function Header() {
    const navigate = useNavigate();

    const [hoverOnCourses, setHoverOnCourses] = useState(false);
    const [hoverOnMore, setHoverOnMore] = useState(false);
    
    return (
        <nav className="container mx-auto relative" onMouseLeave={() => {
            setHoverOnMore(false); 
            setHoverOnCourses(false)}
        }>
            <div className='flex justify-between items-center py-4'>
                <div className='w-[10%]'><Link to='/'><img src={Logo} alt="PWSkills Logo" /></Link></div>
                <div className='flex items-center gap-4 border border-[#B7B7B7B7] rounded px-4 py-2 w-[70%]'>
                    <img src={SearchIcon} alt="Search Icon" />
                    <input type="text" name="Search" id="Search" placeholder='What Do You Want To Learn ?' className='outline-none' />
                </div>
                <div className="w-[10%]">
                    <button className='text-white bg-[#534ED9] px-8 py-2 font-medium rounded-md' onClick={() => navigate('/signin', {replace: true})}>Login/Register</button>
                </div>
            </div>
            <ul className='flex justify-around items-center py-4'>
                <li onMouseEnter={() => setHoverOnCourses(true)}>
                    <Link to='https://pwskills.com/courses'>Courses &#709;</Link>
                </li>
                <li>
                    <Link to='https://lab.pwskills.com/'>PWSkills Lab</Link>
                </li>
                <li>
                    <Link to='https://jobs.pwskills.com/'>Job Portal</Link>
                </li>
                <li>
                    <Link to='https://experience.pwskills.com/'>Experience Portal</Link>
                </li>
                <li>
                    <Link to='https://affiliate.pwskills.com/'>Become an Affiliate</Link>
                </li>
                <li>
                    <Link to='https://halloffame.pwskills.com/'>Hall of Fame</Link>
                </li>
                <li onMouseEnter={() => setHoverOnMore(true)}>More &#709;</li>
            </ul>
            {hoverOnCourses && (
                <div className='absolute bg-[#FFFFFF] top-[100%] left-[3%] border rounded-md p-2'>
                    {courseList.map((item) => (
                        <div key={item.URL} className='my-2 hover:bg-[#f6f5fb] p-2'>
                            <Link to={item.URL}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            )}
            {hoverOnMore && (
                <div className='absolute bg-[#FFFFFF] top-[100%] right-[3%] border rounded-md p-2'>
                    {moreList.map((item) => (
                        <div key={item.URL} className='my-2 hover:bg-[#f6f5fb] p-2'>
                            <Link to={item.URL}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;