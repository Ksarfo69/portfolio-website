import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe(Home, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Home/>)
        const container = screen.getByTestId("homepagecontainer");
        const introduction = screen.getByTestId("introduction");
        

    
        expect(container).toBeInTheDocument();
        expect(introduction).toHaveTextContent("Kwame");
        expect(introduction).toHaveTextContent("Explore");
    })
})