const API_URL = process.env.REACT_APP_API_URL;

async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/local/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ email, password }),
  });
  if (res.ok) return res.json();
  throw new Error('Bad Credentials');
}

export default login;
