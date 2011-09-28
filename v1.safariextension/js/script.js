var smallfari = {

  deviceWidth: 320,
  deviceHeight: 480,
  rootNode: document.documentElement,
  structure: document.body.childNodes,

  handleMessage: function(msgEvent) {
    var messageName = msgEvent.name;
    if (messageName === 'mobilize') {
      smallfari.resize();
      smallfari.addViewport();
    }
  },

  resize: function() {
    smallfari.rootNode.style.width = smallfari.deviceWidth + 'px';
    smallfari.rootNode.style.margin = '0 auto';
  },

  addViewport: function() {  
    var matte = document.createElement('div');
    matte.setAttribute('id', 'mblzr_viewport');
    matte.style.width = smallfari.deviceWidth + 'px';
    matte.style.top = smallfari.deviceHeight + 'px';
    matte.style.marginLeft = '-' + (smallfari.deviceWidth / 2) + 'px';

    document.getElementsByTagName('body')[0].appendChild(matte);
  }
}

//Listen for messages from global.html
safari.self.addEventListener('message', smallfari.handleMessage, true);

// TODO 
// Insert menu items
/*
function addControls() {
  var controlsHTML = '';
  controlsHTML += '<li><a id="orientation" onClick="reorient();" href="#">Orientation</a></li>';
  
  var controls = document.createElement('ul');
  controls.setAttribute('id', 'mblzr_controls');
  
  document.getElementsByTagName('body')[0].appendChild(controls);
  controls.innerHTML = controlsHTML;
  
  var viewToggle = document.getElementById('orientation');
}

function reorient() {
  alert(this);
}
*/