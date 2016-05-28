var React = require('react');

var EvaluateButton = React.createClass({
  render:function(){
    var evaluateButtonStyle = {
      Height: 100,
      background: "#D97100",
      color: "white",
      borderRadius: 0,
      borderColor: "#7C7D81",
      borderStyle: "solid",
      borderWidth: 1,
      fontWeight: 100,
      width: 47
    }

    return (
      <div>
				<button className="btn btn-success btn-raised" style={evaluateButtonStyle} onClick={this.props.onClick}>=</button>
			</div>

    );
  }
});

module.exports = EvaluateButton;
