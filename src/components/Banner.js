import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading='lazy'
            src='https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg'
            alt=''
          />
        </div>

        <div>
          <img
            loading='lazy'
            src='https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg'
            alt=''
          />
        </div>

        <div>
          <img
            loading='lazy'
            src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'
            alt=''
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
