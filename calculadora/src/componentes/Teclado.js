import React from 'react'
import Botao from './Botao'

export default class Teclado extends React.Component{
    constructor() {
        super();
        this.state = {lista: [7,8,9,'+',4,5,6,'-',1,2,3,'*', '=']};
      }

      
    render(){
        return (
            <div className="teclado">
            {this.state.lista.map(item =>  <Botao key={this.props.store} store={this.props.store} valor={item} />)}
              
            </div>
        )
    }
}