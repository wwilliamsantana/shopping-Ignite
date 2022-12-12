import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import camiseta1 from "../assets/Shirt/1.png"
import { GetServerSideProps } from "next"

export default function Home(props) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides:{
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">

      <h1>{JSON.stringify(props.list)}</h1>
      
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

    </HomeContainer>
  )
}


export const getServerSideProps: GetServerSideProps = () => {
  return {
    props:{
      list: [1,2,3,4,5]
    }
  }
}
