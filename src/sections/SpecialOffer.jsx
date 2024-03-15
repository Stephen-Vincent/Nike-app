import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className="flex flex-col flex-1">
          <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
            <span className="text-coral-red">special </span> offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Excite your senses and elevate your style with our exclusive Special Offers! Dive into a world where performance meets fashion, and every step is an expression of your unique personality. Our limited-time promotions on the latest Nike collections are designed to empower your fitness journey and complement your everyday look. </p>
          <p className="mt-6 lg:max-w-lg info-text">Don't miss this opportunity to redefine your wardrobe with Nike's innovative designs and unparalleled comfort. Our Special Offers include a wide range of sneakers, apparel, and accessories, meticulously crafted to support your active lifestyle and fashion aspirations. With discounts up to 30% off, free shipping on orders over a certain value, and exclusive online-only deals. </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={arrowRight}/>
            <Button label="Learn More" backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            />
          </div>
          

        </div>
      </section>
  )
}

export default SpecialOffer