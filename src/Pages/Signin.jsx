import { Link } from 'react-router-dom';

import Logo from '../assets/PWSkills_main.png';
import Card from '../assets/signin_card.png';
import Icon from '../assets/google.png';

function Signin() {
  return (
    <>
        <header className='bg-[#FBFEFF]'>
            <nav className="container mx-auto">
                <div className='w-[10%] my-8'>
                    <Link to='/' className=''><img src={Logo} alt="PWSkills Logo" /></Link>
                </div>
            </nav>
        </header>
        <main className='bg-[#FBFEFF]'>
            <section className='container mx-auto'>
                <div className='w-[90%] mx-auto bg-[#FFFFFF] mt-28 drop-shadow-xl'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[40%]'><img src={Card} alt="SignIn Card" className='rounded-r-3xl' /></div>
                        <div className='w-[60%] flex flex-col items-center gap-8'>
                            <h2 className='text-3xl'>Welcome To</h2>
                            <h1 className='text-5xl font-bold'>PW Skills</h1>
                            <p>Please enter your phone number to login/register.</p>
                            <div className='border border-[#000000] px-14 py-2 rounded-lg'><input type="tel" name="Phone" id="Phone" placeholder='Enter Your Phone Number' className='outline-none' /></div>
                            <button className='text-white bg-[#534ED9] font-medium px-20 py-4 rounded-xl'>Get OTP</button>
                            <p className='flex justify-center gap-2 items-center w-[80%]'><hr className='w-[40%]' />OR<hr className='w-[40%] text-[#757575]' /></p>
                            <button className='flex items-center gap-4 border-2 p-2'><img src={Icon} alt="Google" /><p>Sign in With Google</p></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};
export default Signin;