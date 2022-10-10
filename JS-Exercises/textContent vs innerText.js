//Example:
<span>Hello <span style="display: none;">World</span></span>

//innerText of this html will return: 'Hello'
//textContent of this html will return: 'Hello World'

/*
CONCLUSION:
1) innerText returns the visible text contained in a node,
while textContent returns the full text. 

additional:
2) innerText is defined only for HTMLElement objects,
while textContent is defined for all Node objects.
*/