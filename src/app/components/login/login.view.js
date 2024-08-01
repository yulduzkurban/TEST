// AuthViews.js
import "./login.scss";
import "./register.scss"; // Only import this once if needed globally
import logo from "../../../assets/imgs/logo.svg";
import { eventBus } from '../../../utils/event-bus';

class LoginView {
    selector = "content";

    constructor() {
        // this.render();
    }

    render() {
        const login = document.createElement('div')
        login.classList.add('login');
        login.innerHTML = `
            <div class="login_content">
                <div class="content_header">
                    <div class="content_header-logo">
                        <img
                            src="${logo}"
                            class="content_header-logo-img"
                            alt="logo-img"
                            width="33"
                            height="33"
                        />
                        <span>TaskTracker</span>
                    </div>

                    <div class="login_form-info">
                        <h2 class="login_form-info-title">Log in to your account</h2>
                        <span class="login_form-info-subtitle">
                            Welcome back! Please enter your details.
                        </span>
                    </div>
                </div>

                <form class="login_form">
                    <input
                        type="text"
                        class="login_form-input"
                        placeholder="Username"
                        id="username"
                        required
                    />
                    <input
                        type="password"
                        class="login_form-input"
                        placeholder="Password"
                        id="password"
                        required
                    />
                    <button type="submit" class="login_form-submit">
                        Sign in
                    </button>

                    <div class="login_form-footer">
                        <span>Don't have an account?</span>
                        <a href="#!" id="link-to-register">Sign up</a>
                    </div>
                </form>
            </div>
        `;

        document.getElementById(this.selector).innerHTML = '';
        document.getElementById(this.selector).appendChild(login)

        // Attach event listener to the "Sign up" link
        document.getElementById('link-to-register').addEventListener('click', (e) => {
            e.preventDefault();
            new RegisterView();
        });

        document.querySelector('.login_form').addEventListener('submit',  async (e) => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const token = username + ":" + password;
            const hash = btoa(token);
          
            try {
              const response = await fetch('http://localhost:8081', {
                method: 'GET',
                headers: {
                  'Authorization': 'Basic ' + hash
                }
              });
          
              const responseData = await response.text();
              alert(response.status);
              document.querySelector('.response').innerHTML = responseData;
            } catch (error) {
              console.error('Error:', error);
            }
        });
    }

      login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        // Create headers with Basic Auth
        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    
        try {
            const response =  fetch('http://localhost:8081/task', {
                method: 'GET',  // Using GET method as per your backend setup
                headers: headers,
            });
    
            if (response.ok) {
                // Successfully authenticated
                eventBus.publish('show-dashboard');
            } else {
                // Authentication failed
                alert('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            alert('An error occurred. Please try again later.');
        }
    }
    
}

class RegisterView {
    selector = "content";

    constructor() {
        this.render();
    }

    render() {
        document.getElementById(this.selector).innerHTML = `
        <div class="login">
            <div class="login_content">
                <div class="content_header">
                    <div class="content_header-logo">
                        <img
                            src="${logo}"
                            class="content_header-logo-img"
                            alt="logo-img"
                            width="33"
                            height="33"
                        />
                        <span>TaskTracker</span>
                    </div>

                    <div class="login_form-info">
                        <h2 class="login_form-info-title">Create an account</h2>
                        <span class="login_form-info-subtitle">
                            Start your planning today
                        </span>
                    </div>
                </div>

                <form class="login_form">
                    <input
                        type="text"
                        class="login_form-input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        class="login_form-input"
                        placeholder="Password"
                        required
                    />
                    <button type="submit" class="login_form-submit">
                        Get Started
                    </button>

                    <div class="login_form-footer">
                        <span>Already have an account?</span>
                        <a href="#!" id="link-to-login">Log in</a>
                    </div>
                </form>
            </div>
        </div>
        `;

        document.getElementById('link-to-login').addEventListener('click', (e) => {
            e.preventDefault();
            const loginView = new LoginView();
            loginView.render();
        });

        
        document.querySelector('.login_form').addEventListener('submit', (e) => {
            e.preventDefault();
            eventBus.publish('show-dashboard')
        });
        
    }
}

// Export the views for use in other parts of the application
export { LoginView, RegisterView };
