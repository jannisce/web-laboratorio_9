import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import Calculadora from "./Calculadora"
import { describe, it } from "vitest"

describe('Componente Calculadora', () => {
    it('Renderiza el componente', () => {
        render(<Calculadora />)
    })

    it('Realiza la suma correctamente', () => {
        render(<Calculadora />)
      
        const resultadoEsperado = '7'
        const display = screen.queryAllByText('0')[0]
        const boton1 = screen.getByText('3')
        const boton2 = screen.getByText('4')
        const botonSumar = screen.getByText('+')
        const botonIgual = screen.getByText('=')
      
        fireEvent.click(boton1)
        fireEvent.click(botonSumar)
        fireEvent.click(boton2)
        fireEvent.click(botonIgual)
      
        expect(display.textContent).toBe(resultadoEsperado)
    })
    
    it('Realiza la resta correctamente', () => {
        render(<Calculadora />)
      
        const resultadoEsperado = '5'
        const display = screen.queryAllByText('0')[0]
        const boton1 = screen.getByText('8')
        const boton2 = screen.getByText('3')
        const botonRestar = screen.getByText('-')
        const botonIgual = screen.getByText('=')
      
        fireEvent.click(boton1)
        fireEvent.click(botonRestar)
        fireEvent.click(boton2)
        fireEvent.click(botonIgual)
      
        expect(display.textContent).toBe(resultadoEsperado)
    })
      
    it('Realiza la multiplicación correctamente', () => {
        render(<Calculadora />)
      
        const resultadoEsperado = '24'
        const display = screen.queryAllByText('0')[0]
        const boton1 = screen.getByText('4')
        const boton2 = screen.getByText('6')
        const botonMultiplicar = screen.getByText('x')
        const botonIgual = screen.getByText('=')
      
        fireEvent.click(boton1)
        fireEvent.click(botonMultiplicar)
        fireEvent.click(boton2)
        fireEvent.click(botonIgual)
      
        expect(display.textContent).toBe(resultadoEsperado)
    })
      
    it('Realiza la división correctamente', () => {
        render(<Calculadora />)
      
        const resultadoEsperado = '2'
        const display = screen.queryAllByText('0')[0]
        const boton1 = screen.getByText('8')
        const boton2 = screen.getByText('4')
        const botonDividir = screen.getByText('÷')
        const botonIgual = screen.getByText('=')
      
        fireEvent.click(boton1)
        fireEvent.click(botonDividir)
        fireEvent.click(boton2)
        fireEvent.click(botonIgual)
      
        expect(display.textContent).toBe(resultadoEsperado)
    })

    it('Actualiza el display al presionar un botón', () => {
        render(<Calculadora />)
      
        const valorBoton1 = '7'
        const valorBoton2 = '3'
        const valorEsperado1 = valorBoton1
        const valorEsperado2 = valorBoton1 + valorBoton2
      
        const display = screen.queryAllByText('0')[0]
        const boton1 = screen.getByText(valorBoton1)
        const boton2 = screen.getByText(valorBoton2)
      
        fireEvent.click(boton1)
        expect(display.textContent).toBe(valorEsperado1)
      
        fireEvent.click(boton2)
        expect(display.textContent).toBe(valorEsperado2)
    })
      
    it('Probando el punto decimal', () => {
        render(<Calculadora />)
      
        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('.')
        const button2 = screen.getByText('5')
      
        fireEvent.click(button1)
        fireEvent.click(button2)
      
        const valorEsperado = '0.5'
        expect(display.textContent).toBe(valorEsperado)
    })
      
    it('Probando el botón +/-', () => {
        render(<Calculadora />)
      
        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('6')
        const button2 = screen.getByText('±')
      
        fireEvent.click(button1)
        fireEvent.click(button2)
      
        const valorEsperado = '-6'
        expect(display.textContent).toBe(valorEsperado)
    })
      
    it('Probando el límite de 9 dígitos', () => {
        render(<Calculadora />)
      
        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('9')
        const divButton = screen.getByText('÷')
        const button2 = screen.getByText('7')
        const equalsButton = screen.getByText('=')
      
        fireEvent.click(button1)
        fireEvent.click(divButton)
        fireEvent.click(button2)
        fireEvent.click(equalsButton)
      
        const valorEsperado = 'ERR'
        expect(display.textContent).toBe(valorEsperado)
    })
      
    it('Probando el límite de 9 dígitos 2', () => {
        render(<Calculadora />)
      
        const display = screen.queryAllByText('0')[0]
        const button = screen.getByText('3')
      
        for (let i = 0; i < 11; i++) {
          fireEvent.click(button)
        }
    
        const valorEsperado2 = '333333333'
        expect(display.textContent).toBe(valorEsperado)
      })
      
    it('Probando boton AC', () => {
        render(<Calculadora />)

        const display = screen.queryAllByText('0')[0]
        const button1 = screen.getByText('1')
        const ac = screen.getByText('AC')

        fireEvent.click(button1)
        fireEvent.click(ac)

        expect(display.textContent).toBe('0')
    })

})