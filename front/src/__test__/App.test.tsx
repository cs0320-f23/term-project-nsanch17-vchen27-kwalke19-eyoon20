import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Home from '../pages/Home'

test('MustBeTrue', () => {
    expect(true).toBe(true)
})

test('Open Home', () => {
    render(<Home />)
    expect(true).toBe(true)
})