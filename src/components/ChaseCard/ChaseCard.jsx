import React, {Component} from 'react';
import './ChaseCard.scss';
import ReactCardFlip from 'react-card-flip';
import XachiA from '../../assets/images/ChaseCard/xar@A.png'


const array = [
  "qyap@2", 
  "qyap@3", 
  "qyap@4", 
  "qyap@5", 
  "qyap@6",
  "qyap@7", 
  "qyap@8", 
  "qyap@9", 
  "qyap@10", 
  "qyap@A",
  "qyap@J", 
  "qyap@K", 
  "qyap@Q", 
  "sirt@2", 
  "sirt@3",
  "sirt@4", 
  "sirt@5", 
  "sirt@6", 
  "sirt@7", 
  "sirt@8",
  "sirt@9", 
  "sirt@10", 
  "sirt@A", 
  "sirt@J", 
  "sirt@Q",
  "sirt@K", 
  "xach@2",
  "xach@3", 
  "xach@4",
  "xach@5",
  "xach@6",
  "xach@7",
  "xach@8",
  "xach@9",
  "xach@10",
  "xach@A",
  "xach@J",
  "xach@Q",
  "xach@K",
  "xar@2",
  "xar@3", 
  "xar@4",
  "xar@5",
  "xar@6",
  "xar@7",
  "xar@8",
  "xar@9",
  "xar@10",
  "xar@A",
  "xar@J",
  "xar@Q",
  "xar@K"
];

class ChaseCard extends Component {
 
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    render () {

    //   const images = array.map(image => {
    //     return <img key={image} src={require(`../../assets/images/ChaseCard/${image}.png`)} alt={` ${image} `}  />
    //  });

        return (
            <>
       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" >
        <div onClick={this.handleClick} className="card-flesh m-3">
          
         
        </div>
 
        <div onClick={this.handleClick} className=" mx-3 mt-3">
          <img src={XachiA} alt="XACHIA" className="card-flip"/>
        
        
        </div>
      </ReactCardFlip>
            </>
        )
    }
    
}

export default ChaseCard

//  it is working 