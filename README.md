# Tarantella
General Assembly React Project

### Overview

**Tarantella** is a community-based music app designed with the undecisive music listener in mind. Through a simple interface, a user can add all of their favorite songs to a shared database and let their app choose which song to listen to next. Discover music you have never heard off. The user can press shuffle to get a random song, or click through the songs in the database to view their song's information. It is up to a user to add the song: title, artist, genre, and album; a picture will be optional to add to their entry. A familiar design will greet the user as they scroll through new upbeat music options. Let's all Taranella! 
<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

<br>

### MVP

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

#### Goals

- _Create the React schema and enter 5 data pieces by the end of Monday 8/3_
- _Working and finishing functions used to got to a Shuffle page, and go to the Next and Back pages by Tuesday 8/4._
- _Adding CSS and finishing touches to achieve MVP by Wednesday 8/5._
- _Attempting Post MVP on Thursday, 8/6._
- _Finishing touches and presenting on Friday 8/7._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | This will link the songs on Homepage to their info page |



<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Airtable |      yes      | Airtable.com_ |https://api.airtable.com/v0/appgWGu76q5261d23/Songs/recSbscsBZCjyVBoi \ |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Home Page    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|    Header    | functional |   n   |   n   | _The header will contain the title of the App._               |
|  Shuffle Page  | functional |   y   |   n   | _The Shuffle page will be a result of the user pressing the shuffle button._       |
|   Next Page    |   functional    |   y   |   n   | _The Next page will be a result of the user pressing the next arrow. Displays next song._      |
| Back Page | functional |   y   |   y   | _The Back page will be a result of the user pressing the back arrow. Displays previos song._                 |
|    Footer    | functional |   n   |   n   | _The footer will show what I referenced for the project._ |

<br>

#### Component Estimates

> Below is my estimate for each component of this project:

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| Setting up React App, Git HUB, and ReadME |    H     |     3 hrs      |     3 hrs     |     3 hrs     |
| Project proposal and Approval |    H     |     1.5 hrs      |     TBD     |     TBD     |
| Connect API and make sure it renders  |    H     |     3 hrs      |      TBD     |    TBD    |
| Making sure functions work correctly |    H     |     3 hrs      |     TBD     |     TBD     |
| Add 5 songs data |    H     |     1 hr      |     TBD     |     TBD     |
| CSS to get correct display |    M     |     3 hrs      |     TBD     |     TBD     |
| Adding media queries to make app responsive |    H     |     3 hrs      |     TBD     |     TBD     |
| Making Sure CRUD aspects work |    H     |     3 hrs      |     TBD     |     TBD     |
| Debugging |    H     |     3 hrs      |     TBD     |     TBD     |
| Making sure that default image is added |    L     |     1.5 hrs      |     TBD     |     TBD     |
| Delete CRUD Button |    L     |     2 hrs      |     TBD     |     TBD     |
| Advanced CSS |    L     |     2 hrs      |     TBD     |     TBD     |
| Sending page info to user |    L     |     3 hrs      |     TBD     |     TBD     |
| Third-party API research and addition  |    L     |     3 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     32 hrs      |     TBD     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

> My project will include the following post MVP:

- _Adding a default image when no picture in included._
- _Adding deleting of song info button._
- _Adding animations to buttons._
- _Finding a way to send song info to user if they like the song._
- _Looking an API that can potentially play a snippet of the song._


<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

