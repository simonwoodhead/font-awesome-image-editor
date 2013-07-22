/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'font-awesome-image-editor\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-send-backwards' : '&#xe000;',
			'icon-send-to-back' : '&#xe001;',
			'icon-bring-to-front' : '&#xe002;',
			'icon-bring-forward' : '&#xe003;',
			'icon-line-thickness' : '&#xe004;',
			'icon-cursor' : '&#xe005;',
			'icon-transparency' : '&#xe006;',
			'icon-flip-vertical' : '&#xe007;',
			'icon-flip-horizontal' : '&#xe008;',
			'icon-text-colour' : '&#xe009;',
			'icon-text-background' : '&#xe00a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};