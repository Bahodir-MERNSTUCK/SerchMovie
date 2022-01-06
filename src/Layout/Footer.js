import React from 'react'

export default function Footer(){
    return(
        <footer class="page-footer foot">
        <div class="container">
        <div class="footer-copyright">
          <div class="container">
          @{new Date().getFullYear()} Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">Movie</a>
          </div>
        </div>
        </div>
      </footer>
    )
}