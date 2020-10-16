import React from "react";
import { render, screen,act } from "@testing-library/react";
import userEvent from '@testing-library/react';
import BubblePage from "./BubblePage";
import {fetchColors} from "../api/fetchColors"
import App from "../App"

jest.mock('../api/fetchColors');

let colors =[
  {
      "color": "aqua",
      "code": {
          "hex": "#00ffff"
      },
      "id": 3
  },
  {
      "color": "aquamarine",
      "code": {
          "hex": "#7fffd4"
      },
      "id": 4
  },
  {
      "color": "lilac",
      "code": {
          "hex": "#9a99dd"
      },
      "id": 5
  },
  {
      "color": "softpink",
      "code": {
          "hex": "#dd99ba"
      },
      "id": 6
  },
  {
      "color": "bisque",
      "code": {
          "hex": "#dd9a99"
      },
      "id": 7
  },
  {
      "color": "softyellow",
      "code": {
          "hex": "#dcdd99"
      },
      "id": 8
  },
  {
      "color": "blanchedalmond",
      "code": {
          "hex": "#ffebcd"
      },
      "id": 9
  },
  {
      "color": "blue",
      "code": {
          "hex": "#6093ca"
      },
      "id": 10
  },
  {
      "color": "blueviolet",
      "code": {
          "hex": "#8a2be2"
      },
      "id": 11
  }
]

test("Fetches data and renders the bubbles", async () => {
  fetchColors.mockResolvedValueOnce(colors)

     render(<BubblePage/>)
    const color = screen.findByTestId(`/api/colors/${id}`);
    expect(color).toHaveLength(3)
})

//  test("Fetches data and renders the bubbles", async () => {
//   fetchColors.get.mockResolvedValueOnce(colors)
//   await act( async () => { render(<BubblePage/>)})
//  });
