var React = require ('react');
var Layout = require ('./layout');

var options = {
	  header: [{
		name: "header",
		text: "HEADER!!!",
		titleBadge: 'MENU',
		description: 'React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for building user interfaces.'
	}],
    thumbnailData:  [{
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }],
	footer: [{
		name: "footer",
		text: "FOOTER!!!",
		titleBadge: 'GitHab',
		titleMail: 'vikporymskyi@ukr.net',
		link: 'https://github.com/Porymskyi',
		icon: 'http://wizardjava.com/wp-content/uploads/2015/02/git.jpg',
		iconMail: 'http://www-static.operacdn.com/static-heap/38/385905f9fc73f61ac9a2169e8e9664372105b147/opera-mail-icon.png',
		
	}]
  };
  
  
var element = React.createElement(Layout, options);
React.render(element, document.querySelector('.container'));