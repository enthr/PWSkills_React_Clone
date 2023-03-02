import { Link } from 'react-router-dom';

import Logo from '../assets/PWSkills_white.png';
import ISO from '../assets/iso.svg';

function Footer() {
    return (
        <nav className="bg-[#1b2124] text-[#FFFFFF]">
            <div className="container mx-auto pt-16 pb-10">
                <div className="flex justify-between items-start">
                    <div className="w-[30%]">
                        <div className='w-[80%]'><img src={Logo} alt="PWSkills Logo" /></div>
                        <p className='text-lg my-8'><span className='font-bold'>Email Us:</span> <Link to='mailto:support@pwskills.com'>support@pwskills.com</Link></p>
                        <div>
                            <img src={ISO} alt="ISO Image" />
                            <p className='ml-4 mt-4 font-medium'>ISO 9001</p>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <h1 className='text-[2rem] font-medium'>PW Skills</h1>
                        <hr className="text-[#f7a654] bg-[#f7a654] border border-[#f7a654] my-6 w-[50%]" />
                        <ul className='text-[1.25rem] flex flex-col gap-4'>
                            <li><Link to='https://pwskills.com/about-us'>About Us</Link></li>
                            <li><Link to='https://pwskills.com/faqs'>FAQs</Link></li>
                            <li><Link to='https://pwskills.com/privacy-policy'>Privacy Policy</Link></li>
                            <li><Link to='https://pwskills.com/contact-us'>Contact Us</Link></li>
                            <li><Link to='https://pwskills.com/job-assistance'>Job Assistance</Link></li>
                            <li><Link to='terms-and-conditions'>Terms and Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="w-[30%]">
                        <h1 className='text-[2rem] font-medium'>Products</h1>
                        <hr className="text-[#f7a654] bg-[#f7a654] border border-[#f7a654] my-6 w-[50%]" />
                        <ul className='text-[1.25rem] flex flex-col gap-4'>
                            <li><Link to='https://lab.pwskills.com/'>PWSkills Lab</Link></li>
                            <li><Link to='https://jobs.pwskills.com/'>Job Portal</Link></li>
                            <li><Link to='https://experience.pwskills.com/'>Experience Portal</Link></li>
                            <li><Link to='https://affiliate.pwskills.com/'>Become an Affiliate</Link></li>
                            <li><Link to='https://halloffame.pwskills.com/'>Hall of Fame</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Footer;