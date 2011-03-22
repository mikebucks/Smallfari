var SML = SML || {};

	var m = {

		deviceWidth: 320,
		deviceHeight: 480,
		rootNode: document.documentElement,
		structure: document.body.childNodes,

		handleMessage: function(msgEvent) {
			var messageName = msgEvent.name;
			if (messageName === 'mobilize') {
				m.resize();
				m.addViewport();
			}
		},

		resize: function() {
			m.rootNode.style.width = m.deviceWidth + 'px';
			m.rootNode.style.margin = '0 auto';
		},

		addViewport: function() {	
			var matte = document.createElement('div');
			matte.setAttribute('id', 'mblzr_viewport');
			matte.style.width = m.deviceWidth + 'px';
			matte.style.top = m.deviceHeight + 'px';
			matte.style.marginLeft = '-' + (m.deviceWidth / 2) + 'px';

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