import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Education from '../components/Education'

describe(Education, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Education/>)
        const container = screen.getByTestId("container");
        const list = screen.getByTestId("list");
        const heading = screen.getByTestId("heading");

    
        expect(container).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
    })
})