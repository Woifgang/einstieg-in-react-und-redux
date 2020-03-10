import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';


import Panel from './Panel';


class TodoList extends Component {

    render() {
        return (
            <Panel title="Todos">
                <ul className="TodoList-li">
                    {this.props.todo.map((todo) => {
                        return (
                            <li key={todo.id}>#{todo.id}: {todo.title}</li>
                        )
                    })}
                </ul>

            </Panel>
        );
    }
}

TodoList.propTypes = {
  todo :   PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired
      })
  )
};

export default TodoList;