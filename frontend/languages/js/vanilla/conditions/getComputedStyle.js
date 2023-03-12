
file = document.getElementById('file')

if (window.getComputedStyle(file).display === 'none')
    file.style.display = 'block'


// So what this does?
// This actually checks for all the style that has been applied on the element realtime
// And also the values are noted

// Definition and Usage
// The getComputedStyle() method gets the computed CSS properties and values of an HTML element.

// The getComputedStyle() method returns a CSSStyleDeclaration object.

// Computed Style
// The computed style is the style used on the element after all styling sources have been applied.

// Style sources: external and internal style sheets, inherited styles, and browser default styles.