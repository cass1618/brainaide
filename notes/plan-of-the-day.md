<style>
.done {text-decoration: line-through;}
</style>

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