var liElement = document.createElement("li");

var domModule = (function() {
    function appendChild(child, parent) {
        if(parent[0] == '.'){
            var className = parent.substring(1, parent.length);
            var parentElement = document.getElementsByClassName(className);
            parentElement[0].appendChild(child);
        }
        else if(parent[0] == '#'){
            var idName = parent.substring(1, parent.length);
            var parentElement = document.getElementById(idName).appendChild(child);
        }
    }

    function removeChild(parent, child) {
        var parentNode = document.querySelector(parent);
        var childNode = parentNode.querySelector(child);
        parentNode.removeChild(childNode);
    }

    function addHandler(parent, event, func) {
        var targetNodes = document.querySelectorAll(parent);
        var event = "on" + event;
        for (var i = 0; i < targetNodes.length; i++) {
            targetNodes[i].setAttribute(event, func);
        }
    }

    function retrieveElements(childs) {
        var targetNodes = document.querySelectorAll(childs);
        return targetNodes;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
})();

//domModule.appendChild(liElement,".birds-list");
//domModule.removeChild("ul.birds-list","li:first-child");
//domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });
var elements = domModule.retrieveElements(".bird");

for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}