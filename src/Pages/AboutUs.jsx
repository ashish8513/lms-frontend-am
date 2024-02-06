import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import aboutImage from "../assets/Image/HomePageImage.png"
import abj from "../assets/Image/apj.png"
import billGates from "../assets/Image/bill gates.png"
import enstine from "../assets/Image/enstine.png"
import steveJobs from "../assets/Image/setve jobs.png"
import nelsonMandela from "../assets/Image/nelson mandela.png";
import CarouselSlide from '../Components/CarouselSlide'
function AboutUs() {

    return (
        <HomeLayout>
            <div className='pl-20 pt-20 flex flex-col text-white'>
                <div className='flex items-center gap-5 mx-10'>
                    <section className='w-1/2 space-y-10'>
                        <h1 className='text-5xl text-yellow-500 font-semibold'>
                            Affordalbe and quality check
                        </h1>
                        <p className='text-xl text-gray-200'>Our goal is to provide the affordable and quality education to the world .
                            we are providing the platform for the aspiring teachers and students to share theri slills creativety and knowledge to each other to empower and contribute in the growth and wellness of mankind </p>
                    </section>

                    <div className="w-1/2">
                        <img
                            id='test1'
                            style={{
                                filter: "drop-shadow(0px, 10px, 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className='drop-shadow-2xl'
                            src={aboutImage} />
                    </div>
                </div>

                <div class="carousel w-1/2 my-16 m-auto">
                    {/* <CarouselSlide /> */}
                    <div id="slide1" class="carousel-item relative w-full">

                        <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={billGates} class="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>
                                {"Patience is a key element of success..."}
                            </p>
                            <h3 className='text-2xl font-semibold'>Bill Gates</h3>
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>
                    <div id="slide2" class="carousel-item relative w-full">

                        <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={abj} class="w-40 rounded-full border-2 border-gray-400 	object-fit: cover " />
                            <p className='text-xl text-gray-200'>
                                {"You have to dream before your dreams can come true."}
                            </p>
                            <h3 className='text-2xl font-semibold'>APJ.Abdul Kalam</h3>
                            <div class="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>
                    <div id="slide3" class="carousel-item relative w-full">

                        <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={enstine} class="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>
                                {"Anyone who has never made a mistake has never tried anything new"}
                            </p>
                            <h3 className='text-2xl font-semibold'>Albert Enstien</h3>
                            <div class="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide4" class="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>
                    <div id="slide4" class="carousel-item relative w-full">

                        <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={steveJobs} class="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>
                                {"Innovation distinguishes between a leader and a follower."}
                            </p>
                            <h3 className='text-2xl font-semibold'>Streve Job</h3>
                            <div class="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" class="btn btn-circle">❮</a>
                                <a href="#slide5" class="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>
                    <div id="slide5" class="carousel-item relative w-full">

                        <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={nelsonMandela} class="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>
                                {"A winner is a dreamer who never gives up."}
                            </p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div class="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle">❮</a>
                                <a href="#slide6" class="btn btn-circle">❯</a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs
