var React = require('react');
var Badge = require('./badge');


module.exports = React.createClass({
		render: function() {
			return (<div className="col-md-9"><footer className = {this.props.name} >
			<div className="contact" ><p>My contact:</p>
			<form  className="col-md-9 col-md-push-3" action={this.props.link} >
				<Badge title={this.props.titleBadge} link={this.props.link} icon={this.props.icon} />
			</form>
			<form className="col-md-3 col-md-pull-9"  >
				<Badge title={this.props.titleMail}  icon={this.props.iconMail} />
			</form>	
			</div>
			</footer>
			</div>)
		}
	});