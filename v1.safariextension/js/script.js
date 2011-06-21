var SML = SML || {};

	var SML.m = {

		deviceWidth: 320,
		deviceHeight: 480,
		rootNode: document.documentElement,
		structure: document.body.childNodes,

		handleMessage: function(msgEvent) {
			var messageName = msgEvent.name;
			if (messageName === 'mobilize') {
				SML.m.resize();
				SML.m.addViewport();
			}
		},

		resize: function() {
			SML.m.rootNode.style.width = SML.m.deviceWidth + 'px';
			SML.m.rootNode.style.margin = '0 auto';
		},

		addViewport: function() {	
			var matte = document.createElement('div');
			matte.setAttribute('id', 'mblzr_viewport');
			matte.style.width = SML.m.deviceWidth + 'px';
			matte.style.top = SML.m.deviceHeight + 'px';
			matte.style.marginLeft = '-' + (SML.m.deviceWidth / 2) + 'px';

			document.getElementsByTagName('body')[0].appendChild(matte);
		}
	}


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