import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
    const CurrentDate = new Date();
    const year = CurrentDate.getFullYear();
    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg'>
                    <span className='text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 font-bold'>Chandigarh Colleges</span>
                    {/* &nbsp; */}
                    &copy; copyright {year} All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white' >
                    <a className=" hover:text-yellow-500  transition-all ease-in-out duration-300"
                        href='https://facebook.com/ashish kumar'>
                        <BsFacebook />
                    </a>
                    <a className="hover:text-accent transition-all ease-in-out duration-300" href='https://instagram.com/official_angle'>
                        <BsInstagram />
                    </a>
                    <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href='https://linkedin.com/in/ashish-prabhakar-42791324b'>
                        <BsLinkedin />
                    </a>
                    <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href='https://twitter.com/@AshishM8513'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    )
}

export default Footer
