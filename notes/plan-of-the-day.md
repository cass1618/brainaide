<style>
.done {text-decoration: line-through;}
</style>


THURSDAY JULY 29
## Make the site look generally presentable/useable and deploy!
    1. Update Header - maybe get a logo - UNDER CONSTRUCTION [x]
    2. Add general CSS to main pages [x]
    3. Add button to return home and to add a new file
    4. Have a button to select full view or individual sections
    5. Add a splash page [x]
    6. Link to where the game came from
    7. Organize structure - put ApiFirestoreControl inside AppControl


OTHER

1. Authentication so that people can have their own file selection





WEDNESDAY JULY 28

<div class = "done">
1. See if it works to deploy the site on my domain brainaide.org
At first it wasn't working when I tested on some other people's computer but then I got it to work somehow
</div>

1. Add style buttons and create styles
1. Add better style to the arrow part

<div class="done">
1. Add random class each time the arrow is pressed
    * Used Math.random to assign a random letter as style
    * In order to access stylesheet, need to pass styles.letter rather than styles."letter"
    * Use eval() to change the string to value
    * Apparently eval is not a great idea, however React doesn't seem to like Function either

    * I ended up applying the style in the paragraph component rather than App Control
</div>

<div class="done">
1. Add loading message to API situation
    * Added a snake game
    * It becomes visible when API starts loading but need to figure out how to move on once API is done
        It is visible if(isLoading)
        When it renders if(isLoaded it will display the ADD TO FIRESTORE button)
</div>    

1. Fix visible states

<div class = "done">
* Got sidetracked and decided I needed to split up sentences further.  Now there are some blank strings I will need to remove.
</div>







TUESDAY JULY 27
<div class="done">
1. Figure out how to style different elements differently
1. Possibly use the html-to-react parser and a loop to make different paragraphs different
</div>

1. Separate into paragraphs and use the arrow keys to scroll through each component

<div class="done">
* Separate into paragraphs and upload array of paragraphs to firestore
</div>


* I was trying to format the code blocks but they were all separate.  But then I realized there is a pre tag enclosing the entire section of code







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




Date:   Wed Jul 28 12:36:23 2021 -0700  2

Date:   Wed Jul 28 10:53:00 2021 -0700

Date:   Wed Jul 28 10:48:27 2021 -0700

Date:   Wed Jul 28 02:03:14 2021 -0700 2

Date:   Wed Jul 28 00:27:36 2021 -0700

Date:   Wed Jul 28 00:11:40 2021 -0700

Date:   Tue Jul 27 23:43:04 2021 -0700 11

Date:   Tue Jul 27 19:01:16 2021 -0700

Date:   Tue Jul 27 16:57:16 2021 -0700

Date:   Tue Jul 27 15:27:24 2021 -0700

Date:   Tue Jul 27 12:30:05 2021 -0700

Date:   Tue Jul 27 00:19:34 2021 -0700 

Date:   Tue Jul 27 00:01:55 2021 -0700

Date:   Mon Jul 26 22:30:48 2021 -0700

Date:   Sat Jul 24 19:10:38 2021 -0700 1.5

Date:   Sat Jul 24 18:25:33 2021 -0700

Date:   Sat Jul 24 17:31:31 2021 -0700

Date:   Sat Jul 24 17:28:24 2021 -0700

Date:   Sat Jul 24 00:55:16 2021 -0700

Date:   Fri Jul 23 18:24:58 2021 -0700 1

Date:   Fri Jul 23 18:09:40 2021 -0700

Date:   Fri Jul 23 17:33:45 2021 -0700 

Date:   Thu Jul 22 00:16:23 2021 -0700 9

Date:   Wed Jul 21 23:09:59 2021 -0700 

Date:   Wed Jul 21 15:08:56 2021 -0700

Date:   Tue Jul 20 18:06:49 2021 -0700 1

Date:   Tue Jul 20 16:58:52 2021 -0700

Date:   Mon Jul 19 23:51:27 2021 -0700 5.25

Date:   Mon Jul 19 22:35:02 2021 -0700

Date:   Mon Jul 19 22:30:48 2021 -0700

Date:   Mon Jul 19 19:50:30 2021 -0700

Date:   Mon Jul 19 17:42:18 2021 -0700

Date:   Mon Jul 19 17:35:22 2021 -0700

Date:   Sun Jul 18 23:31:18 2021 -0700 7.5

Date:   Sun Jul 18 22:46:31 2021 -0700

Date:   Sun Jul 18 16:45:31 2021 -0700

Date:   Sun Jul 18 15:38:21 2021 -0700

Date:   Sun Jul 18 15:02:45 2021 -0700

Date:   Sat Jul 17 23:47:08 2021 -0700 4.75

Date:   Sat Jul 17 18:16:21 2021 -0700

Date:   Sat Jul 17 17:55:52 2021 -0700

Date:   Sat Jul 17 17:04:04 2021 -0700

Date:   Fri Jul 16 19:28:16 2021 -0700 6.5

Date:   Fri Jul 16 16:44:15 2021 -0700

Date:   Fri Jul 16 16:27:58 2021 -0700

Date:   Fri Jul 16 15:50:25 2021 -0700

Date:   Fri Jul 16 15:38:12 2021 -0700

Date:   Fri Jul 16 15:08:45 2021 -0700

Date:   Fri Jul 16 14:51:47 2021 -0700

Date:   Fri Jul 16 14:20:53 2021 -0700

Date:   Fri Jul 16 14:02:25 2021 -0700

Date:   Fri Jul 16 13:28:12 2021 -0700

Date:   Fri Jul 16 13:17:53 2021 -0700

Date:   Fri Jul 16 12:56:55 2021 -0700