var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://intense-inferno-4617.firebaseio.com/';

var ListItem = React.createClass({
	getInitialState: function(){
		return {
			text: this.props.item.text,
			done: this.props.item.done,
			textChanged: false
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
					onChange={this.handleTextChange}
					className="form-control"
					value={this.state.text} />
				<span className="input-group-btn">
					{ this.changesButtons() }
					<button
						onClick={this.handleDeleteClick} 
						className="btn btn-default"
						>
						Delete
					</button>
				</span>
			</div>
		);
	},
	changesButtons: function(){
		if(!this.state.textChanged){
			return null
		} else {
			return [
				<button className="btn btn-default">Save</button>,
				<button 
					onClick={this.handleUndoClick}
					className="btn btn-default"
					>
					Undo
				</button>
			]
		}
	},
	handleDoneChange: function(event){
		var update = {done: event.target.checked};
		this.setState(update);
		this.fb.update(update);
	},
	handleDeleteClick: function(event){
		this.fb.remove();
	},
	handleTextChange: function(){
		this.setState({ 
			text: event.target.value,
			textChanged: true
		});
	},
	handleUndoClick: function(){
		this.setState({
			text: this.props.item.text,
			textChanged: false
		});
	},
	handlSaveClick: function(){

	}
});

module.exports = ListItem;