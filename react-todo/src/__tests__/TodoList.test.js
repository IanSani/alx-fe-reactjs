
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Before each test, render the TodoList component
  beforeEach(() => {
    render(<TodoList />);
  });

  // Test 1: Verify that the TodoList component renders correctly
  test('renders initial todos', () => {
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3); // Check initial todos count
    expect(screen.getByText('Learn React')).toBeInTheDocument(); // Check specific todo is rendered
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // Test 2: Verify that a new todo can be added
  test('adds a new todo', () => {
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(4); // Check if new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument(); // Check if new todo is displayed
  });

  // Test 3: Verify that a todo item can be toggled
  test('toggles a todo', () => {
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through'); // Check if todo is marked as completed
  });

  // Test 4: Verify that a todo item can be deleted
  test('deletes a todo', () => {
    const deleteButton = screen.getAllByText('Delete')[0]; // Get the delete button for the first todo
    fireEvent.click(deleteButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2); // Check if a todo is deleted
  });
});