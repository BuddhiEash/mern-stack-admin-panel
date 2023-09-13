export default function Login() {
return (
    <main class="container-fluid login-page">
        <h1 align="center">Admin Panel</h1>
        <form>
        <label for="email">Username</label>
        <input type="text" id="username" name="username" placeholder="JohnDoe_404" required/>
        <label for="email">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" required/>
        <small>Don't have an account? <a href="https:google.com">Register</a></small>
        <button type="submit">Login</button>
        </form>
    </main>
);
}
