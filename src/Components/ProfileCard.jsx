import Profile from '../assets/profile.jpeg';

function ProfileCard() {
    return (
        <div className="rounded-xl shadow-lg flex flex-col items-center gap-6 p-12">
            <img src={Profile} alt="Profile Image" className='rounded-[50%]' />
            <h2 className='text-[1.5rem] font-semibold'>Dharmendra Kumar Yadav</h2>
            <h3 className='text-[#757575] text-[0.9rem]'>Cognizant, Data Science Associate</h3>
            <p className='text-center text-[1.1rem] font-light'>Ineuron.ai came into existence exactly when I needed it the most.</p>
        </div>
    );
};

export default ProfileCard;