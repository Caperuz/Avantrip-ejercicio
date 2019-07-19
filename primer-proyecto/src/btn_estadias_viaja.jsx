import React from 'react'
import Menu from './Menu';

class Button extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            allStayDatas: []
          }
      }
    componentDidMount() {
        fetch('https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: '{ allCards {id,price,imgUrl,link,scale,stayId,description}, allStayDatas{bestPrice,customId,id,label} }'
            }),
        })
        .then(respuestaall => respuestaall.json())
        .then ( respuestaall2 => { this.setState({ allStayDatas: respuestaall2.data.allStayDatas }) } )
    }
    render(){
        const allBtnvar = this.state.allStayDatas;
        const renderall = allBtnvar.map (
            (
            Renderall => 
            <Menu 
                key={Renderall.customId}
                bestPrice={Renderall.bestPrice}
                customId={Renderall.customId}
                id={Renderall.id}
                stayId={Renderall.stayId}
                label={Renderall.label}
                />
                 ));
        return (
            <React.Fragment>
                <div className="menu">
                    <ul>
                        {renderall}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default Button