function CarouselSlide({ image, name, description, SlideNumber, totalSlides }) {
    return (
        <div id={`slide${SlideNumber}`} class="carousel-item relative w-full">

            <div className=' flex flex-col items-center justify-center gap-4 px-[15%]'>
                <img src={image} class="w-40 rounded-full border-2 border-gray-400" />
                <p className='text-xl text-gray-200'>
                    {description}
                </p>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${(SlideNumber ==1 ? totalSlides : (SlideNumber - 1))}`} class="btn btn-circle"></a>
                    <a href={`#slide${(SlideNumber) % totalSlides + 1}`} class="btn btn-circle">❯</a>
                </div>
            </div>


        </div>)
}

export default CarouselSlide
