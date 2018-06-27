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
  |   |-- cv/
  |       |-- myCV.pdf
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

    The header will contain a profile picture, your name, what do you do, a quote, and a navigation bar provided by materialize. We also include a sidenav which will appear when the screen size is too small or when the website is accessed from a tablet/smartphone.

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
    
    These sections will be the main part of your portfolio. You need to display the most important information about you here. Remember that all of these sections must be inside the main tag, within the body tag.
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
                  <span>Lorem Ipsum.</span>
                </div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">desktop_windows</i>Option 2</div>
                <div class="collapsible-body">
                  <span>Lorem Ipsum.</span>
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
                    <a class="waves-effect waves-light btn">Skill 1</a>
                  </div>
                  <div class="col s6 m4 l4">
                    <a class="waves-effect waves-light btn">Skill 2</a>
                  </div>
                  <div class="col s6 m4 l4">
                    <a class="waves-effect waves-light btn">Skill 3</a>
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
                <span class="card-title">Project Title</span>
                <p>About the project</p>
              </div>
              <div class="card-action">
                <a href="#!">Link to project</a>
              </div>
            </div>
          </div>      
        </div>
      </div>
      ```
     
    * Contact
      ```html
      <!-- Contact -->
      <div id="contact-section">
        <h3>Contact</h3>

        <div class="row">
          <div class="col s12 xl10 offset-xl1">
            <p>Invite people to contact you.</p>
          </div>

          <div class="col s12 xl10 offset-xl1">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12 m12 xl6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" name="name" type="text" class="validate" required>
                    <label for="icon_prefix">Name</label>
                  </div>
                  
                  <div class="input-field col s12 m12 xl6">
                    <i class="material-icons prefix">email</i>
                    <input id="email" name="email" type="email" class="validate" required>
                    <label for="email">Email</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">subject</i>
                    <input id="icon_telephone" name="subject" type="text" class="validate" required>
                    <label for="icon_telephone">Subject</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">message</i>
                    <textarea id="icon_prefix2" name="message" class="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Message</label>
                  </div>
                </div>

                <div class="row">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ```      
    * Curriculum Vitae
      ```html
      <!-- CV -->
      <div id="cv-section">
        <h3>Curriculum Vitae</h3>

        <p>Invite people to downlad your CV.</p>
        <div class="col s12">                    
          <a href="res/cv/myCv.pdf" download="myCv.pdf" class="waves-effect waves-light btn"><i class="material-icons right">file_download</i>Download CV</a>
        </div>
      </div>
      ``` 
      
  * Footer
  
    The footer will contain links to your LinkedIn, your Github and your YouTube channel. Feel free to add as many as you like. Remember that all of this content must be inside the footer tag, within the body tag, as shown below.
  ```html
  <footer class="page-footer">
    <div class="container center-align">
      <div class="row">
        <div class="col s12">
          <h3>Some Title</h3>
          <p>Some quote, slogan or importan information.</p>
          
          <ul>
            <li><a target="_blank" href="#!"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a target="_blank" href="#!"><i class="fab fa-github"></i></a></li>
            <li><a target="_blank" href="#!"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-copyright">
      <div class="container center-align">
        Some copyright text here.
      </div>
    </div>
  </footer>
  ```
  * Sticky Footer
    
    In order to always have your footer at the bottom of the website, you must add this to your css file and liked it to your index.html file:
    
    ```css
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }
    ```

2. Setup Email Service (optional)

    If you want to receive emails directly from your portfolio website, you can achieve this using [Formspree](https://formspree.io/), which is very easy to use and it also provides you customized forms if you do not want to spend time creating your own. The only thing you hace to do is to follow the instructions provided by Formspree on its website and add the action attribut to your form as shown below:

  ```html
  <form class="col s12" method="POST" action="https://formspree.io/your@email.com">   
    .
    .
    . 
  </form>
  ```

3. Bring It to Life

  * After you are done with all your editing, now you can just push it to your github repository using the following commands.
  *NOTE: Remember that, before running these commands, you must be on the root of your folder, at the same level than your index.html.*
  
  ```
  git add --all
  git commit -m "Portfolio Website"
  git push -u origin master
  ```
  * Now, open up your favorite browser and go to https://username.github.io.

3. Resources and Demo

    If you would like to see this portfolio up and running, there is a link to it below. I also added the resources I used in order to achieve this, feel free to give them a look.

  * [Portfolio](https://antoniogodoy17.github.io/)
  * [Github Pages](https://pages.github.com/)
  * [Formspree](https://formspree.io/)
  * [Materialize](https://materializecss.com/)
