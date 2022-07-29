import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from '../components/Menu'

describe(Menu, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Menu/>)
        const menuicon = screen.getByTestId("menuicon");
        expect(menuicon).toBeInTheDocument();
    })

    it("checks that clicking the menu icon shows the menu", ()=>{
        render(<Menu/>)
        const menuicon = screen.getByTestId("menuicon");
        expect(menuicon).toBeInTheDocument();
        fireEvent.click(menuicon)

        const closeicon = screen.getByTestId("closeicon");
        expect(closeicon).toBeInTheDocument();

      
        const links = screen.getByTestId("links");  
        expect(links).toBeInTheDocument();

    })

    it("checks that clicking the close icon hides the menu", ()=>{
        render(<Menu/>)
        const menuicon = screen.getByTestId("menuicon");
        expect(menuicon).toBeInTheDocument();
        fireEvent.click(menuicon)

        const closeicon = screen.getByTestId("closeicon");
        expect(closeicon).toBeInTheDocument();

      
        const links = screen.getByTestId("links");  
        expect(links).toBeInTheDocument();

        fireEvent.click(closeicon)
        expect(links).not.toBeInTheDocument();
    })
})