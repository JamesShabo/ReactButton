var React = require('react')

var App = React.createClass({

  getInitialState: function() {
    return{
      counter: 0,
      label: "s",
      }
  },
      changeCounter: function() {
        var s = 's';
        if(this.state.counter === 0){
          s = ''
        }
          this.setState({
          counter: this.state.counter +1,
          label: s
        })
      },

      render: function() {
        return (

          <div>
            <button onClick={this.changeCounter}>Like{this.state.label} {this.state.counter}</button>
          </div>

          )
      }
})

module.exports = App