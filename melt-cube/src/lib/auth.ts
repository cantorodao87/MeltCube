  export function login(username: string, password: string): boolean {
    // Simulación sencilla (en real: llamada a base de datos o API)
    if (username && password) {
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }
  
  export function logout() {
    localStorage.removeItem('user');
  }
  
  export function getCurrentUser(): string | null {
    return localStorage.getItem('user');
  }