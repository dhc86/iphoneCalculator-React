var React = require('react');
var GeneralButton = require('./GeneralButton.jsx');
var ClearButton = require('./ClearButton.jsx');
var EvaluateButton = require('./EvaluateButton.jsx');

var Calculator = React.createClass({
  getInitialState: function(){
    return {value:""};
  },

  getNumber: function(val, e){
    var val1 = this.state.value;
    val1 = val1 + val;
    this.setState({value:val1});
  },

  onClear: function(){
    this.setState({value:""});
  },

  doOperation: function(){
    var val = this.state.value;
    if ((val.indexOf("+") !== -1) && (val.indexOf("-") === -1) && (val.indexOf("x") === -1) && (val.indexOf("/") === -1)){
      var numbers = val.split("+");
			var num1 = parseFloat(numbers[0]);
			var num2 = parseFloat(numbers[1]);
			this.setState({value:num1+num2});
    }

    else if ((val.indexOf("+") === -1) && (val.indexOf("-") !== -1) && (val.indexOf("x") === -1) && (val.indexOf("/") === -1)){
      var numbers = val.split("-");
			var num1 = parseFloat(numbers[0]);
			var num2 = parseFloat(numbers[1]);
			this.setState({value:num1-num2});
    }

    else if ((val.indexOf("+") === -1) && (val.indexOf("-") === -1) && (val.indexOf("x") !== -1) && (val.indexOf("/") === -1)){
      var numbers = val.split("x");
			var num1 = parseFloat(numbers[0]);
			var num2 = parseFloat(numbers[1]);
			this.setState({value:num1*num2});
    }

    else if ((val.indexOf("+") === -1) && (val.indexOf("-") === -1) && (val.indexOf("x") === -1) && (val.indexOf("/") !== -1)){
      var numbers = val.split("/");
			var num1 = parseFloat(numbers[0]);
			var num2 = parseFloat(numbers[1]);
			this.setState({value:num1/num2});
    }
    else if ((val.indexOf("+") === -1) && (val.indexOf("-") === -1) && (val.indexOf("x") === -1) && (val.indexOf("%") !== -1)){
      var numbers = val.split("%");
			var num1 = parseFloat(numbers[0]);
			var num2 = parseFloat(numbers[1]);
			this.setState({value:num1/100});
    }
    //debugger;
  },

  render:function(){
    var containerStyle = {
      width: 200,
      height: 600,
      paddingLeft: 12
    };

    var inputStyle = {
      marginTop: 55,
      borderRadius: 0,
      borderColor: "black",
      height: 65,
      width: 178,
      fontSize: 35,
      color: "White",
      background: "#202020",
      fontWeight: 100
    };


    var formGroupStyle = {
      marginBottom: -1
    };

    var iphoneFrame = {
      backgroundImage: 'url(./iphoneframe.png)',
      height: 340,
      width:200,
      backgroundSize: "200px 340px"
      //background: url(/images/index.jpg) no-repeat center center fixed;
    };

    var columnsButtons = {
      paddingLeft: 0
    };

    return (
      <div className="iphoneFrame" style={iphoneFrame}>
        <div className="container"   style={containerStyle}>
          <div className="form-group" style={formGroupStyle}>
            <input type="text" className="form-control text-right" style={inputStyle} value={this.state.value} disabled/>
          </div>
          <div>

              <div className="col-sx-3 col-sm-3 col-md-3" style={columnsButtons}>
                <ClearButton onClick={this.onClear} />
                <GeneralButton  onClick={this.getNumber.bind(this,"7")} value="7" />
                <GeneralButton  onClick={this.getNumber.bind(this,"4")} value="4" />
                <GeneralButton  onClick={this.getNumber.bind(this,"1")} value="1" />
              </div>

              <div className="col-sx-3 col-sm-3 col-md-3" style={columnsButtons}>
                <GeneralButton  onClick={this.getNumber.bind(this,"+/-")} value="+/-" />
                <GeneralButton  onClick={this.getNumber.bind(this,"8")} value="8" />
                <GeneralButton  onClick={this.getNumber.bind(this,"5")} value="5" />
                <GeneralButton  onClick={this.getNumber.bind(this,"2")} value="2" />
              </div>
              <div className="col-sx-3 col-sm-3 col-md-3" style={columnsButtons}>
                <GeneralButton  onClick={this.getNumber.bind(this,"%")} value="%" />
                <GeneralButton  onClick={this.getNumber.bind(this,"9")} value="9" />
                <GeneralButton  onClick={this.getNumber.bind(this,"6")} value="6" />
                <GeneralButton  onClick={this.getNumber.bind(this,"3")} value="3" />
              </div>
              <div className="col-sx-3 col-sm-3 col-md-3" style={columnsButtons}>
                <GeneralButton  onClick={this.getNumber.bind(this,"/")} special={true} value="/" />
                <GeneralButton  onClick={this.getNumber.bind(this,"x")} special={true} value="x" />
                <GeneralButton  onClick={this.getNumber.bind(this,"-")} special={true} value="-" />
                <GeneralButton  onClick={this.getNumber.bind(this,"+")} special={true} value="+" />
              </div>


              <div className="col-sx-6 col-sm-6 col-md-6" style={columnsButtons}>
                <GeneralButton  onClick={this.getNumber.bind(this,"0")} zeroColumnsButtons={true} value="0" />
              </div>
              <div className="col-sx-3 col-sm-3 col-md-3" style={columnsButtons}>
                <GeneralButton  onClick={this.getNumber.bind(this,".")} value="." />
              </div>
              <div className="col-sx-3 col-sm-3 col-md-3" style={columnsButtons}>
                <EvaluateButton onClick={this.doOperation}/>
              </div>
            </div>


        </div>
      </div>
    );
  }
});

module.exports = Calculator;
