//class which allows us to build objects to put in list and display to user
class Link {
    constructor(title, url, author) {
        this._title = title;
        this._url = url;
        this._author = author;
    }

    get title() {
        return this._title;
    }

    get url() {
        return this._url;
    }

    get author() {
        return this._author;
    }
}

//list to hold objects entered by user
const siteLinks = [];

//site menu
const inputMessage = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit
`

while(true){
    //get menu choice from user
    let userInput = Number(prompt(inputMessage));

    //if user picks opt. 1 then display links in list
    if(userInput === 1) {
        //empty string upon which to build from objects in list
        let textOutput = "";
        //iterate over list creating string from object on each iteration
        for(let i = 0; i < siteLinks.length; i++) {
            textOutput += `\n${i+1} : ${siteLinks[i].title} (${siteLinks[i].url}). ${siteLinks[i].author}`;
        }
        alert(textOutput)
    //if user selects opt. 2 provide functionality to add links to list
    } else if(userInput === 2) {
        //get url from user
        let urlInput = String(prompt("Enter a url and include https://"))
        //if user forgets to start link with https:// then add it to front
        if(!urlInput.startsWith("https://")) {
            urlInput = "https://" + urlInput;
        }
        //get title of the link
        let titleInput = String(prompt("Enter a title for the link"));
        //get author's name 
        let authorInput = String(prompt("Enter the link's author"));
        //create a new instance of Link and push object into siteLinks list
        siteLinks.push(new Link(titleInput, urlInput, authorInput));
    } else if(userInput === 3) {
        //if option 3 chosen then get the index at which to remove link
        let toRemove = Number(prompt("At what index is the item you wish to remove?"));
        //use splice to remove one link
        siteLinks.splice(toRemove, toRemove+1);
    } else {
        //if user selectes opt. 0 tell them goodbye and quite program.
        alert("Goodbye!");
        break;
    }
}