import { styled } from "../styles"


const Button = styled("button", {

  backgroundColor: "$rocketseat",
  padding: "4px 6px",
  borderRadius: 6,
  color: "White",

  "&:hover":{
    filter: "brightness(0.8)"
  }

})


export default function Home() {
  return (
    <Button>
      Hello World
    </Button>
  )
}
