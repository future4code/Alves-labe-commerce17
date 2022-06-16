import styled from "styled-components";
import React, { Component } from 'react'

const DivCardProdutos = styled.div`
display: flex;
flex-direction: column;
border: 2px solid;
background-color: #7d5fff;
`

const DivNomeEValores = styled.div`
padding: 16px;
display: flex;
flex-direction: column;

p {
  margin-bottom: 0;
  margin-top: 2px;
}

h4{
  margin-bottom: 0;
  margin-top: 5px;
}

h3{
  margin-bottom: 0;
}

h2{
  margin-bottom: 0;
  margin-top: 2px;
}
`

const PhotoProduto = styled.img`
width: 100%;
`

const BotãoCarrinho = styled.button`
align-self: center;
`

export default class CardProduto extends Component {
  render() {
    return (
      <DivCardProdutos>
          <PhotoProduto src={this.props.fotoProduto} alt={"Imagem do Produto"}></PhotoProduto>
          <DivNomeEValores>
          <h2>{this.props.nomeProduto}</h2>
          <p>{this.props.descrição}</p>
          <h4>R${this.props.preçoProduto},00</h4>
          <BotãoCarrinho name="Carrinho">Adicionar ao Carrinho</BotãoCarrinho>
          </DivNomeEValores>
         </DivCardProdutos>
    )
  }
}
