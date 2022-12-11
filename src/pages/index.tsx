import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { useState } from "react"
import { Arrow } from "../components/Arrow"
import camiseta1 from "../assets/Shirt/1.png"



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides:{
      perView: 3,
      spacing: 48
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <div> 
        {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
      </div>

    </HomeContainer>
  )
}
