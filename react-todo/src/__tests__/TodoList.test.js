
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders initial todos', () => {
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3); // Check initial todos count
  });

  test('adds a new todo', () => {
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(4); // Check if new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument(); // Check if new todo is displayed
  });

  test('toggles a todo', () => {
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through'); // Check if todo is marked as completed
  });

  test('deletes a todo', () => {
    const deleteButton = screen.getAllByText('Delete')[0]; // Get the delete button for the first todo
    fireEvent.click(deleteButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2); // Check if a todo is deleted
  });
});