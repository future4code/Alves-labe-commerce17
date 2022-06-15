import React, { Component } from 'react'
import styled from 'styled-components'

const GridLayout = styled.div`
height: 100vh;
width: 100vw;
display: grid;
grid-template-areas:"header header header"
                     "aside main nav"
                     "aside main nav";
grid-template-rows: 1fr 4.5fr 5fr;
grid-template-columns: 1fr 4fr 1fr;
`;

const Header = styled.header`
grid-area: header;
background-color: red;
`

const MenuFiltros = styled.aside`
grid-area: aside;
background-color: green;
`

const MenuCarrinho = styled.nav`
grid-area: nav;
background-color: blue;
`
const AreaProdutos = styled.main`
grid-area: main;
background-color: orange;
`

export default class App extends Component {

  render() {

    return (
      <GridLayout>
        <Header> </Header> 
        <MenuFiltros> </MenuFiltros>
        <MenuCarrinho> </MenuCarrinho>
        <AreaProdutos> </AreaProdutos>
      </GridLayout>
    )
  }
}

