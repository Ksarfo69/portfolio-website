import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from '../pages/projectsPageForIndex'

describe(Projects, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Projects/>)
        const container = screen.getByTestId("mobileprojectscontainer");
        const title = screen.getByTestId("title");
        const projects = screen.getByTestId("projects");
        const navbar = screen.getByTestId("navbar")
        

    
        expect(container).toBeInTheDocument();
        expect(title).toHaveTextContent("Projects");
        expect(projects).toBeInTheDocument();
        expect(navbar).toHaveTextContent("Projects")
    })
})