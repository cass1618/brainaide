<style>
.done {text-decoration: line-through;}
</style>

TUESDAY JULY 27
<div class="done">
1. Figure out how to style different elements differently
1. Possibly use the html-to-react parser and a loop to make different paragraphs different
</div>

1. Separate into paragraphs and use the arrow keys to scroll through each component

<div class="done">
* Separate into paragraphs and upload array of paragraphs to firestore
</div>


* I was trying to format the <code> blocks but they were all separate.  But then I realized there is a <pre> tag enclosing the entire section of code







<div class="done">
MONDAY JULY 26
1. Apply style dynamically when button is pressed

Will need to add a button to the functional component
Add a new currentlyVisibleState which has the new style applied

I will see if I can use a separate sheet so I can have a complex style
</div>


SATURDAY JULY 24

<div class="done">
1. Set up page to display the page similar to the original
1. Add custom styles
</div>
1. Divide into paragraphs and display each line


FRIDAY JULY 23

I currently have one function to send data to firestore, and another that will make the API call

They are both in the same Functional Component and I am currently calling them in the same place in the Class Component

Is it possible to duplicate what I have, but split the firestore and apiCall functions into separate components

That way I could call them separately, and not call the firestore until the file is loaded

IT WORKED!  I have 2 different buttons right now - I'd rather just have the API call and then the next function would run right away, but, I think I'll try to figure that out later

<div class="done">
1. I still have to figure out how to pass the url as an argument into the API function rather than hard coding it . .
</div>



<div class="done">
THURSDAY JULY 22
1. Currently able to make the API call and store the result in firestore
* HOWEVER it doesn't wait until the API call is finished so I have to figure out how to do async and what not
</done>





WEDNESDAY JULY 21

<span class="done">1. Successfully add htmlFile array to Firestore</span>


<div class="done">
2. Set API result to state in Class component
    1. Make API call as in the lesson
    2. Set the array.state to the url, html
</div>


Need a form to get the url
Currently I can make a form that accepts user input, and then sends the user input to firestore.

I need the API to be called once the form is submitted

Why does API have to be called on componentDidMount?  Can I have the api be called when I click the submit button??

* Write a makeAnApiCall() function
* Call the function inside the return when the form from the functional component is submitted


Should I use a separate functional component to take the user input?
I currently have a functional component that takes props from the class component and sends them to firestore.

1. Form accepts user input url => stores it in firestore 
1. A component retrieves the url from firestore => sends it to class component
1. Class component calls the API, sends the output back to the functional component

<div class="done">
HOLD ON

FIRST I SHOULD TRY CALLING THE API WITH THE HARD-CODED URL TO SEE IF I CAN STORE THE OUTPUT IN FIRESTORE!
</div>

## NEXT
Currently url is hard-coded.  All I need to do is have a form for the user to type in the url and then submit and send it as an argument to the API call function!

1. Hard-code the url as an argument outside of the API call function
1. Create a form that will accept a url and pass it in

I already have a form . . could I possible accept the user input here? 






Friday July 16
<p class="done">
1. Start building out React structure for main page COMPLETE!<br>
1. Integrate ScraperAPI into React COMPLETE!<br>
1. Start figuring out how to parse the data COMPLETE!
</p>


Currently trying to get the url entered in a form into React.  I am struggling a bit because before, I would add a new object to a list.  Currently all I'm trying to do is set one single url.  


. . . although I suppose if the user could store multiple URLs that would be ideal.


Sunday July 18
1. Update the API so that the user can enter the url and it will be loaded
1. Figure out how to apply CSS styles to the displayed page
1. Split paragraphs up and add id's so they can each be styled differently
1. Create a function that will randomly select a font and color


Monday July 19
## API call was working before.  Now I need to figure out how to call the function from App Control.

Form for entering URL
url value is collected from form
api call is made using the url
html file is returned
file is added to firestore


TUESDAY JULY 20

DON'T WORRY ABOUT API CALL RIGHT NOW

Figure out how to set the state of an object, and then add that object to firestore

How is this different from the form??


Have the class component return the rawHtml to the AddToFirebase functional component.

Then the functional component can take the object and add it to firestore.


1. Set up a basic class component that returns a hard coded array with a url and an html string
1. Send the array to a basic functional component
1. The functional component will create an object using the url and html string
1. The functional component will then add the object to firestore

HOW DO I PASS AN ARRAY FROM A CLASS COMPONENT TO A FUNCTIONAL COMPONENT
## Pass as props from state 


Next step: I have the array in the Functional Component, now I need to add it to Firestore