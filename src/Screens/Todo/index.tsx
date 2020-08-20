import React from 'react';
import styled from 'styled-components/native';
import TodoListView from './TodoListVIew';
import AddqTodo from './AddTodo';

const Container = styled.View`
  flex: 1;
`;

const Todo = () => {
  return (
    <Container>
      <TodoListView />
      <AddqTodo />
    </Container>
  );
};

export default Todo;
