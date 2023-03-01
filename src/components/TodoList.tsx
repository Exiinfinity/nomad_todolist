import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoSelector } from "./atom";
import CreateCategory from "./CreateCategory";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


const Container = styled.div`
  max-width: 20rem;
  min-width: 430px;
  margin: 0px auto;
  padding: 0px 3rem;
`;
const Header = styled.header`
  display: flex;
  height: 10vw;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3vw;
    font-weight: bold;
    color: ${(props) => props.theme.accentColor};
  }
`;

const TodoList = () => {
  const todos = useRecoilValue(todoSelector);

  return (
    <Container>
      <hr />
      <Header>
        <h1>My Todo List!!</h1>
      </Header>
      <hr />
      <hr />
      <CreateCategory />
      <hr />
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
