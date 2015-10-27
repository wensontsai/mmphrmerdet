var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://intense-inferno-4617.firebaseio.com/';

var ListItem = React.createClass({
	getInitialState: function(){
		return {
			text: this.props.item.text,
			done: this.props.item.done
		}
	},	 
	componentWillMount: function(){
		this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key)
	},
	render: function(){
		return(
			<div className="input-group">
				<span className="input-group-addon">
					<input
						onChange={this.handleDoneChange} 
						checked={this.state.done}
						type="checkbox" />
				</span>
				<input type="text"
					className="form-control"
					value={this.state.text}
					/>
				<span className="input-group-btn">
					<button className="btn btn-default">
						Delete
					</button>
				</span>
			</div>
		);
	},
	handleDoneChange: function(event){
		var update = {done: event.target.checked};
		this.setState(update);
		this.fb.update(update);
	}
});

module.exports = ListItem;