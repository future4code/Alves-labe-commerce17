import styled from "styled-components";
import React, { Component } from 'react'

const CardCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #74747480;
`

const BotaoCarrinho = styled.button`
border:none;
background-color: #7d5fff;
font-size: 20;
height: 3vh;
:hover {
  cursor: pointer;
}`



export default class Carrinho extends Component {
  
  render() {
    return (
      <CardCarrinho>
        <p>{this.props.quantidade}</p>
        <p>{this.props.nomeProduto}</p>
        <p>{this.props.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <BotaoCarrinho onClick={() => this.props.removerItem(this.props.id)}><span role="img" aria-label="trash">🗑️</span></BotaoCarrinho>
        </CardCarrinho>
    )
  }
}
