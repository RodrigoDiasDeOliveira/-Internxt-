import { fireEvent, waitFor } from "@testing-library/react";
import { render } from "react-dom";
import { AuthContext } from "../components/context/AuthContext";
import React from "react";

test('displays error message on failed login attempt', async () => {
  const mockLogin = jest.fn().mockRejectedValue(new Error('Invalid credentials'));

  render(
    <AuthContext.Provider value={{ login: mockLogin, isAuthenticated: false }}>
      <Login />
    </AuthContext.Provider>
  );

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'wronguser' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  await waitFor(() => expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument());
});
