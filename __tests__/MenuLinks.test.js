import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import MenuLinks from '../components/MenuLinks'

describe(MenuLinks, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<MenuLinks/>)
        const container = screen.getByTestId("container");
        expect(container).toBeInTheDocument();
    })
})