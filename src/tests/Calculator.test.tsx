import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
    test('renders calculator form', () => {
        render(<Calculator />);
        expect(screen.getByText("String Calculator")).toBeInTheDocument();
    });

    test('calculates sum for valid input', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByLabelText(/enter your numbers/i), { target: { value: "1,2,3" } });
        fireEvent.click(screen.getByText(/calculate/i));
        expect(screen.getByText("Sum: 6")).toBeInTheDocument();
    });

    test('handles custom delimiter', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByLabelText(/enter your numbers/i), { target: { value: "//;\n1;2" } });
        fireEvent.click(screen.getByText(/calculate/i));
        expect(screen.getByText("Sum: 3")).toBeInTheDocument();
    });

    test('handles negative numbers with error', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByLabelText(/enter your numbers/i), { target: { value: "1,-2,3" } });
        fireEvent.click(screen.getByText(/calculate/i));
        expect(screen.getByText("Negative numbers not allowed: -2")).toBeInTheDocument();
    });
});