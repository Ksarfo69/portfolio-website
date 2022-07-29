import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Generalinfo from '../components/Generalinfo'

describe(Generalinfo, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Generalinfo/>)
        const container = screen.getByTestId("container");
        const heading = screen.getByTestId("heading");
        const name = screen.getByTestId("name");
        const personalinfo = screen.getByTestId("personalinfo");
        
        expect(container).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(personalinfo).toBeInTheDocument();
        
    })
})