import React from 'react';
import TodoActions  from '../actions/TodoActions';

let ReactPropTypes = React.PropTypes;


class Footer extends React.Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {
        allTodos: ReactPropTypes.object.isRequired
    };

    _onClearCompletedClick = () => {
        TodoActions.destroyCompleted();
    };

    render() {

        console.log(this.props);

        var allTodos = this.props.allTodos;
        var total = Object.keys(allTodos).length;

        if (total === 0) {
            console.log(`uuuuuuuu`);
            return null;
        }

        var completed = 0;
        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';

        // Undefined and thus not rendered if no completed items are left.
        var clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this._onClearCompletedClick}>
                    Clear completed ({completed})
                </button>;
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
            {itemsLeft}
                    </strong>
          {itemsLeftPhrase}
                </span>
        {clearCompletedButton}
            </footer>
        );
    }

}

export default Footer;
