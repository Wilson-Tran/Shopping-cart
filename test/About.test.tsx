import { describe, expect, test, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../src/pages/About';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';


// describe("About page test", () => {
//   test("Should show About", () => {
//     render(<About />)
//     expect(screen.getByText())
//   })
// })

it('Click the about router link', () => {
  render(<About />)

  expect(screen.getByText('About')).toBeInTheDocument()
  
  // const user = userEvent.setup()
  // const about = vi.spyOn(user, 'click')
  // const aboutLink = screen.getByText('about')

  // await user.click(aboutLink)
  // expect(about).toHaveBeenCalledTimes(1)
})