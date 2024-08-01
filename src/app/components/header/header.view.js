
import './header.scss';
import logo from '../../../assets/imgs/logo.png';
import Back from '../../../assets/imgs/back.svg';
import Left from '../../../assets/imgs/Left.png';

export class HeaderView {
  selector = 'header';

  constructor() {
   
  }

  render() {
    const header = document.querySelector(`.header`)

    if (header) {
      return;
    }

    document.getElementById(this.selector).innerHTML = `
      <div class="header">
        <div class="container">
          <div class="header__container">
            <a class="header__block" href="index.html">
              <img
                width="20"
                height="20"
                src=${logo}
                alt="site logo"
                class="header__block-logo"
              />
              <span class="header__block-logo-text">
                TaskTrack
              </span>
            </a>
            <div class="header__menu">
              <div class="header-burger">
                <div class="header-burger-line"></div>
                <div class="header-burger-line"></div>
                <div class="header-burger-line"></div>
              </div>
              <div class="header-burger-menu">
                <button class="header-burger-close">✖</button>
                <a class="header-back-icon" href="#" target="__blank">
                  <img
                    width="24"
                    src=${Left}
                    height="24"
                    alt="back logo"
                    class="burger-left-icon"
                  />
                </a>
                <button class="header-burger-logout">Log out</button>
              </div>
            </div>
            <a class="header-back-icon" href="#" target="__blank">
              <img
                width="24"
                src=${Back}
                height="24"
                alt="back logo"
                class="header-back-icon"
              />
            </a>
          </div>
        </div>
        <div class="header--bottom">
          <div class="personal-info">
            <div class="personal-info--top">
              <h2 class="personal-info--name">Welcome Jane!</h2>
              <p class="personal-info--role">Editor</p>
            </div>
            <p class="personal-info--question">What is on due today?</p>
          </div>
          <div class="phone-number">
            <p class="phone-number--top">User phone number:</p>
            <p class="phone-number--bottom">+9998 99 212 12 12</p>
          </div>
        </div>
      </div>
    `;
    this.bindEvents();
  }
  bindEvents() {
    const burger = document.querySelector('.header-burger');
    const burgerMenu = document.querySelector('.header-burger-menu');
    const closeBtn = document.querySelector('.header-burger-close');

    if (window.innerWidth <= 768) { // Mobile version
      burger.addEventListener('click', () => {
        burgerMenu.classList.toggle('header-burger-menu--open');
        burger.classList.toggle('active');
      });

      closeBtn.addEventListener('click', () => {
        burgerMenu.classList.remove('header-burger-menu--open');
        burger.classList.remove('active');
      });
    }
  }
}

