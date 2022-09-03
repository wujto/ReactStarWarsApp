// Part from udemy course
import React from 'react'

class Item extends React.Component{

    constructor(props){
      super(props)
      this.counter = 0
      this.totalRemain = 10
      this.state = {
       alert: `Click on Hello ${this.props.name}`
      }
    }

    clickMe(){
      if(this.totalRemain > 0){
        console.log('I was clicked!!')
        this.counter = this.counter + 1
        this.totalRemain = this.totalRemain - 1
        this.setState({
          alert: `You click ${this.counter} \nLeft you ${this.totalRemain}`
        })
      }else{
        this.setState({
          alert: `You have no more clicks!!!`
        })
      }
    }
    
    render () {
      return(
        <div>
        <h1 onClick = {() => this.clickMe()}>Hello {this.props.name}</h1>
        <span>{this.state.alert}</span>
        </div>
      )
    }
  }

export default Item;