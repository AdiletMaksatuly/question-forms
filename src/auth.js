export function getAuthForm() {
   return `
      <form class="mui-form" id="auth-form">
         <div class="mui-textfield mui-textfield--float-label">
            <input type="email" id="email" required>
            <label for="email">Email</label>
         </div>
         <div class="mui-textfield mui-textfield--float-label">
            <input type="password" id="password" required>
            <label for="password">Password</label>
         </div>
         <button id="submit" type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>
      </form>
   `
}

export function authWithEmailAndPassword(email, password) {

   const API_KEY = "AIzaSyCy2T5417_jzu3vEFZp7e7shstoSYkjFkk";
   return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}
   `, {
      method: 'POST',
      body: JSON.stringify({
         email, password, returnSecureToken: true,
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   })
      .then(response => response.json())
      .then(data => data.idToken);
}