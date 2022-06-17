import CardProduto from "../CardProduto/CardProduto";
import React, { Component } from 'react'

export default class FiltroNumeros extends Component {
   
    
    render() {
        let ListaFiltradaNumeros = this.props.lista.filter((numero) => {
            if (numero.preçoProduto >= this.props.valorminimo) {
                return true
            } else {
                return false
            }
        }).filter((numero) => {
            if (numero.preçoProduto <= this.props.valormaximo) {
                return true
            } else {
                return false
            }

        })

        let ListaFiltradaNumerosMinimos = this.props.lista.filter((numero) => {
            if (numero.preçoProduto > this.props.valorminimo) {
                return true
            } else {
                return false
            }
        })

        let ListaFiltradaNumerosMaximos = this.props.lista.filter((numero) => {
            if (numero.preçoProduto > this.props.valorminimo) {
                return true
            } else {
                return false
            }
        })

        const renderizaFiltroDeNumeros = () => {
            if (this.props.valorminimo !== 0) {
                return ListaFiltradaNumerosMinimos.map((numero) => {
                    return <CardProduto
                    fotoProduto={numero.fotoProduto}
                    nomeProduto={numero.nomeProduto}
                    descrição={numero.descrição}
                    preçoProduto={numero.preçoProduto}
                     />
                }) 
            } else if (this.props.valormaximo !== 0) {
                return ListaFiltradaNumerosMaximos.map((numero) => {
                    return <CardProduto
                    fotoProduto={numero.fotoProduto}
                    nomeProduto={numero.nomeProduto}
                    descrição={numero.descrição}
                    preçoProduto={numero.preçoProduto}
                     />
                })
            } else if (this.props.valorminimo && this.props.valormaximo !== 0) {
                return ListaFiltradaNumeros.map((numero) => {
                    return <CardProduto
                    fotoProduto={numero.fotoProduto}
                    nomeProduto={numero.nomeProduto}
                    descrição={numero.descrição}
                    preçoProduto={numero.preçoProduto}
                     />
                })
            }
        }

        console.log(ListaFiltradaNumeros)
        console.log(this.props.valormaximo)
        console.log(this.props.valorminimo)
        console.log(this.props.preco)
        return (
            <>
                {ListaFiltradaNumeros.map(numero => {
                    return <CardProduto
                        fotoProduto={numero.fotoProduto}
                        nomeProduto={numero.nomeProduto}
                        descrição={numero.descrição}
                        preçoProduto={numero.preçoProduto}
                         />
                })}
                
            </>
        )
    }
}

