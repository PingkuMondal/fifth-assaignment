 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById**-It helps to find only a specific HTML element. It returns only one element. However, getElementById has to be unique.

**getElementsByClassName**-It returns HTMLCollection element through specific classname. All the classnames with specific name can be given in array type style. It is a kind of array type object, not array.

**querySelector**-It helps to find element like CSS type like .btn .container and returns the first matching element.

**querySelectorAll**-It also finds element like CSS and returns all matching elements in NodeList style.


2. How do you **create and insert a new element into the DOM**?

First, a new element is created using document.createElement(). Then innerText / innerHTML /style is added to the created element.
There are various ways to create an element in the DOM and add inserts to it. Such as appendChild(),prepend(),insertBefore(),insertAdjacentElement() / insertAdjacentHTML().

**example:**

      const newCart=document.createElement('div');
        newCart.innerHTML=`
        <div class="grid grid-cols-3 justify-between items-center my-2 bg-gray-100/50 px-1 py-2 rounded-md">
                        <div class="col-span-2">
                            <h1 class="hind font-bold text-md mt-4 text-gray-900 ">${titleCall}</h1>
                            <p class="hind font-normal text-sm ">${noCall}</p>
                        </div>
                        <div class="hind font-normal text-sm col-span-1">
                            <h1>${timeOnly}</h1>
                        </div>
        `
        document.getElementById("cardContainer").append(newCart);



3. What is **Event Bubbling** and how does it work?

**Event Bubbling**: Event Bubbling is a behavior of the DOM. When an element is clicked, the click is first triggered on that element, then it propagates upward step by step to its parent → grandparent → document.
This is called event bubbling.

When a small element is clicked, it first acts on that element. Then the event goes to the element above it, which is called the parent element. Then its parent, its parent, and so on, until it finally reaches the document.It works like a tree.This can be stopped with stopPropagation().


4. What is **Event Delegation** in JavaScript? Why is it useful?

**Event Delegation**: Event Delegation is a JavaScript technique where instead of providing separate event listeners to catch events on child elements, a single event listener is provided on the parent element.
Then, through event bubbling, the event reaches the parent, and using event.target, we can understand which child element the event actually occurred on.

Dynamic elements work easily. The code becomes small and easy to maintain. It is flexible. Performance is good. You don't have to write code again for new elements. It keeps the code small and simple.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault()**: preventDefault() This is to stop the default behavior of an event. It helps to stop the page from reloading repeatedly, redirecting when clicking a link.

**stopPropagation()**: The function of the stopPropagation() event is to stop bubbling. Since it works like a tree, if you call stopPropagation(), the event will not reach the parent. The button that is clicked will not go to its parent div, but will work on its own. The event does not go to the element above.