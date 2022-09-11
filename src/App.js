import './App.css';

function App() {
  // require('dotenv').config()
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  return(
    <div className = 'App'>
      <a href = {`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:4000/auth&scope=user%20repo`}
      >LOGIN WITH GITHUB</a>
    </div>
  ) 
}

export default App;
