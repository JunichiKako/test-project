import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => {
  test("renders correctly", () => {
  render(<Greet />)
  const textElemnt = screen.getByText(/hello/i)
  expect(textElemnt).toBeInTheDocument()
})

test("renders with a name", () => {
  render(<Greet name="Jun"/>)
  const textElemnt = screen.getByText("Hello Jun")
  expect(textElemnt).toBeInTheDocument()
})
})

