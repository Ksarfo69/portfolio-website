import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Resume from '../pages/resume'

describe(Resume, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Resume/>)
        const container = screen.getByTestId("resumecontainer");
        const title = screen.getByTestId("title");
        const navbar = screen.getByTestId("navbar");
        const generalinfo = screen.getByTestId("generalinfo");
        const summary = screen.getByTestId("summary");
        const interests = screen.getByTestId("interests");
        const education = screen.getByTestId("education");
        const experience = screen.getByTestId("experience");
        const certifications = screen.getByTestId("certifications");
        const footer = screen.getByTestId("footer");

    
        expect(container).toBeInTheDocument();
        expect(title).toHaveTextContent("Resume");
        expect(navbar).toBeInTheDocument();
        expect(generalinfo).toBeInTheDocument();
        expect(summary).toBeInTheDocument();
        expect(interests).toBeInTheDocument();
        expect(education).toBeInTheDocument();
        expect(experience).toBeInTheDocument();
        expect(certifications).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    })
})