//Here is where you import the background images for your pages
import exemple1 from"../images/exemple1.png"
import exemple2 from"../images/exemple2.png"
import exemple3 from"../images/exemple3.png"

//Here's where the pages of your story go.
//Every page has some properties, lets go through them:
//
//name: is the name of the object itself. It's important that they are 
//named as "page#" (page1, page2, page3, etc.).
//
//title: is the bigger piece of text on the top of the page.
//
//text: is the main text of the page, and, because of the way pages are
//structured, it can be as log as you like.
//
//options: these are the buttons that go in the bottom of the page.
//Each one has a name, and a "goTo". The name is the text on the button,
//and the goTo is the number of the page to which the players go when
//they click on it.
//
//backgroundImage: is the image behind the other elements of the page.
//You can leave it blank, and it will then be set to de default color.
//You should import every image at the top.
//

export const story = {
    page1: {
        title: "Page 1",
        text: "You're facing a tough question. As you're abou to create a text adventure game, you have two options, you may either use CYOS engine, or go with some other one. What are you going to do?",
        backgroundImage: exemple1,
        backgroundSong: "exempleSong1.mp3",
        options: [
            {
                name: "Use CYOS",
                goTo: 2
            },
            {
                name: "Betrayal",
                goTo: 3
            }
        ]
    },
    page2: {
        title: '"Pro-grammer move"',
        text: "You have made the right decision. You may proceed to your gamery quest!",
        backgroundImage: exemple2,
        backgroundSong: "exempleSong2.mp3",
        options: [
            {
                name: "Go to page 1",
                goTo: 1
            }
        ]
    },
    page3: {
        title: "You're a traitor!",
        text: "You've made the wrong choice. Go back to page one!",
        backgroundImage: exemple3,
        backgroundSong: "exempleSong3.mp3",
        options: [
            {
                name: "Go to page 1",
                goTo: 1
            }
        ]
    }
}