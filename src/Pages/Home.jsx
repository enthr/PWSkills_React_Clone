import { Link } from 'react-router-dom';

import Carousel from '../Components/Carousel';
import ProfileCard from '../Components/ProfileCard';

import CompanyLogo from '../assets/servify.png';
import BookIcon from '../assets/books_icon.svg';
import CreditIcon from '../assets/credit_card_icon.svg';
import StudentIcon from '../assets/student_icon.svg';
import neurolabIcon from '../assets/neurolab_icon.svg';
import jobportalIcon from '../assets/jobPortal_icon.svg';
import halloffameIcon from '../assets/halloffame_icon.svg';
import affiliateIcon from '../assets/affilitatePortal_icon.svg';
import internshipIcon from '../assets/Internship_icon.svg';
import CourseCard from '../Components/CourseCard';



function Home() {
    return (
        <>
            <section className='w-full'><Carousel /></section>

            {/* Achievements Section */}
            <div className="bg-[#fbfeff] py-16">
                <div className="container mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>"Pure Hardwork, No Shortcuts!"</h1>
                    <hr className='text-[#f7a654] bg-[#f7a654] border border-[#f7a654] py-[0.05rem] w-[10%] ml-[45%] mt-2 mb-16' />
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col justify-between items-center gap-6">
                            <img src={BookIcon} alt="Achievement 1" className='w-[70%]' />
                            <h2 className='text-[#1B2124] text-[2rem] font-semibold'>600+</h2>
                            <h3 className='text-[#757575] text-[2rem] font-semibold'>Different Courses</h3>
                        </div>
                        <div className="flex flex-col justify-between items-center gap-6">
                            <img src={StudentIcon} alt="Achievement 2" className='w-[70%]' />
                            <h2 className='text-[#1B2124] text-[2rem] font-semibold'>700000+</h2>
                            <h3 className='text-[#757575] text-[2rem] font-semibold'>Students Enrolled</h3>
                        </div>
                        <div className="flex flex-col justify-between items-center gap-6">
                            <img src={CreditIcon} alt="Achievement 3" className='w-[60%]' />
                            <h2 className='text-[#1B2124] text-[2rem] font-semibold'>10000+</h2>
                            <h3 className='text-[#757575] text-[2rem] font-semibold'>Successful Transition</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <section className='bg-[#EAECEF] py-16'>
                <div className="container mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>Our Achiever's Work with</h1>
                    <div className='flex justify-between items-center mt-12 mb-4'>
                        <img src={CompanyLogo} alt="Partner 1" />
                        <img src={CompanyLogo} alt="Partner 2" />
                        <img src={CompanyLogo} alt="Partner 3" />
                        <img src={CompanyLogo} alt="Partner 4" />
                        <img src={CompanyLogo} alt="Partner 5" />
                    </div>
                </div>
            </section>

            {/* Hall of Fame Section */}
            <section className='bg-[#fbfeff] py-16'>
                <div className="container mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>Hall Of Fame</h1>
                    <div className="flex items-center gap-8 my-12">
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div>
                    <p className='text-center text-[#757575] text-[1.25rem] mt-2 font-semibold'><Link to='hall-of-fame'>View More</Link></p>
                </div>
            </section>

            {/* Popular Courses */}
            <section className='bg-[#fbfeff] py-16'>
                <div className="w-[60%] mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>Popular Programs</h1>
                    <p className='text-center text-[#757575] my-2'>Most in demand and watched by people.</p>
                    <div className="flex items-center gap-8 my-8">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    <p className='text-center text-[#757575] text-[1.25rem] mt-2 font-semibold'><Link to='https://pwskills.com/courses'>View More</Link></p>
                </div>
            </section>

            {/* Affordable Courses */}
            <section className='bg-[#fbfeff] py-16'>
                <div className="w-[60%] mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>Affordable Programs</h1>
                    <p className='text-center text-[#757575] my-2'>Find your favourite courses in pocket-friendly ways.</p>
                    <div className="flex items-center gap-8 my-8">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    <p className='text-center text-[#757575] text-[1.25rem] mt-2 font-semibold'><Link to='https://pwskills.com/courses'>View More</Link></p>
                </div>
            </section>            

            {/* Community Courses */}
            <section className='bg-[#fbfeff] py-16'>
                <div className="w-[60%] mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>Community Programs</h1>
                    <p className='text-center text-[#757575] my-2'>Open to all pro-live classes on Youtube for free.</p>
                    <div className="flex items-center gap-8 my-8">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    <p className='text-center text-[#757575] text-[1.25rem] mt-2 font-semibold'><Link to='https://pwskills.com/courses'>View More</Link></p>
                </div>
            </section>

            {/* Our Services */}
            <section className='bg-[#fbfeff] py-32'>
                <div className="w-[70%] mx-auto">
                    <h1 className='text-center text-[#5a4bda] text-[3rem] font-semibold'>Our Products</h1>
                    <div className="flex justify-between items-center gap-8 my-20">
                        <div className='w-[30%] flex flex-col items-center gap-8'>
                            <div><img src={neurolabIcon} alt="Icon" /></div>
                            <h2 className='text-[1.5rem] font-semibold'>PW Skills Lab</h2>
                            <p className='text-center  text-[1.1rem] text-[#757575]'>Supercharge your project development with our robust lab.</p>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-8'>
                            <div><img src={jobportalIcon} alt="Icon" /></div>
                            <h2 className='text-[1.5rem] font-semibold'>Job Portal</h2>
                            <p className='text-center text-[1.1rem] text-[#757575]'>Use exceptional templates for a stand-out resume minus the sign up process.</p>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-8'>
                            <div><img src={internshipIcon} alt="Icon" /></div>
                            <h2 className='text-[1.5rem] font-semibold'>Experience Portal</h2>
                            <p className='text-center text-[1.1rem] text-[#757575]'>PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className='w-[30%] flex flex-col items-center gap-8'>
                            <div><img src={affiliateIcon} alt="Icon" /></div>
                            <h2 className='text-[1.5rem] font-semibold'>Become an Affiliate</h2>
                            <p className='text-center text-[1.1rem] text-[#757575]'>Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-8'>
                            <div><img src={halloffameIcon} alt="Icon" /></div>
                            <h2 className='text-[1.5rem] font-semibold'>Hall of Fame</h2>
                            <p className='text-center text-[1.1rem] text-[#757575]'>Our student placements and 100K+ career transitions speak volumes about our courses.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;