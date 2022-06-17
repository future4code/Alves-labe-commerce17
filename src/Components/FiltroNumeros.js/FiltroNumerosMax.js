import React, { Component } from 'react'
import CardProduto from '../CardProduto/CardProduto'

export default class FiltroNumerosMax extends Component {
  render() {
    let ListaFiltradaNumerosMaximos = this.props.lista.filter((numero) => {
        if (numero.preçoProduto > this.props.valorminimo) {
            return true
        } else {
            return false
        }
    })
    return (
        <>
        {ListaFiltradaNumerosMaximos.map(numero => {
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
