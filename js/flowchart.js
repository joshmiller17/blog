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


var json = 
	{
        name: "Major Steps",
        data: {},
        children: [
			
			{
			id:"1",
			name: "Briefing / Establishing Rapport",
			data: {},
			children: [
				{
					id:"1.1",
					name: "Explain to the SME why they were selected for the interview.",
					data: {},
					children:[
						{
							id:"1.1.1",
							name:"Example:\n\"You were selected for the interview because you are an expert in this field.\"",
							data:{},
							children: [
							]
						}
					]
				},
				
								{
					id:"1.2",
					name: "Seek permission for audio or video recording.",
					data: {},
					children:[
						{
							id:"1.2.1",
							name:"Example:\n\"Do you mind if we audio record the entire interview session?\"",
							data:{},
							children: [
							]
						}
					]
				},
				
				
								{
					id:"1.3",
					name: "Introduce yourself and explain why you are the appropriate person to conduct this interview.",
					data: {},
					children:[
						{
							id:"1.3.1",
							name:"Example:\n\"I am not an expert in your field but that makes me more likely to ask questions that a novice is likely to have.\"",
							data:{},
							children: [
							]
						}
					]
				},
				
				{
					id:"1.4",
					name: "Describe what you want to capture and why. Inform SME what you are NOT interested in in this interview as well.",
					data: {},
					children:[
						{
							id:"1.4.1",
							name:"Example:\n\"We are looking for the procedures and knowledge in performing a task.\"",
							data:{},
							children: [
							]
						},
						
						{
							id:"1.4.2",
							name:"Example:\n\"Some knowledge is not explicitly verbalizable which makes it difficult for the novices to learn.\"",
							data:{},
							children: [
							]
						},
						
						{
							id:"1.4.3",
							name:"Example:\n\"I am not too worried about [certain aspect of the task] so we can skip that part during the interview.\"",
							data:{},
							children: [
							]
						}
					]
				},
				
							{
					id:"1.5",
					name: "Explain to SME how the data will be used at the start of the interview.",
					data: {},
					children:[
						
					]
				},
				
							{
					id:"1.6",
					name: "Ask for the amount of time the SME has for the interview. Work within the stipulated time. If SME has no time constraint, limit the interview to 1 hour.",
					data: {},
					children:[
					]
				},
				
							{
					id:"1.7",
					name: "Provide an overview of the process for this interview session such as duration and how it will be conducted. It is important to inform the SME that you will delve deep into.",
					data: {},
					children:[
						{
							id:"1.7.1",
							name:"Example:\n\"This interview will take about X hours..\"",
							data:{},
							children: [
							]
						},
						
						{
							id:"1.7.2",
							name:"Example:\n\"First, we will... Then we will...\"",
							data:{},
							children: [
							]
						},
						
						{
							id:"1.7.3",
							name:"Example:\n\"I apologize in advance that I will probably ask redundant questions, ask you to repeat or explain something during the interview.\"",
							data:{},
							children: [
							]
						},
						
						{
							id:"1.7.4",
							name:"Example:\n\"We might delve into very specific details.\"",
							data:{},
							children: [
							]
						}
					]
				},
				
							{
					id:"1.8",
					name: "Clarify any questions so that the SME will be prepared and more willing to cooperate.",
					data: {},
					children:[
						{
							id:"1.8.1",
							name:"Example:\n\"Are there any questions before we start the interview?\"",
							data:{},
							children: [
							]
						}
					]
				}
			]
			},
			
			{
			id:"2",
			name: "Task Overview",
			data: {},
			children: [
										{
						id:"2.1",
						name:"Ask for the outline of the process for the task of interest, or a step-by-step procedure of the sub-task critical to the task of interest.",
						data:{},
						children: [
						]
					},
					
					{
						id:"2.2",
						name:"Is this the first interview?",
						data:{$type:"ellipse"},
						children: [
						
							{
							id:"2.2.1",
							name:"<b>YES</b>: Start by seeking an overview of the process required to perform the task of interest. The current focus is to identify the various sub tasks required to perform the task of interest.",
							data:{},
							children: [
									{
									id:"2.2.1.1",
									name:"Example:\n\"I am really interested in the transition between [start of task] to [end of task]. Can you give me an outline of the process you go through?",
									data:{},
									children: [
									]
									}
							]
						},
						
						{
							id:"2.2.2",
							name:"<b>NO</b>: Have you seen trends in the overview process in performing the task of interest?",
							data:{$type:"ellipse"},
							children: [
										{
									id:"2.2.2.1",
									name:"<b>YES</b>: Go to: <i>Elicit sub task step-by-step procedure</i>.",
									redirect:"3",
									data:{redirect:"3"},
									children: [
									]
								},
								
										{
									id:"2.2.2.2",
									name:"<b>NO</b>: Start by seeking an overview of the process required to perform the task of interest. The current focus is to identify the various sub tasks required to perform the task of interest.",
									data:{},
									children: [
											{
											id:"2.2.2.2.1",
											name:"Example:\n\"I am really interested in the transition between [start of task] to [end of task]. Can you give me an outline of the process you go through?",
											data:{},
											children: []
											}
									]
								}
							]
						}
						
						]
					}

				]
			},
			
			{
			id:"3",
			name: "Elicit sub task step-by-step",
			data: {},
			children: []
			},
			
			{
			id:"4",
			name: "Seek Decision Criteria",
			data: {},
			children: []
			},
			
			{
			id:"5",
			name: "Constant Monitoring",
			data: {},
			children: []
			},
			
			{
			id:"6",
			name: "Closing",
			data: {},
			children: []
			}
		]

};







    //end
    //init Spacetree
    //Create a new ST instance
    var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 500,
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
            color: '#aaa',
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
						
            if (node.selected) {
                node.data.$color = "#ff7";
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
                    node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa', '#aca', '#ada', '#aea', '#afa'][count];                    
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
    st.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.
    st.onClick(st.root);
	
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
