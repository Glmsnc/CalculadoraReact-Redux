import React from 'react'

export default class Visor extends React.Component{
    constructor() {
        super();
        this.state = {resultado: 0}
      }
      componentWillReceiveProps(){
          
      }
    render(){
        return (
            <div className="visor">
                <p>{this.state.resultado}</p>
            </div>
        )
    }
}