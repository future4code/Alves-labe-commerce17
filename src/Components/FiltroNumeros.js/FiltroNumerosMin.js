import React, { Component } from 'react'
import CardProduto from '../CardProduto/CardProduto'

export default class FiltroNumerosMin extends Component {
  render() {
    
    let ListaFiltradaNumerosMinimos = this.props.lista.filter((numero) => {
        if (numero.preçoProduto > this.props.valorminimo) {
            return true
        } else {
            return false
        }
    })

    return (
      <>{ListaFiltradaNumerosMinimos.map(numero => {
        return <CardProduto
            fotoProduto={numero.fotoProduto}
            nomeProduto={numero.nomeProduto}
            descrição={numero.descrição}
            preçoProduto={numero.preçoProduto}
             />
    })}</>
    )
  }
}
