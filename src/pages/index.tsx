import { styled } from "../styles"


const Button = styled("button", {

  backgroundColor: "$green500",
  padding: "10px 12px",
  borderRadius: 6,
  color: "White",
  alignSelf: "flex-start",

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
