import React, { Component } from 'react'
import styled from 'styled-components'

const GridLayout = styled.div`
height: 100vh;
width: 100vw;
display: grid;
grid-template-areas:"header header header"
                     "aside main nav"
                     "aside main nav"
                     "foot foot foot";
grid-template-rows: 1fr 4.5fr 5fr 1fr;
grid-template-columns: 1fr 4fr 1fr;
`;

const Header = styled.header`
grid-area: header;
background-color: red;
border: 1px solid;
`

const Footer = styled.footer`
background-color: blueviolet;
border: 2px;
grid-area: foot;
`

const MenuFiltros = styled.aside`
grid-area: aside;
display: flex;
border: 2px solid;
justify-content: flex-start;
justify-items: start;
padding: 20px;
`
const H1Sessão = styled.h1`
margin: 0px;
`

const H4Valores = styled.h4`
margin-bottom: 3px;
`

const LabelStyled = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
justify-content: flex-start;
`

const Input = styled.input`
display: flex;
flex-direction: column;
`

const LabelStyled2 = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
justify-content: flex-start;
`

const MenuCarrinho = styled.nav`
grid-area: nav;
border: 2px solid black;
display: flex;
padding: 20px;
`
const AreaProdutos = styled.main`
grid-area: main;
background-color: orange;
border: 2px solid black;
`

const DivProdutosLabel = styled.div`
padding: 0 16px;
display: flex;
justify-content: space-between;
align-items: center;

`

export default class App extends Component {

  render() {

    return (
      <GridLayout>
        <Header> </Header>

        <MenuFiltros>
          <div>
            <H1Sessão>Filtros</H1Sessão>
            <LabelStyled>
              <H4Valores>Valor Minimo: </H4Valores>
              <input type="number" placeholder="10" id="minimo" name="minimo"
                min="10" max="100" />
            </LabelStyled>
            <LabelStyled2>
              <H4Valores>Valor Máximo: </H4Valores>
              <input type="number" placeholder="1000" min="1" max="1000" />
            </LabelStyled2>
            <LabelStyled2><H4Valores>Busca por nome: </H4Valores></LabelStyled2>
            <input type="text" value="Produto"></input>

          </div>
        </MenuFiltros>

        <MenuCarrinho>
          <div>
            <H1Sessão>Carrinho: </H1Sessão>
            <H4Valores>Valor total: </H4Valores>
          </div>
        </MenuCarrinho>

        <AreaProdutos>
          <DivProdutosLabel>
            <p>Quantidade de produtos: 0</p>

            <label>Ordenação:⠀
              <select name="Ordenação">
                <option value="Decrescente">Decrescente</option>
                <option value="Crescente">Crescente</option>
              </select>
            </label>
          </DivProdutosLabel>
        </AreaProdutos>
        <Footer></Footer>
      </GridLayout>
    )
  }
}

