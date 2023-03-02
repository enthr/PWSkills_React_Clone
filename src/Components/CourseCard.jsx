import courseImg from '../assets/courseImage.jpg';

function CourseCard() {
    return (
        <div className='bg-[#FFFFFF] p-6 shadow-lg'>
            <div className=""><img src={courseImg} alt="Course Image" /></div>
            <h1 className='text-[#5a4bda] text-[1.25rem] font-semibold my-4'>Data Science Masters</h1>
            <p className="mt-8">Krish Naik</p>
            <h2 className='my-2'>Rs. 2975</h2>          
        </div>
    );
};
export default CourseCard;