import React, { Component } from "react";
import styled from "styled-components";
import CardProduto from "./Components/CardProduto/CardProduto";
import CamisaNasa from "./Imagens/Camisa-Nasa.png";
import CamisaLaika from "./Imagens/Camisa-Laika.png";
import CamisaApollo from "./Imagens/Camisa-Apollo.png";
import CamisaGalaxia from "./Imagens/Camisa-Galaxia.png";
import CamisaPlaneta from "./Imagens/Camisa-Planeta.png";
import CamisaAstronauta from "./Imagens/Camisa-Astronauta.png";
import Frete from "./Imagens/Frete.png";
import AstroDev from "./Imagens/astro-devstore2.png";
import Carrinho from "./Components/Carrinho/Carrinho";
import Facebook from "./Imagens/facebook.png";
import Twitter from "./Imagens/twitter.png";
import Instagram from "./Imagens/instagram.png";

const GridLayout = styled.div`
  height: 200vh;
  width: 100vw;
  max-width: 100%;
  display: grid;
  grid-template-areas:
    "header header header"
    "aside main nav"
    "aside main nav"
    "foot foot foot";
  grid-template-rows: 1fr 4.5fr 5fr 1fr;
  grid-template-columns: 1fr 5fr 1fr;
  p {
    color: white;
  }
  h4 {
    color: white;
  }
  label {
    color: white;
  }
  overflow-x: hidden;

  @media (max-width:1200px) {
    height: 220vh;
  }

  @media (max-width:1200px) {
    grid-template-columns: repeat(1, 1fr);
    height: 400vh;
  }

  @media (max-width:1080px) {
    height: 300vh;
  }
  @media (max-width:660px) {
    height: 450vh;
  }

  @media (max-width:700px) {
    height: 560vh;
  }

  @media (max-width:557px) {
    display: inline-block;
    grid-template-rows: 1fr 9fr 5fr 1fr;
    grid-template-columns: 1fr 5fr 1fr;
    height: 700vh;
  }

  @media (max-width:507px) {
    display: inline-block;
    grid-template-rows: 1fr 9fr 5fr 1fr;
    grid-template-columns: 1fr 5fr 1fr;
    height: 600vh;
  }

  @media (max-width:405px) {
    display: inline-block;
    grid-template-rows: 1fr 9fr 5fr 1fr;
    grid-template-columns: 1fr 5fr 1fr;
    height: 500vh;
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: #7d5fff;
  display: grid;
  justify-items: center;
  @media (max-width:385px) {
    height: 20vh;
  }

  > img {
    height: 7vh;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  @media (max-width: 415px) {
    img {
      height: 4.5vh;
    }
  }
  @media (max-width:385px) {
    img{
    height: 5vh;}
  }
`;

const MiniAvisoPromocional = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: white;
  @media (max-width:385px) {
    height: 9vh;
  }

  P {
    color: black;
    font-weight: 500;
    margin-top: 15px;
  }

  @media (max-width: 570px) {
    width: 100%;
  }
`;
const Footer = styled.footer`
  background-color: #474787;
  border: 2px;
  grid-area: foot;
  display: flex;
  text-align: center;

  p {
    margin: 0 auto;
    padding-top: 60px;
  }

  img {
    height: 4vh;
  }
`;

const MenuFiltros = styled.aside`
  grid-area: aside;
  display: flex;
  justify-content: flex-start;
  justify-items: start;
  padding: 30px;
  background-color: #1b1464;
  text-align: center;
  @media (max-width:557px) {
  padding: 2px
  }
`;
const H1Sess??o = styled.h1`
  margin: 0px;
  color: white;
`;
const H4Valores = styled.h4`
  margin-bottom: 3px;
  color: white;
`;
const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  justify-content: flex-start;
  text-align: center;
`;
const LabelStyled2 = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  justify-content: flex-start;
`;
const MenuCarrinho = styled.nav`
  grid-area: nav;
  display: grid;
  grid-row-start: 2;
  padding: 20px;
  background-color: #1b1464;
  text-align: center;
`;
const AreaProdutos = styled.main`
  grid-area: main;
  background-color: #1b1464;
