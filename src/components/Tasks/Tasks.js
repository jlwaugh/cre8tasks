import React, { Component } from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

class Tasks extends Component {
	render() {
		return this.props.tasks.map((task) => (
			<TaskItem key={task.id} task={task} markComplete={this.props.markComplete} delTask={this.props.delTask} />
		));
	}
}

// PropTypes
Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTask: PropTypes.func.isRequired,
}

export default Tasks;