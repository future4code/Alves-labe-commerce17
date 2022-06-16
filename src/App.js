import React, { Component } from 'react'
import styled from 'styled-components'
import CardProduto from './Components/CardProduto/CardProduto';

const GridLayout = styled.div`
height: 120vh;
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
        fotoProduto: "https://picsum.photos/536/354",
        nomeProduto: "Produto 1",
        descrição: "asd",
        preçoProduto: 100
      },
      {
        id: "2",
        fotoProduto: "https://picsum.photos/id/237/536/354",
        nomeProduto: "Produto 2",
        descrição: "asd",
        preçoProduto: 50
      },
      {
        id: "3",
        fotoProduto: "https://picsum.photos/seed/picsum/536/354",
        nomeProduto: "Produto 3",
        descrição: "asd",
        preçoProduto: 70.00
      },
      {
        id: "4",
        fotoProduto: "https://picsum.photos/id/1084/536/354?grayscale",
        nomeProduto: "Produto 4",
        descrição: "asd",
        preçoProduto: 200.00
      },
      {
        id: "5",
        fotoProduto: "https://picsum.photos/id/1060/536/354?blur=2",
        nomeProduto: "Produto 5",
        descrição: "asd",
        preçoProduto: 250.00
      },
      {
        id: "6",
        fotoProduto: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
        nomeProduto: "Produto 6",
        descrição: "asd",
        preçoProduto: 80.00
      }
    ],
    inputBuscaPorNome: "",
  }

  onChangeInputBuscaPorNome = (event) => {
    this.setState({inputBuscaPorNome: event.target.value})
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
            <input type="text" placeholder='Camisa' value={this.state.inputBuscaPorNome} onChange={this.onChangeInputBuscaPorNome}></input>

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

