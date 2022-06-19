import styled from "styled-components";
import React, { Component } from 'react'
const DivCardProdutos = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
border-radius: 2%;
background-color: #7D5FFF;
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
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`
const BotãoCarrinho = styled.button`
  color: #FFFFFF;
align-self: center;
-webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 35%;
  height: 46px;
  text-align: center;
  background-color: #fff;
  border: solid 1px #74747480;
  border-radius: 4px;
  color: #192C53;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.8s;
  background-position: center;
    :hover {
  background: #192C53 radial-gradient(circle, transparent 1%,#192C53 1%) center/15000%;
  color: #FFFFFF;
  }
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
          <BotãoCarrinho name="Carrinho">Adicionar ao Carrinho <span>:carrinho_de_supermercado:</span></BotãoCarrinho>
        </DivNomeEValores>
      </DivCardProdutos>
    )
  }
}