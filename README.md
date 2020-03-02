# reactive framework
`updateDom` - is a listener function that accept a new content.
then it renders it in a new tree and compare it with old tree and update a `vtree`.
this function is used in `./src/lib/observable.js` when there are some new data appears.
***
in `./src/lib/view` there are files `form.js` and `list.js` in this files there are components that create form with
 input field and function that creates list from input data.
 
 Then `render()` function in file `render.js` renders it.
 
***
`observable.js` is a file that observer  all changes in `vtree`.
 Function`observable` is starts watching, and If there are some changes it updates `vtree`.