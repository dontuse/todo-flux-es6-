import React  from 'react';
import Footer from './Footer.react';
import Header from './Header.react';
import MainSection from './MainSection.react';
import TodoStore from '../stores/TodoStore';

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        areAllComplete: TodoStore.areAllComplete()
    };
}

export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = getTodoState();
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(getTodoState());
    }

    render() {
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    }
}