`;
const DivProdutosLabel = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DivDisplayProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Bot??oCarrinho = styled.button`
  color: #ffffff;
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
  width: 50%;
  height: 50px;
  text-align: center;
  background-color: #7d5fff;
  border: solid 1px #74747480;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.8s;
  background-position: center;
  margin: 0 auto;

  @media (max-width:375px) {
    height: 40px
  }

  @media (max-width: 1407px) {
    max-width: 83%;
    height: 50px;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    height: 60px;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    height: 50px;
  }
  :hover {
    background: #74747480 radial-gradient(circle, transparent 1%, #192c53 1%)
      center/15000%;
    color: #ffffff;
  }

  @media (max-width: 1407px) {
    max-width: 53%;
    height: 70px;
  }

  @media (max-width:557px) {
    max-width: 35%;
    height: 40px;
  }

  @media (max-width:375px) {
    max-width: 35%;
    height: 40px;
  }
`;

const DivRedesSociais = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  margin-top: 5px;
`;

const DivFiltros = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const RedesSociais = styled.img`
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`

export default class App extends Component {
  state = {
    ArrayProdutos: [
      {
        id: "1",
        fotoProduto: CamisaNasa,
        nomeProduto: "Camiseta Nasa",
        descri????o: "Camiseta com o logotipo da Ag??ncia Espacial Americana",
        pre??oProduto: 100,
      },
      {
        id: "2",
        fotoProduto: CamisaLaika,
        nomeProduto: "Camiseta Laika",
        descri????o: "Homenagem do Astrodev ao primeiro ser vivo no espa??o!",
        pre??oProduto: 50,
      },
      {
        id: "3",
        fotoProduto: CamisaGalaxia,
        nomeProduto: "Camiseta Gal??xia",
        descri????o: "Defina????o da v??riavel Gal??xia",
        pre??oProduto: 70,
      },
      {
        id: "4",
        fotoProduto: CamisaPlaneta,
        nomeProduto: "Camiseta Planeta",
        descri????o: "Nosso planeta. Nossa casa!",
        pre??oProduto: 200,
      },
      {
        id: "5",
        fotoProduto: CamisaAstronauta,
        nomeProduto: "Camiseta Astronauta",
        descri????o: "Relaxe com o Astrodev",
        pre??oProduto: 250,
      },
      {
        id: "6",
        fotoProduto: CamisaApollo,
        nomeProduto: "Camiseta Apollo 11",
        descri????o: "Estampa em comemora????o a primeira miss??o lunar",
        pre??oProduto: 80,
      },
    ],
    inputBuscaPorNome: "",
    valorMinimo: "",
    valorMaximo: "",
    itensNoCarrinho: [],
  };

  onChangeInputBuscaPorNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value });
  };
  onChangeInputValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };
  onChangeInputValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };
  onChangeParametroOrdena????o = (event) => {
    this.setState({ ParametroOrdena????o: event.target.value });
  };

  componentDidUpdate() {
  };

  componentDidMount() {
    let listaCarrinho = localStorage.getItem("lista")
    const carrinhoConvertido = JSON.parse(listaCarrinho)
    carrinhoConvertido && this.setState({ itensNoCarrinho: carrinhoConvertido })
  }

  // itemId ?? o ID do item sendo clicado e item.id o item que est?? no carrinho

  adicionarItem = (itemId) => {
    const itemNoCarrinho = this.state.itensNoCarrinho.find(
      (item) => itemId === item.id
    );
    if (itemNoCarrinho) {
      const novosItensCarrinho = this.state.itensNoCarrinho.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }
        return item;
      });
      this.setState({ itensNoCarrinho: novosItensCarrinho });
      console.log(novosItensCarrinho);
      localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
    } else {
      const itemAdicionado = this.state.ArrayProdutos.find(
        (item) => itemId === item.id
      );

      const novosItensCarrinho = [
        ...this.state.itensNoCarrinho,
        { ...itemAdicionado, quantidade: 1 },
      ];
      console.log(novosItensCarrinho);
      this.setState({ itensNoCarrinho: novosItensCarrinho });
      localStorage.setItem("lista", JSON.stringify(novosItensCarrinho))
    }
  };

  removerItem = (itemID) => {
    const novosProdutos = this.state.itensNoCarrinho
      .map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantidade > 0);
    this.setState({ itensNoCarrinho: novosProdutos });
    localStorage.setItem("lista", JSON.stringify(novosProdutos))
  };

  valorTotal = () => {
    let valorTotal = 0;

    for (let produto of this.state.itensNoCarrinho) {
      valorTotal += produto.pre??oProduto * produto.quantidade;
    }
    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  render() {
    return (
      <GridLayout>
        <Header>
          <MiniAvisoPromocional>
            <img src={Frete} height="45vh" width="45vw" alt="caminhao frete" />???
            <p>Frete gr??tis para todo o Brasil apartir de R$200</p>
          </MiniAvisoPromocional>

          <img src={AstroDev} alt="astrodev" />
        </Header>
        <MenuFiltros>
          <DivFiltros>
            <H1Sess??o>Filtros</H1Sess??o>
            <LabelStyled>
              <H4Valores>Valor Minimo (R$): </H4Valores>
              <input
                type="number"
                placeholder="R$ 10,00"
                id="minimo"
                name="minimo"
                min="0"
                max="10000"
                value={this.state.valorMinimo}
                onChange={this.onChangeInputValorMinimo}
              />
            </LabelStyled>
            <LabelStyled2>
              <H4Valores>Valor M??ximo (R$): </H4Valores>
              <input
                type="number"
                placeholder="R$ 1000,00"
                min="0"
                max="10000"
                id="maximo"
                name="maximo"
                value={this.state.valorMaximo}
                onChange={this.onChangeInputValorMaximo}
              />
            </LabelStyled2>
            <LabelStyled2>
              <H4Valores>Busca: </H4Valores>
            </LabelStyled2>
            <input
              type="text"
              placeholder="Camisa..."
              value={this.state.inputBuscaPorNome}
              onChange={this.onChangeInputBuscaPorNome}
            ></input>
          </DivFiltros>
        </MenuFiltros>
        <MenuCarrinho>
          <div>
            <H1Sess??o>Carrinho: </H1Sess??o>
            {this.state.itensNoCarrinho.map((item) => {
              return (
                <Carrinho
                  key={item.id}
                  id={item.id}
                  itensNoCarrinho={this.state.itensNoCarrinho}
                  removerItem={() => this.removerItem(item.id)}
                  nomeProduto={item.nomeProduto}
                  quantidade={item.quantidade}
                  pre??o={item.pre??oProduto}
                />
              );
            })}

            <H4Valores>Valor total: {this.valorTotal()}</H4Valores>
            <br></br>
            <Bot??oCarrinho>Check-out</Bot??oCarrinho>
          </div>
        </MenuCarrinho>
        <AreaProdutos>
          <DivProdutosLabel>
            <p>Quantidade de produtos: {this.state.ArrayProdutos.length}</p>
            <label>
              Ordena????o:???
              <select
                value={this.state.ParametroOrdena????o}
                onChange={this.onChangeParametroOrdena????o}
                name="Ordena????o"
              >
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </label>
          </DivProdutosLabel>
          <DivDisplayProdutos>
            {this.state.ArrayProdutos.filter((produtos) => {
              return (
                produtos.nomeProduto
                  .toLowerCase()
                  .includes(this.state.inputBuscaPorNome.toLowerCase()) ||
                produtos.descri????o
                  .toLowerCase()
                  .includes(this.state.inputBuscaPorNome.toLowerCase())
              );
            })
              .filter((produtos) => {
                return (
                  this.state.valorMinimo === "" ||
                  produtos.pre??oProduto >= this.state.valorMinimo
                );
              })
              .filter((produtos) => {
                return (
                  this.state.valorMaximo === "" ||
                  produtos.pre??oProduto <= this.state.valorMaximo
                );
              })
              .sort((produtoAtual, proximoProduto) => {
                return (
                  this.state.ParametroOrdena????o *
                  (produtoAtual.pre??oProduto - proximoProduto.pre??oProduto)
                );
              })
              .map((produtos, indice) => {
                return (
                  <CardProduto
                    key={produtos.id}
                    id={produtos.id}
                    fotoProduto={produtos.fotoProduto}
                    nomeProduto={produtos.nomeProduto}
                    descri????o={produtos.descri????o}
                    pre??oProduto={produtos.pre??oProduto.toLocaleString(
                      "pt-BR",
                      { style: "currency", currency: "BRL" }
                    )}
                    carrinho={this.state.itensNoCarrinho}
                    adicionarItem={() => this.adicionarItem(produtos.id)}
                  />
                );
              })}
          </DivDisplayProdutos>
        </AreaProdutos>
        <Footer>
          <DivRedesSociais>
            {" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RedesSociais src={Facebook} alt="Facebook" />
            </a>
            ???
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RedesSociais src={Instagram} alt="Instagram" />
            </a>
            ???
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RedesSociais src={Twitter} alt="Twitter" />
            </a>
          </DivRedesSociais>
          <br />
          <br />
          <br />
          <br />
          <p>AstroDev Store ?? - 2022</p>
          <br />
        </Footer>
      </GridLayout>
    );
  }
}
