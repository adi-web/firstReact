import React from 'react';

export default class Label extends React.Component
{ 
  constructor() 
  {
    super();

    this.state={c:0};
    }
  counter=(n,b)=>
  {
    
    
   
    this.setState({c:this.state.c+1})
 
   
  }

  render()
  {

  return(<div><button onClick={(ev)=>this.counter("click",ev)}>ciao</button>{this.state.c}</div>
  );
  }
}

