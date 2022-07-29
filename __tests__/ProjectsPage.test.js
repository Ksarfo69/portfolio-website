import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from '../pages/projects'

describe(Projects, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Projects/>)
        const container = screen.getByTestId("projectspagecontainer");
        const title = screen.getByTestId("title");
        const projects = screen.getByTestId("projects");
        

    
        expect(container).toBeInTheDocument();
        expect(title).toHaveTextContent("Projects");
        expect(projects).toBeInTheDocument();
    })
})