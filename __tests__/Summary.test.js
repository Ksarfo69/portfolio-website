import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Summary from '../components/Summary'

describe(Summary, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Summary/>)
        const container = screen.getByTestId("container");
        const heading = screen.getByTestId("heading");
        const heading1 = screen.getByTestId("heading1");
        const info = screen.getByTestId("info");
        const skills = screen.getByTestId("skills");
        expect(container).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(heading1).toBeInTheDocument();
        expect(info).toBeInTheDocument();
        expect(skills).toBeInTheDocument();
    })
})