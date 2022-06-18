import CardProduto from "../CardProduto/CardProduto";
import React, { Component } from 'react'

export default class FiltroNumeros extends Component {

     // const FiltradaMinuscula = this.state.inputBuscaPorNome.toLowerCase()
    // let ListaFiltrada = this.state.ArrayProdutos.filter((produtos) => produtos.nomeProduto.toLowerCase().includes(FiltradaMinuscula)).map((produtos, indice) => {
    //   return <CardProduto
    //     key={indice}
    //     fotoProduto={produtos.fotoProduto}
    //     nomeProduto={produtos.nomeProduto}
    //     descrição={produtos.descrição}
    //     preçoProduto={produtos.preçoProduto} />
    // })

    // {
    //   this.state.ArrayProdutos
    //   .filter(produtos => {
    //     return produtos.nomeProduto.toLowerCase().includes(this.state.inputBuscaPorNome.toLowerCase()) ||
    //       produtos.descrição.toLowerCase().includes(this.state.inputBuscaPorNome.toLowerCase())
    //   })
    //   .filter(produtos => {
    //     return this.state.valorMinimo === "" || produtos.preçoProduto >= this.state.valorMinimo
    //   })
    //   .filter(produtos => {
    //     return this.state.valorMaximo === "" || produtos.preçoProduto <= this.state.valorMaximo
    //   })
    //   .sort((produtoAtual, proximoProduto) => {
    //     return this.state.ParametroOrdenação * (produtoAtual.preçoProduto - proximoProduto.preçoProduto)
    //   })
    //   .map((produtos, indice) => {
    //     return <CardProduto
    //       key={indice}
    //       fotoProduto={produtos.fotoProduto}
    //       nomeProduto={produtos.nomeProduto}
    //       descrição={produtos.descrição}
    //       preçoProduto={produtos.preçoProduto} />
    //   })
    // }

    // const renderizaLista = () => {
    //   const FiltradaMinuscula = this.state.inputBuscaPorNome.toLowerCase()
    //   if (this.state.valorMinimo <= 0 || this.state.valorMaximo <= 0) {
    //     return ListaFiltrada = this.state.ArrayProdutos.filter((produtos) => produtos.nomeProduto.toLowerCase().includes(FiltradaMinuscula))
    //     .map((produtos, indice) => {
    //       return <CardProduto
    //         key={indice}
    //         fotoProduto={produtos.fotoProduto}
    //         nomeProduto={produtos.nomeProduto}
    //         descrição={produtos.descrição}
    //         preçoProduto={produtos.preçoProduto} />
    //     }
    //     )
    //   } else if (this.state.valorMinimo >= 1) {
    //     return <FiltroNumeros
    //       lista={this.state.ArrayProdutos}
    //       preco={this.state.preçoProduto}
    //       valorminimo={this.state.valorMinimo}
    //       valormaximo={this.state.valorMaximo}
    //     />

    //   } else if (this.state.valorMaximo >= 1) {
    //     return <FiltroNumeros
    //       lista={this.state.ArrayProdutos}
    //       preco={this.state.ArrayProdutos.preçoProduto}
    //       valorminimo={this.state.valorMinimo}
    //       valormaximo={this.state.valorMaximo}
    //     />
    //   }
    // }
   
    
    render() {
        let ListaFiltradaNumeros = this.props.lista.filter((numero) => {
            if (numero.preçoProduto >= this.props.valorminimo) {
                return true
            } else {
                return false
            }
        }).filter((numero) => {
            if (numero.preçoProduto <= this.props.valormaximo) {
                return true
            } else {
                return false
            }

        })

        let ListaFiltradaNumerosMinimos = this.props.lista.filter((numero) => {
            if (numero.preçoProduto > this.props.valorminimo) {
                return true
            } else {
                return false
            }
        })

        let ListaFiltradaNumerosMaximos = this.props.lista.filter((numero) => {
            if (numero.preçoProduto > this.props.valorminimo) {
                return true
            } else {
                return false
            }
        })

        const renderizaFiltroDeNumeros = () => {
            if (this.props.valorminimo !== 0) {
                return ListaFiltradaNumerosMinimos.map((numero) => {
                    return <CardProduto
                    fotoProduto={numero.fotoProduto}
                    nomeProduto={numero.nomeProduto}
                    descrição={numero.descrição}
                    preçoProduto={numero.preçoProduto}
                     />
                }) 
            } else if (this.props.valormaximo !== 0) {
                return ListaFiltradaNumerosMaximos.map((numero) => {
                    return <CardProduto
                    fotoProduto={numero.fotoProduto}
                    nomeProduto={numero.nomeProduto}
                    descrição={numero.descrição}
                    preçoProduto={numero.preçoProduto}
                     />
                })
            } else if (this.props.valorminimo && this.props.valormaximo !== 0) {
                return ListaFiltradaNumeros.map((numero) => {
                    return <CardProduto
                    fotoProduto={numero.fotoProduto}
                    nomeProduto={numero.nomeProduto}
                    descrição={numero.descrição}
                    preçoProduto={numero.preçoProduto}
                     />
                })
            }
        }

        console.log(ListaFiltradaNumeros)
        console.log(this.props.valormaximo)
        console.log(this.props.valorminimo)
        console.log(this.props.preco)
        return (
            <>
                {ListaFiltradaNumeros.map(numero => {
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

