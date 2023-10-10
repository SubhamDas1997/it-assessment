<h1 align="center">Document Dashboard</h1>

### 🌐 [Site](https://it-assessment.vercel.app/)
### 🔴 [Project Demo](https://youtu.be/BXHq99Aftkk)

# Background
This learning assignment is the outcome of the interview rounds of Integral Technologies.

Through this assignement, my grasp on concepts such as fetching data form backend, debouncing, rendering lists in react.js and object manipulation were tested. My familiarity with best coding practices was also looked into.

After the first round, which was a practical round, I was challenged with recreation a UI dashboard from supplied figma design. At the end of this exercise, I was able to recreate a basic but clean page, consisting of a header section, a table with hard coded rows and a non-functional search bar.

During the second round of the recruitement process, along with some conceptual questions, I was tasked with creating funtionality on top of the UI that I had created. A dataset with 6 entries was given to me, to be populated dynamically as table rows. Along with that, I was tasked to map the table headers with the keys given to me in the JSON object.

At the end of the interview, after successfully rendering the data inside the table, I was asked to elaborate on the technique I would use, to reduce the number of API calls while searching. On recollecting the concept of debouncing in javascript, I was given the opportunity to implement a functional search with debounced input.

To understand the concept clearly and and replicate a use case where such a feature would be needed, I decided to port from the API provided by [JSON Blob](https://jsonblob.com/) to a more extensive and user friendly, [JSON server](https://github.com/typicode/json-server) as I had experience using it.

To create more than 500 data points, [Mockaroo](https://www.mockaroo.com/) online random data generator was used.

On successful completion of the debounced search by country feature using `setTimeout` with 500ms delay, I took it upon myself to finish the main modules of the UI which I was not able to replicate. This included the pagination feature.

Pagination UI component from MUI was used to create the the buttons for navigating between pages. Along with that API calls to the backend were made with keeping 5 documents on one page.

After tacking some issues which are mentioned below, the entire application was completed with a working debounced search by country and an extensive paginated view of documents.

# Features
This single page application can be used as a dashboard for viewing all documents, clearly displayed in a beautiful table.

Mentioned below are the noteworthy features of the page -
1. Ability to search and display documents by country
1. Five documents are displayed at once based on the search result, thus providing less clutter
1. Navigate between pages one at a time or skip to the last/first page, using simple but functional buttons
1. Less calls to the backend with the help of debouncing technique, saving resources

# Screenshots
#### Landing page
![Landing page](https://cdn.discordapp.com/attachments/462192465860886538/1161340080619794592/image.png?ex=6537f13b&is=65257c3b&hm=c344889ddc49318ba27de8fb8fa5d8622495c70090532c3bea4de1cbbbb57741&)

#### A different page
![A different page](https://cdn.discordapp.com/attachments/462192465860886538/1161340818146214031/image.png?ex=6537f1eb&is=65257ceb&hm=f9e54145cd0d7a53927a2fc03de5e8e3c5b8ffa29d01867a01c43cc79775df13&)

#### Search with more than 5 results
![Multi page search](https://cdn.discordapp.com/attachments/462192465860886538/1161341207499251824/image.png?ex=6537f248&is=65257d48&hm=3b75cf3ed0abe8b5b009fb38c2b8d11aabb683733a1580af1dfc1a22fe530154&)

#### Search with less than 5 results
![Single page search](https://cdn.discordapp.com/attachments/462192465860886538/1161341307235606578/image.png?ex=6537f260&is=65257d60&hm=cd129541cfbc9a519f4d277ed0155ce71b9f5b08171570d65f7de3811881c88f&)


# Issues faced
While the implemention of the required features was quite straight forward, a few challenges were faced which needed some indepth knowledge of javascript and react -
1. While JSON server has API endpoints for pagination, there was no direct way to get the total number of pages that the objects, satisfying the search results, spanned upon. **This data was extracted from the response headers of each API call, transformed using string manipulation inside a utility function**

1. Although fetching data using the debounced search values was successfully achieved, the page selector component was not rendered again post change in search value. This led to incorrect display of current page display.**This was overcome by indicating react to re render the page selector component on change in search value, which was done by using the `key` attribute**

# More on JSON server
JSON server is an open source tool to create a quick backend for prototyping and mocking.

After installing and running the application using CLI, this program creates extensive API endpoints for developers. In `package.json`, the JSON file containing the data from which the enpoints are needed to be created, should be mentioned under the `scripts` tag.

After creation of endpoints on default port, this program watches for any changes made inside the JSON file. 

More details can be found here - https://github.com/typicode/json-server
# Technologies used
### Frontend
1. React - v18.2.0
1. MUI/material - v5.14.11
1. MUI/icons-material - v5.14.11

### Backend
1. JSON Server - v0.17.4

# Setup
The link mentioned at the start of this document, should direct to the live application. Incase of a broken link or unsuccessful connection with the backend, one can follow the steps mentioned below -

1. Fork and clone the repo to your folder of choice
1. Open the folder with VSCode (recommended)
1. Open the terminal and change directory to 'server' using `cd server`
1. Install all dependencies using `npm install`
1. Run `npm run start-server` to start the JSON server service on `http://localhost:4001`
1. Open another instance of the terminal and change directory to 'client' using `cd client`
1. Install all dependencies again using `npm install`.
1. Run `npm run start` to start the react application
1. Hit `http://localhost:3000` to access the frontend application
