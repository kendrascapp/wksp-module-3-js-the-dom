# 2.3.1 - The DOM

---

When you load a web page in the browser...

1. Retrieves the HTML text and parses it.
2. Builds a _model_ of the document structure
3. Uses this model to render the page on the screen.

<Spacer size={24} />

This is the **D**ocument **O**bject **M**odel.

---

The DOM is a data structure that we can read and modify.

It acts as a _live_ data structure. When it's modified, the page on the screen is updated. 🤯

---

## So what does DOM look like?

You can see it in your developer tools in the browser.

It looks _almost_ identical to the HTML you wrote...

---

The DOM is actually your _corrected_ HTML. 

⚠️ This means that it is actually impossible to debug your HMTL with devTools.

---

A nested set of boxes

<img src="./assets/dom_example.png" />

---

- For each box, there is an objet that we can interact with
- Each node may contain/refer to other nodes that we call _children_.
- Similar to a tree.

---

End nodes are usually called leaves.

<img src="./assets/dom_tree.png" />

---

JavaScript can modify _all_ of the HTML elements on the page.

<img src=./assets/html_tree.gif style="height: 400px" />

---

## Target Elements

---

There are quite a few options for identifying/targeting elements in the DOM.    
<!-- (tags identify) -->

- [`.getElementsByTagName()`](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)
- [`.getElementsByClassName()`](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)
- [`document.querySelectorAll()`](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

These queries will return an array-like object of _all_ of the matching elements in the DOM. 
<!-- // DOM is made for any language // -->

---

We won't be using these methods very much at all.

- They are not quite as precise as we need.
- They return an array-like object that has some of the properties of an array but not all.
- `getElementsByClassName()` is also slower than other methods.

---

Instead, we will use these methods

- [`.getElementById()`](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
- [`.querySelector()`](https://www.w3schools.com/jsref/met_document_queryselector.asp)

```js
// only 1 id per page therefore 'getElementById' is singular.
// '.getElementById()'  
// and 'document.querySelector('') are interchangeable 
// > #id is being used in html and is reserved for JS

// always start like this: 
//  document.getElementById('my-div') >put id in the brackets, 
// we don't use the # for the id

// document.querySelector('body') 
// document.querySelector('#my-div')
// document.querySelector('.my-class')
// document.querySelector('div.bacon > ul')
// document.querySelector('div.bacon ul.list')
```

---

## Modify Elements

---

### Modify a Leaf

You can modify the content of a leaf, an end node with 
<!-- one modify text, one modify html -->
- [`.innerText`](https://www.w3schools.com/jsref/prop_node_innertext.asp)
- [`.innerHTML()`](https://www.w3schools.com/jsref/prop_html_innerhtml.asp) 

```js
// Example
// let's say you want to modify <h1> :
// const myTitle = document.getElementById('my-title');
// myTitle.innerText = 'New Title';
```

---

### Add Node(s) to another node
<!-- means we are gong to create nodes -->
---

To add a new node to an HTML page, you need to do it in 3 steps.

1. Create the new node
2. Add content to that node
3. add that node to an existing node.
<!-- step 1: document.createElement(what does in the bracket is what we want to create)
<!-- step 2: add the content - now the node has new content
     step 3: target what we want to grab. target parent, then do-  .appendChild  - which will place it inside the DOM
---

- [`document.createElement()`](https://www.w3schools.com/jsref/met_document_createelement.asp)
- [`.appendChild()`](https://www.w3schools.com/jsref/met_document_createelement.asp)

```js
// Example
// 1. const paragraph = document.createElement('p');
// 2. paragraph.innterTetxt = 'new hacker right here.' 
// 3. document.querySelector('body').appendChild(paragraph)
```
*if I wanted to add id:  paragraph.id = 'new-id' 
you can target attributes with just .attribute 
---

### Styling DOM elements

We can style elements from JavaScript.

- Use the element's `style` attribute. 
- Modify the `classList` of the element.
the classes that are part of the element can be changed as well. 
if you have written your CSS and just swap out classes instead of injecting the CSS into the JS
(write CSS in external file and target classes)
---
<p class="asdad" style="height: 23px; width: 100px;">
JS overrides CSS so it will modify / override anything in CSS

#### The `style` attribute

1. Target the element using one of the methods we've just learned.
2. Modify its `style` attribute.

`<div id="my-div">...content...</div>`

```js
const myDiv = document.getElementById('my-div');

myDiv.style.background = "purple";
```
you have to use CamelCasing instead of - 
⚠️ Houston. We have a problem!
(the DOM will show the - dash so we can't use that)

myDiv.style.borderRadius = '23px'
---

#### Using `classList`

Calling `myDiv.classList` returns a [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList).

😭 It is _read-only_, but ...

---

... it is _modifiable_. 😃

...

To modify a `classList`, we have a few methods we can call.

- `.add()`
- `.remove()`
- `.toggle()`

```js
// Example
*i've written CSS somewhere else and I want to add the class 'primary' to the DOM

myDiv.classList.add('primary');

myDiv.classList.remove('secondary');

myDiv.classList.toggle('active');
``` toggle = if the class is there it will remove it, if the class isn't there it will add it. 
It's a JS way of adding / removing a class (helpful for display.block of drop down menu etc. can be used with .hover as well)
---

[Next lecture: Fundamentals (delay/timing)](../lecture-2-fundamentals-delay)