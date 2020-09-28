# Tarantella

General Assembly React Project

# Project URL
https://tarantellamusic.netlify.app/

### Overview

**Tarantella** is a community-based music app designed with the undecisive music listener in mind. Through a simple interface, a user can add all of their favorite songs to a shared database and let their app choose which song to listen to next. Discover music you have never heard off. The user can press shuffle to get a random song, or click through the songs in the database to view their song's information. It is up to a user to add the song: title, artist, genre, and album; a picture will be optional to add to their entry. A familiar design will greet the user as they scroll through new upbeat music options. Let's all Taranella!
<br>

### Wireframes

[Homepage](https://imgur.com/a/kEmMbSp)

- Homepage for App

[Shuffle/Next/Back/ ](https://imgur.com/a/5oWddoY)

- Once song or button are clicked

[Pop-up How To](https://imgur.com/a/5s7JddA)

- Once How-to is clicked popup will appear

<br>

### MVP

> My project will include the following MVP:

- _A functioning database where useres can add and view songs._
- _Links that can bring you the information of a song: ._
- _Circle menu that allow you to grab a new song(shuffle), next song(next), or go previous song(back)._
- _Menu displaying songs added by users._
- _Page is supposed to look like an MP3 Player._

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

|   Library    | Description                                             |
| :----------: | :------------------------------------------------------ |
| React Router | Used to create Routes for clicked buttons that lead to sections |
| Axios | Used to link Airtable API and to render images and information on the page |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|   API    | Quality Docs? | Website        | Sample Query                                                             |
| :------: | :-----------: | :------------- | :----------------------------------------------------------------------- |
| Airtable |      yes      | Airtable.com\_ | https://api.airtable.com/v0/appgWGu76q5261d23/Songs/recSbscsBZCjyVBoi \  |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
      |__ Add.png
      |__ App.css
      |__ App.js
      |__ App.test.js
      |__ Backwards.png
      |__ Footer.js
      |__ Github.png
      |__ Header.js
      |__ Homepage.js
      |__ HowTo.js
      |__ index.css
      |__ index.js
      |__ Linkedin.png
      |__ NewSong.js
      |__ serviceWorker.js
      |__ setupTests.js
      |__ Shuffle.png
      |__ Skip.png
      |__ SongInfo.js
      
```

<br>

#### Component Breakdown

| Component |    Type    | state | props | Description                                                                               |
| :-------: | :--------: | :---: | :---: | :---------------------------------------------------------------------------------------- |
| Homepage  | functional |   n   |   y   | _The Homepage contains the song menu._                                        |
|   HowTo   | functional |   n   |   n   | _The HowTo has all the infomation on how to use the App._                                                         |
|  Header   | functional |   n   |   n   | _The Header will contain the title and the how to use aspect of the App._                                           |
|  NewSong  | functional |   y   |   y   | _The NewSong allows the user to add a new song to the database._              |
| SongInfo  | functional |   y   |   y   | _The SongInfo page displays all the info on a song: title, album, genre, artist, and an album picture._ |
|  Footer   | functional |   n   |   n   | _The footer will show what I referenced for the project._                                 |

<br>

#### Component Estimates

> Below is my estimate for each component of this project:

| Task                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Setting up React App, Git HUB, and ReadME   |    H     |     3 hrs      |     5 hrs     |    5 hrs    |
| Project proposal and Approval               |    H     |    1.5 hrs     |      . 5 hrs      |     .5 hrs     |
| Connect API and make sure it renders        |    H     |     3 hrs      |      3 hrs      |     3 hrs     |
| Making sure functions work correctly        |    H     |     3 hrs      |      5 hrs      |     5 hrs     |
| Add 15 songs data                            |    H     |      1 hr      |      2 hrs      |     2 hrs     |
| CSS to get correct display                  |    M     |     3 hrs      |      4 hrs      |     4 hrs     |
| Linking How-to                        |    H     |     2 hrs      |      1 hr      |     1 hr     |
| Adding media queries to make app responsive |    H     |     3 hrs      |      5 hrs      |     5 hrs     |
| Making sure CRUD Adding aspects work        |    H     |     3 hrs      |      2 hrs      |     2 hrs     |
| Debugging                                   |    H     |     3 hrs      |      6 hrs      |     6 hrs     |
| Making sure that default image is added     |    L     |    1.5 hrs     |      1 hr      |     1 hr     |
| Delete CRUD Button                          |    L     |     2 hrs      |      0 hrs      |     0 hrs     |
| Advanced CSS                                |    L     |     2 hrs      |      5 hrs      |     5 hrs     |
| Third-party API research and addition       |    L     |     3 hrs      |      0 hrs      |     0 hrs     |
| TOTAL                                       |    -     |     34 hrs     |      39.5 hrs      |     39.5 hrs     |

<br>


### Post-MVP

> My project will include the following post MVP:

- Adding a default image when no picture in included.
- Adding deleting of song info button.
- Adding animations to buttons.
- Finding a way to send song info to user if they like the song.
- Looking an API that can potentially play a snippet of the song.

<br>

---

## Project Delivery

### Code Showcase

```
const [color, updateColor] = useState("white")


<div className="color-buttons">
          <button
            className="white"
            onClick={() => updateColor("white")}
          ></button>
          <button className="red" onClick={() => updateColor("red")}></button>
          <button className="pink" onClick={() => updateColor("pink")}></button>
          <button
            className="orange"
            onClick={() => updateColor("orange")}
          ></button>
          <button
            className="yellow"
            onClick={() => updateColor("yellow")}
          ></button>
          <button
            className="green"
            onClick={() => updateColor("green")}
          ></button>
          <button className="blue" onClick={() => updateColor("blue")}></button>
          <button
            className="purple"
            onClick={() => updateColor("purple")}
          ></button>
        </div>

```
- In this section the buttons with a diffrent class are all changing the useState of color. It assigns a class of that color when the button is clicked. It leaves the body that color until you refresh

### Code Issues & Resolutions

> I ran into the following problems while working:
- Shuffle page had a specific id so I couldn't shuffle it again. I had to move the function to not be a link and placed on app.js
- Next and Back had the same issue as above
- Had to remove all links and switch to a buttons to toggle a function instead of a redirect
- Color buttons had to dynamically add a class. Had to set default color to white
- Once deployed, images were not displaying on ios devices. Had to make the images local
- Had to pass props to SongInfo so it would rerender once song info changed
- Had to pass props to NewSong to make sure it rendered automatically
