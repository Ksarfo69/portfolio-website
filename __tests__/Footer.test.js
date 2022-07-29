import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

describe(Footer, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Footer/>)
        const container = screen.getByTestId("container");
        const links = screen.getByTestId("links");
        const name = screen.getByTestId("name");

    
        expect(container).toBeInTheDocument();
        expect(links).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    })
})