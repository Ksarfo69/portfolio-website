import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../pages/about'

describe(About, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<About/>)
        const container = screen.getByTestId("aboutcontainer");
        const title = screen.getByTestId("title");
        const navbar = screen.getByTestId("navbar");
        const image1 = screen.getByTestId("image1");
        const info = screen.getByTestId("info");
        const image2 = screen.getByTestId("image2");
        const footer = screen.getByTestId("footer");
        

    
        expect(container).toBeInTheDocument();
        expect(title).toHaveTextContent("About");
        expect(navbar).toBeInTheDocument();
        expect(image1).toBeInTheDocument();
        expect(info).toBeInTheDocument();
        expect(image2).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    })
})