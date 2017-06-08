var React = require('react');
var Badge = require('./badge');


module.exports = React.createClass({
		render: function(){
			return (<div className="col-md-9"><header className = {this.props.name} backgroundColor="red">
			<p>
              <Badge title={this.props.titleBadge}  />
            </p>
			<p><h3>{this.props.description}</h3></p>
			</header>
			</div>)
		}
	});