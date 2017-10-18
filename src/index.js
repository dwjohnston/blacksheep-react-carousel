import React from 'react';
import "./style.scss";

class SimpleCarousel extends React.Component {



  constructor() {
    super();
    this.state = {i:0};

  }

  componentWillMount() {




    this.setState({ i: 0, currentSelected: this.props.sourceObjects[0], max: this.props.sourceObjects.length -1});


  }


  update(inc){
    let i = this.state.i + (inc? 1 : -1);

    let selected = this.props.sourceObjects[i];

    console.log(i);

    this.setState({i:i, currentSelected: selected, leftDiabled : i === 0});

  }

  leftClick() {

    console.log("lasdaeft");
    this.update(false);

    this.props.onChange(this.state.currentSelected);
  }

  rightClick() {

    console.log("righ aadft");
    console.log(this);
    console.log(this.state);

    this.update(true);



    this.props.onChange(this.state.currentSelected);
  }

  render() {

    return (
      <div className ="simple-carousel">

        <button className  ="left" onClick ={() => {this.leftClick();}} disabled={this.state.i === 0} />

          <div className ="simple-carousel-body">{this.props.sourceObjects.map((v,i) => {
            let id = this.props.name + i;
            let label = this.props.labelFn(v);
            return <div > <input type = "radio" checked = {this.state.i === i} name = {this.props.name} key = {id} value = {label} /><label for = {id} > {this.state.i}{label}</label></div>;
          })}</div>

        <button className =  "right" onClick = {() => {this.rightClick();}} disabled ={this.state.i === this.state.max}/>

      </div>
    );
  }
}
export default SimpleCarousel;
