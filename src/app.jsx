var React = require('react');
var ReactFire = require('reactfire');
//
// Firebase DB
var Firebase = require('firebase');
var rootUrl = 'https://intense-inferno-4617.firebaseio.com/';
//
// Components
var Header = require('./header');
var List = require('./list');


var App = React.createClass({
	mixins: [ReactFire],
	getInitialState: function(){
		return{
			items: {}
		}
	}
	componentWillMount: function(){
		this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
		//this.state.items => {}
	},
	render: function() {
		console.log(this.state);

		return (
			<div className="row panel panel-default">
				<div className="col-md-8 col-md-offset-2">
					<h2 className="text-center">
						To-Do List
					</h2>
					<Header itemsStore={this.firebaseRefs.items}/>
					<List items={this.state.items}/>
				</div>
			</div>
			);
	}
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
