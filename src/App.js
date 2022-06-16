import React, { Component } from 'react'
import styled from 'styled-components'
import CardProduto from './Components/CardProduto/CardProduto';
import CamisaNasa from './Imagens/Camisa-Nasa.png'
import CamisaLaika from './Imagens/Camisa-Laika.png'
import CamisaApollo from './Imagens/Camisa-Apollo.png'
import CamisaGalaxia from './Imagens/Camisa-Galaxia.png'
import CamisaPlaneta from './Imagens/Camisa-Planeta.png'
import CamisaAstronauta from './Imagens/Camisa-Astronauta.png'



const GridLayout = styled.div`
height: 200vh;
width: 100vw;
display: grid;
grid-template-areas:"header header header"
                     "aside main nav"
                     "aside main nav"
                     "foot foot foot";
grid-template-rows: 1fr 4.5fr 5fr 1fr;
grid-template-columns: 1fr 4fr 1fr;

p {
  color: white;
}

h4 {
  color: white;
}

label {
  color: white;
}
`;

const Header = styled.header`
grid-area: header;
background-color: #7d5fff;
border: 1px solid;
`

const Footer = styled.footer`
background-color: #7d5fff;
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
background-color: #5758BB;
`
const H1Sessão = styled.h1`
margin: 0px;
color: white;
`

const H4Valores = styled.h4`
margin-bottom: 3px;
color: white;
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
background-color: #5758BB;
`
const AreaProdutos = styled.main`
grid-area: main;
background-color: #1B1464;
`

const DivProdutosLabel = styled.div`
padding: 0 16px;
display: flex;
justify-content: space-between;
align-items: center;
`

const DivDisplayProdutos = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
padding: 10px;
`

const DivCarrinhoGrid = styled.div`
display: grid;
gap: 8px;
`

export default class App extends Component {
  state = {
    ArrayProdutos: [
      {
        id: "1",
        fotoProduto: CamisaNasa,
        nomeProduto: "Camiseta Nasa",
        descrição: "Camiseta com o logotipo da Agência Espacial Americana",
        preçoProduto: 100
      },
      {
        id: "2",
        fotoProduto: CamisaLaika,
        nomeProduto: "Camiseta Laika",
        descrição: "Homenagem do Astrodev ao primeiro ser vivo no espaço!",
        preçoProduto: 50
      },
      {
        id: "3",
        fotoProduto: CamisaGalaxia,
        nomeProduto: "Camiseta Galáxia",
        descrição: "Definação da váriavel Galáxia",
        preçoProduto: 70.00
      },
      {
        id: "4",
        fotoProduto: CamisaPlaneta,
        nomeProduto: "Camiseta Planeta",
        descrição: "Nosso planeta. Nossa casa!",
        preçoProduto: 200.00
      },
      {
        id: "5",
        fotoProduto: CamisaAstronauta,
        nomeProduto: "Camiseta Astronauta",
        descrição: "Relaxe com o Astrodev",
        preçoProduto: 250.00
      },
      {
        id: "6",
        fotoProduto: CamisaApollo,
        nomeProduto: "Camiseta Apollo 11",
        descrição: "Estampa em comemoração a primeira missão lunar",
        preçoProduto: 80.00
      }
    ] 
  }

  render() {

    const ListaDeProdutos = this.state.ArrayProdutos.map((produtos) => {
      return <CardProduto
            fotoProduto={produtos.fotoProduto}
            nomeProduto={produtos.nomeProduto}
            descrição={produtos.descrição}
            preçoProduto={produtos.preçoProduto} />

    })
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

            <DivCarrinhoGrid>

            </DivCarrinhoGrid>

            <H4Valores>Valor total: </H4Valores>
          </div>
        </MenuCarrinho>

        <AreaProdutos>
          <DivProdutosLabel>
            <p>Quantidade de produtos: 6</p>

            <label>Ordenação:⠀
              <select name="Ordenação">
                <option value="Decrescente">Decrescente</option>
                <option value="Crescente">Crescente</option>
              </select>
            </label>
          </DivProdutosLabel>

          <DivDisplayProdutos>
          {ListaDeProdutos}
          </DivDisplayProdutos>

        </AreaProdutos>

        <Footer></Footer>
      </GridLayout>
    )
  }
}

