/* eslint-disable jsx-a11y/no-redundant-roles */

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="todoapp stack-large">
        <form>
          <label htmlFor="new-todo-input" className="new-todo-label">
            What needs to be done?
          </label>
          <input
            type="text"
            id="new-todo-input"
            className="new-todo-input input__fw"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary new-todo-btn">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            all
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            active
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            completed
          </button>
        </div>
        <h2 id="list-heading" className="list-heading">
          3 tasks remaining
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" />
              <label className="todo-label" htmlFor="todo-0">
                Eat
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Eat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Eat</span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-1" type="checkbox" />
              <label className="todo-label" htmlFor="todo-1">
                Sleep
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Sleep</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Sleep</span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" />
              <label className="todo-label" htmlFor="todo-2">
                Repeat
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Repeat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Repeat</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
