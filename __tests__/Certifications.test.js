import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Certifications from '../components/Certifications'

describe(Certifications, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Certifications/>)
        const container = screen.getByTestId("container");
        const list = screen.getByTestId("list");
        const heading = screen.getByTestId("heading");

    
        expect(container).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
    })
})