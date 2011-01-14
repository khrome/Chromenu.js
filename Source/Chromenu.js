var Chromenu = new Class({
    callback : null,
    initialize : function(parentNode, callback){
        //inject the color-picker into the parentNode
        var id = 'color_picker_'+this.next();
        /*if(Chromenu.picker){
            this.picker = Chromenu.picker;
            this.mainPanel = Chromenu.container;
            this.picker.onchange = function (clr) {
                if(clr.startsWith('#')) clr = clr.substring(1);
                var parts = ImageBooth.decodeHex(clr);
                if(menu.callback) menu.callback(clr, parts[0], parts[1], parts[2]);
                else alert('no callback');
            };
        }else{*/
            this.mainPanel = new Element('div',{id:id});
            parentNode.appendChild(this.mainPanel);
            this.picker = Raphael.colorpicker(40, 20, 300, "#eee", document.getElementById(this.mainPanel.id));
            var menu = this;
            this.picker.onchange = function (clr) {
                if(clr.startsWith('#')) clr = clr.substring(1);
                var parts = ImageBooth.decodeHex(clr);
                if(menu.callback) menu.callback(clr, parts[0], parts[1], parts[2]);
                else alert('no callback');
            };
            Chromenu.picker = this.picker;
            Chromenu.container = this.mainPanel;
            //this.picker.onchange = this.changeColor;
        //}
    },
    next: function(range){
        Chromenu.seed = Chromenu.seed + 1;
        return Chromenu.seed;
    }
});
Chromenu.seed = 0;
Chromenu.picker = null;
Chromenu.container = null;