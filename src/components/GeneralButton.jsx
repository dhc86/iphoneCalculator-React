var React = require('react');

var GeneralButton = React.createClass({
  render:function(){

    var generalButtonStyle = {
      Height: 100,
      width: 100,
      background: "#D4D5D7",
      color: "black",
      borderRadius: 0,
      borderColor: "#7C7D81",
      borderStyle: "solid",
      borderWidth: 1,
      fontWeight: 100,
      width: 45
    }
    if (this.props.special){
      var generalButtonStyle = {
        Height: 100,
        width: 47,
        background: "#D97100",
        color: "white",
        borderRadius: 0,
        borderColor: "#7C7D81",
        borderStyle: "solid",
        borderWidth: 1,
        fontWeight: 100
      }
    }
    if (this.props.zeroColumnsButtons) {
      var generalButtonStyle = {
        Height: 100,
        width: 90,
        background: "#D4D5D7",
        color: "black",
        borderRadius: 0,
        borderColor: "#7C7D81",
        borderStyle: "solid",
        borderWidth: 1,
        fontWeight: 100
      }
    }



    return (
      <div>
				<a className="btn btn-primary" style={generalButtonStyle} onClick={this.props.onClick}> {this.props.value} </a>
			</div>

    );
  }
});

module.exports = GeneralButton;
