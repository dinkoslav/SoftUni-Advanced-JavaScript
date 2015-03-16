var Item = function (content) {
    var _content = content;
    var _status = false;

    function addToDOM(sectionUniqueId) {
        console.log(sectionUniqueId);
        var splitedNums = sectionUniqueId.split('_');
        var containerPosition = splitedNums[0];
        var sectionPosition = splitedNums[1];
        var itemPosition = containers[containerPosition].sections[sectionPosition].items.length - 1;
        var itemUniqueId = sectionUniqueId + '_' + itemPosition;
        var item = document.createElement('div');
        item.setAttribute('id', itemUniqueId);
        item.style.borderBottom = '1px solid black';
        item.style.width = '98%';
        item.style.textAlign = 'left';
        var checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", itemUniqueId + "_checkbox");
        checkBox.setAttribute("onclick",
            "containers[" + containerPosition + "]." +
            "sections[" + sectionPosition + "]." +
            "items[" + itemPosition + "].switchStatus(" +
            containerPosition + ", " + sectionPosition + ", " +
            itemPosition + ")");
        checkBox.style.float = "left";
        var content = document.createElement('div');
        content.setAttribute("id", itemUniqueId + "_content");
        var text = document.createTextNode(_content);

        content.appendChild(text);
        item.appendChild(checkBox);
        item.appendChild(content);
        document.getElementById(sectionUniqueId + '_items').appendChild(item);

    }

    function switchStatus(containerPosition, sectionPosition, itemPosition) {
        _status = !_status;
        var itemUniqueId = containerPosition + "_" + sectionPosition + "_" +
            itemPosition;
        if(_status){
            document.getElementById(itemUniqueId + "_content").style.backgroundColor = "green";
        }
        else{
            document.getElementById(itemUniqueId + "_content").style.backgroundColor = "white";
        }
        console.log(_status);
    }

    return {
        addToDOM: addToDOM,
        switchStatus: switchStatus
    }
};

var Section = function (title) {
    var _title = title;
    var _items = [];

    function addToDOM(containerPosition) {
        var sectionUniqueId = containerPosition + '_' + (containers[containerPosition].sections.length - 1);
        var sectionPosition = containers[containerPosition].sections.length - 1;
        var section = document.createElement('div');
        section.setAttribute('id', sectionUniqueId);
        section.style.border = '1px solid black';
        section.style.width = '98%';
        section.style.textAlign = 'center';
        var title = document.createTextNode(_title);
        var titleHolder = document.createElement('h2');
        var itemHolder = document.createElement('div');
        itemHolder.setAttribute('id', sectionUniqueId + '_items');
        var inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('id', sectionUniqueId + '_content');
        var inputButton = document.createElement('input');
        inputButton.setAttribute('type', 'button');
        inputButton.setAttribute('value', '+');
        inputButton.setAttribute('onClick', 'containers[' +
        containerPosition + '].sections[' + sectionPosition + '].addItem(document.getElementById(\'' +
        (sectionUniqueId + '_content') + '\').value, ' +
        containerPosition + ', ' + sectionPosition + ')');
        titleHolder.appendChild(title);
        section.appendChild(titleHolder);
        section.appendChild(itemHolder);
        section.appendChild(inputText);
        section.appendChild(inputButton);
        document.getElementById(containerPosition + '_sections').appendChild(section);
    }

    function addItem(content, containerPosition, sectionPosition) {
        var item = new Item(content);
        _items.push(item);
        var sectionUniqueId = containerPosition + "_" + sectionPosition;
        item.addToDOM(sectionUniqueId);
    }

    return {
        addToDOM: addToDOM,
        addItem: addItem,
        items: _items
    }
};

var Container = function(name){
    var _name = name;
    var _sections = [];

    function addToDOM() {
        var container = document.createElement('div');
        container.setAttribute('id', containers.length - 1);
        container.style.border = '1px solid black';
        container.style.width = '400px';
        container.style.textAlign = 'center';
        var title = document.createTextNode(_name + ' TODO List');
        var titleHolder = document.createElement('h1');
        var sectionHolder = document.createElement('div');
        sectionHolder.setAttribute('id', (containers.length - 1) + '_sections');
        sectionHolder.style.border = '1px solid black';
        sectionHolder.style.width = '98%';
        sectionHolder.style.textAlign = 'center';
        var inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('id', containers.length + '_title');
        var inputButton = document.createElement('input');
        inputButton.setAttribute('type', 'button');
        inputButton.setAttribute('onClick', 'containers[' +
        (containers.length - 1) + '].addSection(document.getElementById(\'' +
        (containers.length + '_title') + '\').value, ' +
        (containers.length - 1) + ')');
        inputButton.setAttribute('value', 'Add Section');

        titleHolder.appendChild(title);
        container.appendChild(titleHolder);
        container.appendChild(sectionHolder);
        container.appendChild(inputText);
        container.appendChild(inputButton);
        document.body.appendChild(container);
    }

    function addSection(title, containerPosition) {
        var section = new Section(title);
        _sections.push(section);
        section.addToDOM(containerPosition);
    }

    return {
        addToDOM: addToDOM,
        addSection: addSection,
        sections: _sections
    }
};

var containers = [];
function addContainer(name){
    var container = new Container(name);
    containers.push(container);
    container.addToDOM();
}