var React = require('react');

module.exports = React.createClass({
    render: function() {
      return <button className="btn btn-primary" type="submit">
        <span className="icon"><img src={this.props.icon} height="30 px" alt=""></img></span>
		{this.props.title} 
		<span className="badge">{this.props.number}</span>
		
		</button>
    }
  });