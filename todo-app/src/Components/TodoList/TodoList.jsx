import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//  Actions
import { addTodo } from "../../App/actions";

// Images
import plus from "./plus.svg";
import logo from "./logo.png";

// Styles
import styles from "./TodoList.module.scss";

// Components
import TodoItem from "./TodoItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Filter from "./Filter";

// Animation components
import { Bounce, Fade, Zoom, Flip } from "react-reveal";

const mapState = ({ todos, visibilityFilter }) => ({ todos, visibilityFilter });
const masDispatch = {
  addTodo,
};

export function TodoList({ todos, visibilityFilter, addTodo }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(1);
  const [emptyInputError, setEmptyInputError] = useState(false);

  const handleChange = (e) => setText(e.target.value);

  const getNamesOfDaysOfTheWeek = (n) => {
    const days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    return days[n];
  };

  const handleClick = () => {
    if (text.trim().length > 0) {
      addTodo(id, text);
      setText("");
      setEmptyInputError(false);
    } else {
      setEmptyInputError(true);
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      setId(Math.max(...todos.map((el) => el.id)) + 1);
    }
  }, [todos, visibilityFilter]);

  return (
    <div className={styles.todoList}>
      <Flip top delay={500}>
        <div className={styles.todoList__logo}>
          <img src={logo}  alt="logo" />
        </div>
      </Flip>

      <Fade cascade top big>
        <h2>{`Enjoy your ${getNamesOfDaysOfTheWeek(new Date().getDay())}`}</h2>
      </Fade>

      <Bounce delay={2000}>
        <div className={styles.todoList__inputBody}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="✍ Add your item..."
          />
          <button>
            <img src={plus} alt="plus-icon" onClick={handleClick} />
          </button>
        </div>
      </Bounce>

      {emptyInputError ? (
        <ErrorMessage errorMessage="⚠️ Oops! Please, enter To Do item..." />
      ) : null}

      <Filter />

      <Zoom delay={2200}>
        <div className={styles.todoList__itemsBody}>
          <TodoItem />
        </div>
      </Zoom>

      <div className={styles.author}>
        <Zoom delay={2500}>
          <h5>
            Made with 💖 by{" "}
            <a href="https://github.com/SelfDestroyer" target="__blank">
              Vova Ivaniuk
            </a>
          </h5>
        </Zoom>
        <Fade bottom cascade delay={2800}>
          <span>✨ todo app ✨</span>
        </Fade>
      </div>
    </div>
  );
}

export default connect(mapState, masDispatch)(TodoList);
