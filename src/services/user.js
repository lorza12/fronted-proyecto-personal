const API_URL = process.env.REACT_APP_API_URL;

async function getMyProfile() {
  const getToken = () => window.localStorage.getItem('token');
  const res = await fetch(`${API_URL}/api/users/me`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  if (res.ok) return res.json();
  throw new Error('Bad Credentials');
}

export async function modifyUser(_id, userData) {
  const token = window.localStorage.getItem('token');
  const res = await fetch(`${API_URL}/api/users/edit/${_id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/jason',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
  if (res.ok) return res.json();
  throw new Error('error user not modified!');
}

export default getMyProfile;
