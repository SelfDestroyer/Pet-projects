import React from "react";
import { connect } from "react-redux";

// Styles
import styles from "./TodoItem.module.scss";

// Images
import cansel from "./cancel.svg";

// Actions
import { deleteTodoById, switchCompleted } from "../../App/actions";

// Animation components
import { Fade } from "react-reveal";
import { TransitionGroup } from "react-transition-group";

const mapState = ({ todos, visibilityFilter }) => ({ todos, visibilityFilter });
const mapDispatch = {
  deleteTodoById,
  switchCompleted,
};

export function TodoItem({
  deleteTodoById,
  switchCompleted,
  todos,
  visibilityFilter,
}) {
  const handlerDelete = (e) => {
    const id = +e.target.parentNode.id;
    deleteTodoById(id);
    console.log(visibilityFilter);
  };

  const checkCompletedTodo = (e) => {
    const id = +e.target.parentNode.id;
    if (e.target.checked) switchCompleted(id);
    else switchCompleted(id);
  };

  const createTodoItems = (arr) =>
    arr.map((el) => (
      <Fade key={el.id} collapse>
        <div
          className={
            el.completed
              ? `${styles.item} ${styles.itemCompleted}`
              : `${styles.item}`
          }
          id={el.id}
        >
          <input
            type="checkbox"
            className={styles.item__customCheckbox}
            id={`todo-${el.id}`}
            completed={el.completed.toString()}
            defaultChecked={el.completed}
            onClick={checkCompletedTodo}
          />
          <label htmlFor={`todo-${el.id}`}>{el.text}</label>

          <img
            src={cansel}
            alt="cancel-icon"
            className={styles.item__deleteBtn}
            onClick={handlerDelete}
          />
        </div>
      </Fade>
    ));

  let todoItems;

  const groupProps = {
    appear: true,
    enter: true,
    exit: true,
  };

  const transitionGroupStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  };

  if (visibilityFilter === "all") todoItems = createTodoItems(todos);

  if (visibilityFilter === "completed")
    todoItems = createTodoItems(todos.filter((el) => el.completed === true));

  if (visibilityFilter === "notCompleted")
    todoItems = createTodoItems(todos.filter((el) => el.completed === false));

  return (
    <TransitionGroup {...groupProps} style={transitionGroupStyles}>
      {todoItems}
    </TransitionGroup>
  );
}

export default connect(mapState, mapDispatch)(TodoItem);
