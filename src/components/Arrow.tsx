import { ArrowButton } from "./styles/Arrow";

export function Arrow(props: any) {
  return (
    <ArrowButton
      direction={props.left ? "left" : "right"}
      disabled={props.disabled}
    >
      <svg
      onClick={props.onClick}
      width="44"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
    </ArrowButton>
  )
}
