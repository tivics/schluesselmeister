<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tivics/schluesselmeister">
    <img src="images/schlusselmeister.png" alt="Logo" width="640" height="265">
  </a>

<h3 align="center">Schluesselmeister</h3>

  <p align="center">
    Schluesselmeister has the keys and gets the women
    <br />
    <a href="https://github.com/tivics/schluesselmeister"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/tivics/schluesselmeister/issues">Report Bug</a>
    ·
    <a href="https://github.com/tivics/schluesselmeister/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/tivics/schluesselmeister/)

Schluesselmeister is a middleware for handling Spotify authentication   

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

First install latest version of NPM
* npm
  ```sh
  npm install npm@latest -g
  ```
 
### Installation

1. Register on [Spotify Developer Portal](https://developer.spotify.com/) and create a free Spotify Application 
2. Goto Edit Settings, add http://localhost:8888/callback as Redirect URI and save your changes
2. Clone the repo
  ```sh
  git clone git@github.com:tivics/schluesselmeister.git
  ```
3. Create a `.env` file in the project folder and enter
  ```sh 
  npm install dotenv --save-dev
  ```
4. Install NPM packages
  ```sh
  npm install express --save-dev
  npm install dotenv --save-dev
  npm install axios
  ```
5. `.env` Setup:
  ```js
  "SPOTIFY_CLIENT_ID=YOUR SPOTIFY CLIENT ID"
  "SPOTIFY_CLIENT_SECRET=YOUR SPOTIFY CLIENT SECRET"
  "REDIRECT_URI=http://localhost:8888/callback
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Usage -->
## Usage

1. Call URL http://localhost:8888/login  
2. Fill in your login credentials and receive your bearer token

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/tivics/schluesselmeister/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License
<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->

TBD

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<a href="mailto:christian.schaefer.07@gmail.com">Christian Schäfer</a> - [@tivics7](https://twitter.com/tivics7)

Project Link: [schluesselmeister](https://github.com/tivics/schluesselmeister)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tivics/schluesselmeister.svg?style=for-the-badge
[contributors-url]: https://github.com/tivics/schluesselmeister/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tivics/schluesselmeister.svg?style=for-the-badge
[forks-url]: https://github.com/tivics/schluesselmeister/network/members
[stars-shield]: https://img.shields.io/github/stars/tivics/schluesselmeister.svg?style=for-the-badge
[stars-url]: https://github.com/tivics/schluesselmeister/stargazers
[issues-shield]: https://img.shields.io/github/issues/tivics/schluesselmeister.svg?style=for-the-badge
[issues-url]: https://github.com/tivics/schluesselmeister/issues
[license-shield]: https://img.shields.io/github/license/tivics/schluesselmeister.svg?style=for-the-badge
[license-url]: https://github.com/tivics/schluesselmeister/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/christian-schäfer-a9818012a/
[product-screenshot]: images/product.png