import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'

describe(Navbar, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Navbar/>)
        const container = screen.getByTestId("container");
        const name = screen.getByTestId("name");
        const centernav = screen.getByTestId("centernav");
        const links = screen.getByTestId("links");
        expect(container).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(centernav).toBeInTheDocument();
        expect(links).toBeInTheDocument();
    })
})