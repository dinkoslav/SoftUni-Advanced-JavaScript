var selector = ".bird";
traverse(selector);

function traverse(node) {
    if(node[0] == '.'){
        node = node.substring(1, node.length);
        var childNodes = document.getElementsByClassName(node);
        for (var i = 0; i < childNodes.length; i++) {
            traverseNode(childNodes[i], '');
        }
    }
    else if(node[0] == '#'){
        node = node.substring(1, node.length);
        var childNodes = document.getElementById(node);
        traverseNode(childNodes, '');
    }

    function traverseNode(childNodes, spacing) {
        spacing = spacing || '  ';
        var attributes = "";
        for (var i = 0; i < childNodes.attributes.length; i++) {
            if(i == 0){
                attributes += childNodes.attributes[i].name + "=\"" + childNodes.attributes[i].value + "\"";
            }
            else{
                attributes += " " + childNodes.attributes[i].name + "=\"" + childNodes.attributes[i].value + "\"";
            }
        }

        console.log(spacing + childNodes.nodeName.toLowerCase()
        + ": " + attributes);

        for (var i = 0, len = childNodes.childNodes.length; i < len; i += 1) {
            var child = childNodes.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}
