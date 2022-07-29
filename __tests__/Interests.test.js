import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Interests from '../components/Interests'

describe(Interests, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Interests/>)
        const container = screen.getByTestId("container");
        const heading = screen.getByTestId("heading");
        const list = screen.getByTestId("list");
        const heading2 = screen.getByTestId("heading2");
        const softwares = screen.getByTestId("softwares");
    
        expect(container).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(heading2).toBeInTheDocument();
        expect(softwares).toBeInTheDocument();
        expect(list).toBeInTheDocument();
    })
})