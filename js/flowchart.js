var labelType, useGradients, nativeTextSupport, animate;

		function approximate_lines(text, width){
			approx_letters_per_line = 75 / 12;
			lines = 1;
			words = text.split(" ")
			current_line_length = 0;
			for (i = 0; i < words.length; i++){
				current_line_length += (words[i].length+1) * approx_letters_per_line;
				if (current_line_length > width){
					lines += 1;
					current_line_length = words[i].length * approx_letters_per_line;
				}
			}
			return lines;
		}

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data

    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 250,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 100,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 75,
            width: 75,
            type: 'rectangle',
            color: '#bbb',
            overridable: true
        },
        
        Edge: {
            type: 'bezier',
            overridable: true
        },
        
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.name;
            label.onclick = function(){
				
				console.log(node);
				
				if (node.data.redirect){
					st.onClick(node.data.redirect);
				}
            	else if(normal.checked) {
            	  st.onClick(node.id);
            	} else {
                st.setRoot(node.id, 'animate');
            	}
				st.refresh();
            };
            //set label styles
            var style = label.style;
            style.width = node.data.$width + 'px';
            style.height = node.data.$height + 'px';            
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '5px';
			if (node.data.$type == "ellipse"){
				style.paddingTop = '40px';
			}
        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
			
			//dynamic height and width
			width = 90;
			if (node.name.length > 50) {
				width = 200;
			}
			node.data.$height = 10 + 20 * approximate_lines(node.name, width)
			node.data.$width = 15 + width;
						
			if (node.data.$type == "ellipse"){
				node.data.$height *= 1.5
				node.data.$width *= 1.5
			}
						
            if (node.selected) {
                node.data.$color = "#ff7";
            }
			else if (node.data.redirect){
					node.data.$color = "#ADD8E6";
				}
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
					if (count < 1){
						node.data.$color = ['#ecc']
					}
					else if (count >= 10){
						node.data.$color = '#10f6bb';
					}
					else{
                    node.data.$color = ['#aac', '#bbb', '#bcb', '#bdb', '#bfb'][Math.floor(count/2)]
					}	
				}
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    //st.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.
    st.onClick(st.root);
	st.refresh();
	
	
	
	
    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'), 
        left = $jit.id('r-left'), 
        bottom = $jit.id('r-bottom'), 
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal');
        
    
    function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };
    
    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end
}
