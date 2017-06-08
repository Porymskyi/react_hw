var React = require('react');
var Thumbnail = require('./thumbnail');
var Header = require('./header');
var Footer = require('./footer');


module.exports = React.createClass({
		render: function(){
			var header = this.props.header.map(function(headerProps){
				return <Header {...headerProps} />
			});
			var content = this.props.thumbnailData.map(function(thumbnailDataProps){
				return <Thumbnail {...thumbnailDataProps} />
			});
			var footer = this.props.footer.map(function(footerProps){
				return <Footer {...footerProps} />
			});
		return <div>
		{header}
			{content}
		{footer}
		</div>
		}
	});