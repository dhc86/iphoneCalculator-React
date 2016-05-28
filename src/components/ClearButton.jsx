var React = require('react');

var ClearButton = React.createClass({
  render:function(){
    var clearButtonStyle = {
      Height: 100,
      Width: 100,
      background: "#D4D5D7",
      color: "black",
      borderRadius: 0,
      borderColor: "#7C7D81",
      borderStyle: "solid",
      borderWidth: 1,
      fontWeight: 100,
      width: 45
    }
    return(
			<div>
				<button className="btn btn-danger" style={clearButtonStyle} onClick={this.props.onClick}>C</button>
			</div>
    );
  }
});

module.exports = ClearButton;
