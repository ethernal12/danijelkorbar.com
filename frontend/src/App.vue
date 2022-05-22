<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Danijel Korbar</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
         

            <li class="nav-item">
              <router-link class="nav-link" to="/biography"
                >Biography</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/experience"
                >Experience</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
              <li class="nav-item" >
             <a
          href="https://github.com/ethernal12?tab=repositories"
          target="_blank"
        >
          <img src="./assets/github_icon.png" height="35px" style = "margin-left:20px" alt="GitHub-pic"
        /></a>
            </li>
          </ul>
        </div>
      </div>
     
   
      
     
    </nav>

    <router-view />
  </div>
  
</template>

<style>
@import "main.css";
</style>




