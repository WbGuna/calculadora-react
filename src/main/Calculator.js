import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'

const condicaoInicial = {
    displayValue: '0',
    clearDisplay: false,

}

const valores = {
    valor1: [0],
    valor2: [0]
}

class Calculator extends Component {


    valor = {
        ...valores
    }
    state = {
        ...condicaoInicial
    }

    apagar = () => {
        this.setState({ ...condicaoInicial })
    }

    imprimir = (valor) => {
        let tela = this.state.displayValue
        if(valor != "+" && valor != "-" && valor != "*" && valor != "/"){
        if (tela == " " || tela == 0) {
            this.setState({ displayValue: valor })
            this.valor.valor1 = tela
        } else {
            tela += valor
            this.setState({ displayValue: tela })
            this.valor.valor1 = tela
        }
        }

    }


    resultado = (operation) => {
        let tela = this.state.displayValue

        if(operation == "="){
            for (var i = 0; i < tela.length(); i++) {
                let caracter = tela.charAt(i)
    
                if (caracter == '+') {
    
                    let primeiraParte = tela.substring(0, i);
                    let segundaParte = tela.substring(i + 1, tela.length());
    
                    let resultado = primeiraParte + segundaParte;
    
                    this.setState({ displayValue: resultado })
    
                } else if (caracter == '-') {
    
                    let primeiraParte = tela.substring(0, i);
                    let segundaParte = tela.substring(i + 1, tela.length());
    
                    let resultado = primeiraParte + segundaParte;
    
                    this.setState({ displayValue: resultado })
    
                } else if (caracter == 'x') {
    
                    let primeiraParte = tela.substring(0, i);
                    let segundaParte = tela.substring(i + 1, tela.length());
    
                    let resultado = primeiraParte + segundaParte;
    
                    this.setState({ displayValue: resultado })
    
                } else if (caracter == '/') {
    
                    let primeiraParte = tela.substring(0, i);
                    let segundaParte = tela.substring(i + 1, tela.length());
    
                    let zero = segundaParte
    
                  
    
                    if (zero == 0) {
                        this.setState({ displayValue: "Erro" })
    
                    } else {
    
                        let resultado = primeiraParte / segundaParte;
    
                        this.setState({ displayValue: resultado })
                    }
                }
            }
        
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple clear={this.apagar} />
                <Button label="/" operation click={this.imprimir} />
                <Button label="7" click={this.imprimir} />
                <Button label="8" click={this.imprimir} />
                <Button label="9" click={this.imprimir} />
                <Button label="*" operation click={this.imprimir} />
                <Button label="4" click={this.imprimir} />
                <Button label="5" click={this.imprimir} />
                <Button label="6" click={this.imprimir} />
                <Button label="-" operation click={this.imprimir} />
                <Button label="3" click={this.imprimir} />
                <Button label="2" click={this.imprimir} />
                <Button label="1" click={this.imprimir} />
                <Button label="+" operation click={this.imprimir} />
                <Button label="0" double click={this.imprimir} />
                <Button label="." click={this.imprimir} />
                <Button label="=" operation click={this.resultado} />
            </div>
        )
    }
}

export default Calculator