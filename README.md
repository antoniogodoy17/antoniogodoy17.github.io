# Basic Portfolio Hosted on Github Pages

## Introduction

Here you will learn how to host a website (in this case, a basic portfolio website) using Github Pages and the Materialize CSS framework. I will cover how to setup the hosting with Github and the basic structure of the html, without digging in on the css or js files. After finishing with this tutorial you will have access to your portfolio website on internet, with a basic template of a portfolio (using the default materialize css style and colors). If you want to style your website, see the css and js files from this repository.

## Steps

### Create github repository
Go to [GitHub](http://github.com) and create a new repository named yourusername.github.io. Replace "yourusername" for your Github username, it must be written as it is, or it will not work.
  
### Clone your github repository
Go ahead and clone your new repository usign the following command, remember that you need to navigate to the folder where you want to clone the repository in.
  
  ```
  git clone https://github.com/username/username.github.io
  ```
### Create static portfolio webpage
For this portfolio we are going to use Materialize CSS framework. If you are interested, you can check it out [here](https://materializecss.com/). The structure of our portfolio will be the following:

  ```
  Portfolio/
  |-- index.html
  |-- css/
  |   |-- style.css
  |-- js/
  |   |-- script.js
  |-- res/
  |   |-- img/
  |       |-- me.jpg
  |-- cv/
  |   |-- myCV.pdf
  ```
1. Index Page
    
    As we are working with Materialize CSS framework, the structure of our index page will be a little bit different. We need to put everything inside a header, main, or footer tag within the body tag, just as follows:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
</head>

<body>

  <header>
  </header>
  
  <main>
  </main>
  
  <footer>
  </footer>

</body>
</html>
```

  * Import everything important

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">

    <!-- Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <!-- Import jQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>  
  
    <!--Let browser know website is optimized for mobile--> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

  <body>
    
    <header></header>
    
    <main></main>
  
    <footer></footer>
  
    <!--JavaScript at end of body for optimized loading-->
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
  </body>
</html>    
  ```
  
  * Header and Navigation Bar
The header will contain a profile picture, our name, what do you do, a quote, and a navigation bar provided by materialize.

    *NOTE: I recommend you to edit your picture and make it a square picture.*

```html
<header>
  <!-- Profile Picture -->
  <img src="res/img/me.jpg" class="circle responsive-img"> <!-- notice the "circle" class -->
  <!-- Name -->
  <h1>Your Name Here</h1>
  <!-- Profession -->
  <h5>Profession or Occupation</h5>
  <!-- Quote -->
  <p><i>"Some great quote."</i></p>

  <!-- Navigation Bar -->
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" data-target="side-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="hide-on-med-and-down">
          <li><a href="#about-section">About Me</a></li>
          <li><a href="#experience-section">Experience</a></li>
          <li><a href="#skills-section">Skills</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact-section">Contact</a></li>
          <li><a href="#cv-section">Curriculum Vitae</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <!-- Side Navigation Bar -->
  <ul class="sidenav">
    <li><a class="sidenav-close" href="#about-section">About Me</a></li>
    <li><a class="sidenav-close" href="#experience-section">Experience</a></li>
    <li><a class="sidenav-close" href="#skills-section">Skills</a></li>
    <li><a class="sidenav-close" href="#projects-section">Projects</a></li>
    <li><a class="sidenav-close" href="#contact-section">Contact</a></li>
    <li><a class="sidenav-close" href="#cv-section">Curriculum Vitae</a></li>
  </ul>
</header>
```
  * Sections
    * About Me

      ```html
      <!-- About Me -->
      <div id="about-section">
        <h3>About Me</h3>

        <div class="row">
          <div class="col s12 m12 l12 xl4">
            <h5>Who am I?</h5>
            <p>Write something interesting about you here.</p>
          </div>

          <div class="col s12 m12 l12 xl4">
            <h5>What do I do?</h5>
            <ul class="collapsible black-text">
              <li>
                <div class="collapsible-header"><i class="material-icons">desktop_windows</i>Option 1</div>
                <div class="collapsible-body">
                  <p>Lorem Ipsum.</p>
                </div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">desktop_windows</i>Option 2</div>
                <div class="collapsible-body">
                  <p>Lorem Ipsum.</p>
                </div>
              </li>
            </ul>   
          </div>

          <div class="col s12 m12 l12 xl4">
            <h5>What are my interests?</h5>
            <p>Write what are your hobbies and what do you like.</p>
          </div>
        </div>
      </div>
      ```

    * Experience
      ```html
      <!-- Experience -->
      <div id="experience-section">
        <h3>Experience</h3>

        <div class="row">
          <div class="col s12 m6 l6">
            <h5>Profession</h5>

            <ul class="collapsible black-text">
              <li>
                <div class="collapsible-header"><i class="material-icons">beenhere</i>(From - To) Position at Enterprise</div>
                <div class="collapsible-body">
                  <span>Write about your responsibilities and tasks here.</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="col s12 m6 l6">
            <h5>Volunteer</h5>
  
            <ul class="collapsible black-text">
              <li>
                <div class="collapsible-header"><i class="material-icons">beenhere</i>(From - To) Volunteer at Organization</div>
                <div class="collapsible-body">
                  <span>Write about your responsibilities and tasks here.</span>
                </div>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
      ```
    * Skills
      ```html
      <!-- Skills -->
      <div id="skills-section">
        <h3>Skills</h3>

        <div class="row">
          <div class="col s12 m12 l12 xl6">
            <h5>Programming</h5>

            <div class="col s12 m6 l6">
              <ul>
                <li>
                  <div class="col s6 left-align">Some Programming Language</div>
                  <div class="col s6 right-align">(85%)</div>
                  <div class="progress">
                    <div class="determinate" style="width: 85%"></div>
                  </div>       
                </li>
                <li>
                  <div class="col s6 left-align">Some Programming Language</div>
                  <div class="col s6 right-align">(85%)</div>
                  <div class="progress">
                    <div class="determinate" style="width: 85%"></div>
                  </div>  
                </li>
                <li>
                  <div class="col s6 left-align">Some Programming Language</div>
                  <div class="col s6 right-align">(85%)</div>
                  <div class="progress">
                    <div class="determinate" style="width: 85%"></div>
                  </div>  
                </li>             
              </div>
            </div>

            <div class="col s12 m12 l12 xl6">
              <h5>Personal</h5>
              <div class="container">
                <div class="row">
                  <div class="col s6 m4 l4">
                    <a class="waves-effect waves-light btn">Leadership</a>
                  </div>
                  <div class="col s6 m4 l4">
                    <a class="waves-effect waves-light btn">Honesty</a>
                  </div>
                  <div class="col s6 m4 l4">
                    <a class="waves-effect waves-light btn">Dedication</a>
                  </div>
                </div>         
              </div>
            </div>
               
        </div>
      </div>
      ```
       
    * Projects
      ```html
      <!-- Personal Projects -->
      <div id="projects-section">
        <h3>Personal Projects</h3>

        <div class="row">
          <div class="col s12 m12 l6 xl4">
            <div class="card">
              <div class="card-content black-text">
                <span class="card-title">Github Portfolio Website</span>
                <p>Portfolio website made with Materialize CSS Framework on Github Pages.</p>
                <p class="content-footer">Tools: HTML, CSS, Materialize CSS, JS, jQuery.</p>
              </div>
              <div class="card-action">
                <a href="https://github.com/antoniogodoy17/antoniogodoy17.github.io">Go to repository</a>
              </div>
            </div>
          </div>      
        </div>
      </div>
      ```
     
    * Contact
      ```html
      
      ```
      
    * Curriculum Vitae
      ```html
      
      ``` 
      
  * Footer

2. Setup email service

If you want to receive emails directly from your portfolio website, you can achieve this using [Formspree](https://formspree.io/), which is very easy to use and it also provides you customized forms if you do not want to spend time creating your own.
