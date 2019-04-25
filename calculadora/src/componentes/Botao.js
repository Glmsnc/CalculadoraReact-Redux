import React from 'react'
export default class Botao extends React.Component{
    constructor(){
        super();
        this.state = {calculo: ''}
    
    }
    render(){
        return (
            <div className="botao" onClick={this.log.bind(this)}>
                <p>{this.props.valor}</p>
            </div>
        )
    }

    log(){
        this.props.store.dispatch({type:'AddNumber', id:this.props.valor} )
    }

    
}