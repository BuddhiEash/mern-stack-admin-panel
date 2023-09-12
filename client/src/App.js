import '@picocss/pico'
import './App.css';

function App() {
  return (
      <main class="container-fluid login-page">
        <h1 align="center">Login</h1>
        <form>
        <label for="email">Username</label>
        <input type="text" id="username" name="username" placeholder="JohnDoe_404" required></input>
        <label for="email">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" required></input>
        <small>Don't have an account? <a href='#'>Register</a></small>
        <button type="submit">Login</button>
        </form>
      </main>
  );
}

export default App;
