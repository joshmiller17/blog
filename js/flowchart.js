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
						name:"Ask for the outline of the process for the task of interest, or a step-by-step procedure of the subtask critical to the task of interest.",
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
							name:"<b>YES</b>: Start by seeking an overview of the process required to perform the task of interest. The current focus is to identify the various subtasks required to perform the task of interest.",
							data:{},
							children: [
									{
									id:"2.2.1.1",
									name:"Example:\n\"I am really interested in the transition between [start of task] to [end of task]. Can you give me an outline of the process you go through?\"",
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
									name:"<b>YES</b>: Go to: <i>Elicit subtask step-by-step</i>.",
									data:{redirect:"3"},
									children: [
									]
								},
								
										{
									id:"2.2.2.2",
									name:"<b>NO</b>: Start by seeking an overview of the process required to perform the task of interest. The current focus is to identify the various subtasks required to perform the task of interest.",
									data:{},
									children: [
											{
											id:"2.2.2.2.1",
											name:"Example:\n\"I am really interested in the transition between [start of task] to [end of task]. Can you give me an outline of the process you go through?\"",
											data:{},
											children: []
											}
									]
								}
							]
						}
						
						]
					},
					
					
						{
						id:"2.3",
						name:"Identify the conditions to initiate this task.",
						data:{},
						children: [
						
									{
								id:"2.3.1",
								name:"Example: \"What conditions must be present to start the task?\"",
								data:{},
								children: [
								]
							},
							
							{
								id:"2.3.2",
								name:"Example: \"What are the indications that you need to perform this task?\"",
								data:{},
								children: [
								]
							}
						]
					},
					
					{
						id:"2.4",
						name:"Find out the importance and uniqueness of the task",
						data:{},
						children: [
						
									{
								id:"2.4.1",
								name:"Example: \"What is the reason for the unique or unexpected nature of this task?\"",
								data:{},
								children: [
								]
							}
						]
					},
					
						{
						id:"2.4",
						name:"Go to elicit subtask step-by-step",
						data:{redirect:"3"},
						children: [
							]
					}

				]
			},
			
			{
			id:"3",
			name: "Elicit subtask step-by-step",
			data: {},
			children: [
						{
						id:"3.1",
						name:"Seek a detailed step-by-step procedure of the subtasks. Explore the subtasks one at a time. The current focus is to capture the procedure of the subtasks as comprehensively as possible. It is not necessary to cover all subtasks within a single interview session.",
						data:{},
						children: [
										{
										id:"3.1.1",
										name:"Example:\n\"What I want to focus on is...\"",
										data:{},
										children: [
											]
										},
					
									{
										id:"3.1.2",
										name:"Example:\n\"There are X things that I am interested in. The first is... And the second is... so let's start with the first subtask.\"",
										data:{},
										children: [
										]
									}
						]
					},
					
					{
					id:"3.2",
					name:"<b>IF</b>: the SME does not give an adequate explanation of why a certain action / decision is performed...",
					data:{},
					children: [
						{
						id:"3.2.1",
						name:"<b>THEN</b>: Seek an explanation.",
						data:{},
						children: [
									{
										id:"3.2.1.1",
										name:"Example:\n\"Why would you perform this action?\"",
										data:{},
										children: [
										]
									}
								]
						}
					]
					},
					
					{
					id:"3.3",
					name:"<b>IF</b>: the sequence of steps in performing a task / subtask is not explicitly mentioned...",
					data:{},
					children: [
						{
						id:"3.3.1",
						name:"<b>THEN</b>: Clarify with the SME on the sequence.",
						data:{},
						children: [
									{
										id:"3.3.1.1",
										name:"Example:\n\"Would you ideally do step A followed by step B, or would you be doing both at the same time?\"",
										data:{},
										children: [
										]
									}
								]
						},
						
						{
					id:"3.3.2",
					name:"Is the SME having difficulty figuring out the sequence of steps?",
					data:{$type:"ellipse"},
					children: [
					
						{
						id:"3.3.2.1",
						name:"<b>YES</b>: Leverage the SME's personal experience.",
						data:{},
						children: [
									{
										id:"3.3.2.1.1",
										name:"Example:\n\"Can you give me an example?\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.3.2.1.2",
										name:"Example:\n\"Can you give me an instance when you...?\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.3.2.1.3",
										name:"Example:\n\"Is there a time when you...?\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.3.2.1.4",
										name:"Example:\n\"So let's say there's a time when you... what decision / action did you make and why?\"",
										data:{},
										children: [
										]
									}
								]
						},
						
							{
					id:"3.3.2.2",
					name:"<b>NO</b>: the SME is able to indicate the sequence of steps...",
					data:{},
					children: [
								{
							id:"3.3.2.2.1",
							name:"<b>THEN</b>: Return to eliciting the subtask step-by-step.",
							data:{redirect: "3.1"},
							children: [
									]
							}
						]
						},
						
						{
						id:"3.3.2.3",
						name:"I'm not sure (see cues)",
						data:{},
						children: [
					
								{
										id:"3.3.2.3.1",
										name:"Cue:\n\"I wouldn't say one before the other...\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.3.2.3.2",
										name:"Cue:\n\"That doesn't mean that...\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.3.2.3.3",
										name:"Cue:\n\"It's very difficult to do this...\"",
										data:{},
										children: [
										]
									},
								]
					
						
						]
						},
					
					
					]
					},
					]
					},
					
					{
					id:"3.4",
					name:"<b>IF</b>: the SME suggests that multiple steps can be performed at a particular point in time.",
					data:{},
					children: [
					{
					id:"3.4.1",
					name:"<b>THEN</b>:Clarify with the SME if they will be doing all or just some of the steps.",
					data:{},
					children: [
								{
									id:"3.4.1.1",
									name:"Example:\n\"Would you be doing all of those things or would you be picking and choosing amongst those different things to do?\"",
									data:{},
									children: [
									]
								}
							]
						},
						
					{
					id:"3.4.2",
					name:"<b>IF</b>: the SME suggests that it is impossible to perform all the steps...",
					data:{},
					children: [
								{
										id:"3.4.2.1",
										name:"Cue: the SME asks multiple questions (how much, what is, which of these, how do, how is)",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.4.2.2",
										name:"Cue: \"Find as many as possible\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.4.2.3",
										name:"Cue: \"The human brain can only work with so much information\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.4.2.4",
										name:"<b>THEN</b>: Go to <i>Seek decision criteria</i>",
										data:{redirect:"4"},
										children: [
										]
									}
					
							]
						},
				
					
						{
					id:"3.4.3",
					name:"<b>IF</b>: the SME indicates that they would perform all actions...",
					data:{},
					children: [
						{
						id:"3.4.3.1",
						name:"<b>THEN</b>: Return to eliciting the subtask step-by-step.",
						data:{redirect: "3.1"},
						children: [
								]
						}
					]
					},
						
					
					
					
					]
					},
					
					
						
					
						
					
						{
					id:"3.5",
					name:"<b>IF</b>: the SME suggests that the task is important but difficult or challenging, even for an expert...",
					data:{},
					children: [
						{
						id:"3.5.1",
						name:"Cue: \"If you don't have any of these items, then you might have to...\"",
						data:{},
						children: [	]
						},
						
						{
						id:"3.5.2",
						name:"Cue: \"Sometimes it's not as easy...\"",
						data:{},
						children: [	]
						},
						
						{
						id:"3.5.3",
						name:"<b>THEN</b>: Ask whether the task would be challenging for a novice as well and why.",
						data:{},
						children: [	
								{
								id:"3.8.3.1",
								name:"Example: \"How challenging would it be for novices to perform this action / make this decision?\"",
								data:{},
								children: [	]
								},
							]
						}
						
						
					]
					},
					
						{
					id:"3.6",
					name:"<b>IF</b>: the SME indicates that the steps require visual cues...",
					data:{},
					children: [
						{
						id:"3.6.1",
						name:"Cues: \"Read,\" \"Look,\" \"Glance,\"...",
						data:{},
						children: [	]
						},
						
						{
						id:"3.6.2",
						name:"<b>THEN</b>: Ask for the physical cues that they are looking for.",
						data:{},
						children: [	
								{
								id:"3.6.2.1",
								name:"Example: \"What are you looking for?\"",
								data:{},
								children: [	]
								},
							]
						},
						
						{
					id:"3.6.3",
					name:"<b>IF</b>: the SME responds with keywords like \"looking,\" \"read,\" \"find,\" \"interested,\" \"finding,\" or raises multiple \"what\" questions...",
					data:{},
					children: [
						{
						id:"3.6.3.1",
						name:"<b>THEN</b>: The SME has provided criteria for choosing the options with regards to your question.",
						data:{},
						children: [
								]
						}
					]
					},
					]
					},
					
						
					
						{
					id:"3.7",
					name:"<b>IF</b>: the SME suggests a fixed sequence in performing a task...",
					data:{},
					children: [
						{
						id:"3.7.1",
						name:"<b>THEN</b>: Seek an explanation for why the SME would perform the task. Ask the SME if there is any possibility of deviating from the norm and the rationale for the deviation.",
						data:{},
						children: [
									{
										id:"3.7.1.1",
										name:"Example:\n\"Could there be a good reason not to do it this way?\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"3.7.1.1",
										name:"Example:\n\"Why do you need to do it this way instead of another way?\"",
										data:{},
										children: [
										]
									}
								]
						}
					]
					},
					
						{
					id:"3.8",
					name:"<b>IF</b>: the SME implies that they will not perform a certain action...",
					data:{},
					children: [
					
						{
								id:"3.8.1",
								name:"Cue: \"I have not stopped and spent more time with it.\"",
								data:{},
								children: [	]
								},
								
								{
								id:"3.8.2",
								name:"Cue: \"...Which I didn't take.\"",
								data:{},
								children: [	]
								},
								
								{
								id:"3.8.3",
								name:"Cue: \"...I didn't do it.\"",
								data:{},
								children: [	]
								},
					
							{
							id:"3.8.4",
							name:"<b>THEN</b>: Ask whether not performing the action is due to choice or constraint.",
							data:{},
							children: [
										{
											id:"3.8.4.1",
											name:"Example:\n\"You haven't had the opportunity to do this action or you decide not to do it? If you decide not to do it, why?\"",
											data:{},
											children: [
											]
										},
										
										{
											id:"3.8.4.2",
											name:"Example:\n\"Why did you choose not to perform this action?\"",
											data:{},
											children: [
											]
										}
									]
							}
					]
					},
					
					
					{
					id:"3.9",
					name:"<b>IF</b>: the SME implies that certain tools or materials are required to perform the challenging step...",
					data:{},
					children: [
							{
							id:"3.9.1",
							name:"Cue: \"Depends on what tools are available.\"",
							data:{},
							children: [
							]
							},
							{
							id:"3.9.2",
							name:"Cue: \"We make / perform / do...\"",
							data:{},
							children: [
							]
							},
							
							{
							id:"3.9.3",
							name:"<b>THEN</b>: Identify the tools or materials required to perform the task of interest.",
							data:{},
							children: [
									{
								id:"3.9.3.1",
								name:"Example: \"What kinds of instruments are you using? Are there only a couple that you use or is there a wide range?\"",
								data:{},
								children: [
								]
								}
							]
							},
					]
					},
					
					{
					id:"3.10",
					name:"<b>IF</b>: the SME gives a list of options...",
					data:{},
					children: [
						{
						id:"3.10.1",
						name:"See cues",
						data:{},
						children: [
							{
							id:"3.10.1.1",
							name:"Cue:\"First... Second... Third...\"",
							data:{},
							children: [
							]
							},
							{
							id:"3.10.1.2",
							name:"Cue:\"First... Next...\"",
							data:{},
							children: [
							]
							},
							{
							id:"3.10.1.3",
							name:"Cue:\"There are X ways/categories\"",
							data:{},
							children: [
							]
							},
							{
							id:"3.10.1.4",
							name:"Cue:\"There is/are... And then there is/are... \"",
							data:{},
							children: [
							]
							},
							{
							id:"3.10.1.5",
							name:"Cue:\"One is... the other is...\"",
							data:{},
							children: [
							]
							}
						]
						},
						
						{
							id:"3.10.2",
							name:"<b>THEN</b>:Continue to probe for alternatives to ensure that the list is exhaustive.",
							data:{},
							children: [
								{
								id:"3.10.2.1",
								name:"Example:\"So we have talked about [Option 1] and [Option 2]. What other options do you have?\"",
								data:{},
								children: [
								]
								},
								{
								id:"3.10.2.2",
								name:"Example:\"Are there other ways to perform the task or are these pretty much everything?"",
								data:{},
								children: [
								]
								}
							]
							},
						
						{
						id:"3.10.3",
						name:"<b>IF</b>: the SME has provided a comprehensive list of options and alternatives...",
						data:{},
						children: [
							{
							id:"3.10.3.1",
							name:"<b>THEN</b>:Go to <i>Seek decision criteria.</i>",
							data:{redirect:"4"},
							children: []
							}
						]
						},
						
					]
					},
					
					{
					id:"3.11",
					name:"Identify all sensory requirements apart from visual.",
					data:{},
					children: [
						{
								id:"3.11.1",
								name:"Example:\"Apart from the cues that you have mentioned earlier, are there any other form of cues that you need to acquire through other forms of senses?\"",
								data:{},
								children: [
								]
								}
					]
					},
					
					{
					{
					id:"3.12",
					name:"Identify the required quality standard.",
					data:{},
					children: [
						{
								id:"3.12.1",
								name:"Example:\"Are there any standards that you need to adhere to in order to perform the sub task effectively?\"",
								data:{},
								children: [
								]
								}
					]
					},
					
					{
					id:"3.13",
					name:"Was this the last subtask?",
					data:{$type:"ellipse"},
					children: [
						{
						id:"3.13.1",
						name:"<b>NO</b>: Continue to the next subtask. Go to Elicit subtask step-by-step.",
						data:{redirect:"3.1"},
						children: [
						]
						},
							{
						id:"3.13.2",
						name:"<b>YES</b>: Verify the procedure of the subtasks by paraphrasing the actions or decisions back to the SME.",
						data:{},
						children: [
							{
								id:"3.13.2.1",
								name:"Example:\"So in situation like this, you just need to do X and not Y right?"",
								data:{},
								children: [
								]
								},
								{
								id:"3.13.2.2",
								name:"Example:\"So let me walk through the tasks again. You would...\"",
								data:{},
								children: [
								]
								}
						]
						},
						
						{
					id:"3.13.3",
					name:"Does the SME agree with your paraphrasing?",
					data:{$type:"ellipse"},
					children: [
					{	
						id:"3.13.3.1",
						name:"<b>NO</b>: Seek correction, then try rephrasing again.",
						data:{redirect:"3.13.3"},
						children: [
						]
						},
							{
						id:"3.13.3.2",
						name:"<b>YES</b>: Begin Closing.",
						data:{redirect:"6"},
						children: []
							}
						]
					}
					
					]
					}
					
					
			]
			},
			
			{
			id:"4",
			name: "Seek Decision Criteria",
			data: {},
			children: [
					{
					id:"4.1",
					name:"Ask for the criteria for choosing between alternatives.",
					data:{},
					children: [
							{
							id:"4.1.1",
							name:"See examples.",
							data:{},
							children: [
									{
									id:"4.1.1.1",
									name:"Example:\"How would you decide which option/s to choose?\"",
									data:{},
									children: [
									]
									},
									{
									id:"4.1.1.2",
									name:"Example:\"How would you decide to choose one and not the other, or both?\"",
									data:{},
									children: [
									]
									},
									{
									id:"4.1.1.3",
									name:"Example:\"How would you select from those options? I'm assuming you are not doing all of them, but I don't know.\"",
									data:{},
									children: [
									]
									}
							]
							},
							
							{
							id:"4.1.2",
							name:"<b>IF</b>: the criteria given by the SME were too abstract...",
							data:{},
							children: [
							
								{
								id:"4.1.2.1",
								name:"Cue: Absence of key words like \"if\" and \"if...then...\"",
								data:{},
								children: [
								
								]
								},
								
								{
								id:"4.1.2.2",
								name:"Cue: Response too short.",
								data:{},
								children: [
								
								]
								},
								
								{
								id:"4.1.2.3",
								name:"<b>THEN</b>: Rephrase the question on the selection criteria and ask the SME to elaborate on the criteria.",
								data:{},
								children: [
								
									{
									id:"4.1.2.3.1",
									name:"Example: \"But how do you know which option to choose?\"",
									data:{},
									children: []
									},
									{
									id:"4.1.2.3.2",
									name:"Example: \"Can you elaborate on that? For instance, if [certain condition], then perform [certain action]?\"",
									data:{},
									children: []
									}
								
								]
								}
							
							]
							},
							
							{
							id:"4.1.3",
							name:"<b>IF</b>: the SME is having trouble coming up with the criteria...",
							data:{},
							children: [
									{
									id:"4.1.3.1",
									name:"Cue: Long pause or \"umm\" or \"hmmm.\"",
									data:{},
									children: []
									},
									{
									id:"4.1.3.2",
									name:"Cue: \"That's a hard question.\"",
									data:{},
									children: []
									}
									{
									id:"4.1.3.3",
									name:"<b>THEN</b>: Rephrase the question on the selection criteria.",
									data:{},
									children: [
										{
										id:"4.1.3.3.1",
										name:"Example: \"For instance, if [certain condition], then perform [certain action]?\"",
										data:{},
										children: []
										}
								]
							},
							
							{
							id:"4.1.4",
							name:"<b>IF</b>: the SME is still having difficulty articulating how to decide from a list of options...",
							data:{},
							children: [
									
									
									{
										id:"4.1.4.1",
										name:"Cue:\n\"I wouldn't say one before the other...\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"4.1.4.2",
										name:"Cue:\n\"That doesn't mean that...\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"4.1.4.3",
										name:"Cue:\n\"It's very difficult to do this...\"",
										data:{},
										children: [
										]
									},
									
									{
										id:"4.1.4.3",
										name:"<b>THEN</b>:Leverage the SME's personal experience.",
										data:{},
										children: [
														{
													id:"4.1.4.3.1",
													name:"Example:\n\"Can you give me an example?\"",
													data:{},
													children: [
													]
												},
												
												{
													id:"4.1.4.3.2",
													name:"Example:\n\"Can you give me an instance when you...?\"",
													data:{},
													children: [
													]
												},
												
												{
													id:"4.1.4.3.3",
													name:"Example:\n\"Is there a time when you...?\"",
													data:{},
													children: [
													]
												},
												
												{
													id:"4.1.4.3.4",
													name:"Example:\n\"So let's say there's a time when you... what decision / action did you make and why?\"",
													data:{},
													children: [
													]
												}
										]
									},
									
									{
										id:"4.1.4.4",
										name:"<b>IF</b>: The SME is unable to come up with an example based on their experience.",
										data:{},
										children: [
											{
											id:"4.1.4.4.1",
											name:"<b>THEN</b>: Provide a possible justification for the SME to comment on.",
											data:{},
											children: [
												{
												id:"4.1.4.4.1.1",
												name:"Example: \"Could it be that you chose this option because...?\"",
												data:{},
												children: []
											}
											]
										}
										
										]
									}
							
								]
							},
							
							{
							id:"4.1.5",
							name:"<b>IF</b>: the SME provides the criteria but does not specify the outcome...",
							data:{},
							children: [
									{
									id:"4.1.5.1",
									name:"Cue: the absence of \"then\"",
									data:{},
									children: [
									
										]
									},
									{
									id:"4.1.5.2",
									name:"<b>THEN</b>: Ask for the potential outcome if certain criteria were met.",
									data:{},
									children: [
											{
												id:"4.1.5.2.1",
												name:"Example: \"What would happen then? What if you have [certain criteria met]?\"",
												data:{},
												children: []
											}
										]
									}
								]
							},
							
							{
							id:"4.1.6",
							name:"<b>IF</b>: the SME uses the keywords \"if,\" \"then,\" \"whether,\" or \"whether... or not\"...",
							data:{},
							children: [
									{
									id:"4.1.6.1",
									name:"<b>THEN</b>: The SME has likely provided the criteria for choosing the options with regards to your question.",
									data:{},
									children: []
									}
							]
							}
							
					
					]
					},

{
					id:"4.2",
					name:"Was this the last decision point?",
					data:{$type:"ellipse"},
					children: [
						{
						id:"4.2.1",
						name:"<b>NO</b>: Move to the next decision point and continue to seek the criteria if the options were already provided.",
						data:{},
						children: [
								{
							id:"4.2.1.1",
							name:"Go to <i>Ask for criteria for choosing between alternatives</i>.",
							data:{redirect:"4.1"},
							children: [
								]
							},
							{
							id:"4.2.1.2",
							name:"Example:\"Let's move on to the next task. So how do you decide which option to choose?\"",
							data:{},
							children: [
								]
							}
							]
						},
						
									{
							id:"4.2.2",
							name:"<b>YES</b>: As the SME if novices have problems learning or performing this step.",
							data:{},
							children: [	
								{
								id:"4.2.2.1",
								name:"Example:\"Do you think this step is something that a novice would have difficulty learning or performing?\"",
								data:{},
								children: [				
								]
								}
							]
							}
					]
				},
				
				{
					id:"4.3",
					name:"Return to eliciting the subtask step-by-step. It is easier for your SME if you phrase your question by setting the scenario.",
					data:{},
					children: [
							{
								id:"4.3.1",
								name:"Example:\"So you perform [Step A], then [Step B], what will be the next step? Where do you go from there?\"",
								data:{},
								children: [				
								]
								},
								
								{
								id:"4.3.2",
								name:"Go to: <i>Elicit subtask step-by-step</i>.",
								data:{redirect:"3"},
								children: [
								]
					]
				}
					
			
			{
			id:"5",
			name: "Constant Monitoring",
			data: {},
			children: [
				{
				id:"5.1",
				name: "After every 1-3 turns of conversation, verify your understanding.",
				data: {},
				children: [
					{
					id:"5.1.1",
					name:"Example:\"So in situation like this, you just need to do X and not Y right?\"",
					data:{},
					children: [				
					]
					},
					{
					id:"5.1.2",
					name:"Example:\"So, in order to make this decision, I only need to look at these two things?\"",
					data:{},
					children: [				
					]
					},
					{
					id:"5.1.3",
					name:"Example:\"So if... Then...?\"",
					data:{},
					children: [				
					]
					},
					{
					id:"5.1.4",
					name:"Does the SME agree with your paraphrasing?",
					data:{$type:"ellipse"},
					children: [
					{	
						id:"5.1.4.1",
						name:"<b>NO</b>: Seek correction, then try rephrasing again.",
						data:{redirect:"5.1.4"},
						children: [
						]
						},
							{
						id:"5.1.4.2",
						name:"<b>YES</b>: Continue with the interview from where you left off.",
						data:{},
						children: []
							}
						]
					},
					{
					id:"5.1.5",
					name:"<b>IF</b>: You notice a gap in your knowledge or understanding while trying to rephrase the information back to the SME.",
					data:{},
					children: [
						{
						id:"5.1.5.1",
						name:"<b>THEN</b>: Ask the SME to bridge the knowledge gap and rephrase the revised information back to the SME for verification.",
						data:{redirect:"5.1.4"},
						children: []
						}
					]
					}
					
				
				]
				},
				
				{
				id:"5.2",
				name: "<b>IF</b>: the SME uses words that are abstract...",
				data: {},
				children: [
						{
						id:"5.2.1",
						name: "Cues: \"system,\" \"bigger picture,\" \"unmeasurable,\" \"unanswerable,\" \"excited,\" \"good/bad,\" \"worthwhile,\" \"enough,\" \"high impact,\" or a technical term you are unfamiliar with.",
						data: {},
						children: [
						
							]
						},
						
						{
						id:"5.2.2",
						name: "<b>THEN</b>: Clarify with SME what those words mean so that those terms can be quantified if possible.",
						data: {},
						children: [
								{
								id:"5.2.2.1",
								name: "Example: \"What do you mean by [abstract word]\"?",
								data: {},
								children: [
								
									]
								},
								{
								id:"5.2.2.2",
								name: "Example: \"How do you know that this is [abstract word]\"?",
								data: {},
								children: [
								
									]
								}
							]
						}
					]
				},
				
				{
				id:"5.3",
				name: "<b>IF</b>: the SME mentions a technical phenomenon without explanation...",
				data: {},
				children: [
					{
						id:"5.3.1",
						name: "<b>THEN</b>: Clarify the technical process with the SME.",
						data: {},
						children: [
							{
							id:"5.3.1.1",
							name: "Example: \"Why would...?\"",
							data: {},
							children: []
						},
						{
							id:"5.3.1.2",
							name: "Example: \"Why does that happen?\"",
							data: {},
							children: []
						}
						
						]
					}
				
				]
				},
				
				{
				id:"5.4",
				name: "Gently remind the SME a few times throughout the interview that you do not have the knowledge and therefore would need them to explain the process and procedure in full detail.",
				data: {},
				children: [
					{
					id:"5.4.1",
					name: "Example: \"I apologize for asking for the level of detail but it is very helpful.\"",
					data: {},
					children: []
					},
					{
					id:"5.4.2",
					name: "Example: \"This is just the lack of knowledge on my part, but how do you...?\"",
					data: {},
					children: []
					}
				]
				},
				
				{
				id:"5.5",
				name: "<b>IF</b>: the SME is going off on a tangent...",
				data: {},
				children: [
					{
					id:"5.5.1",
					name: "<b>THEN</b>: Bring the conversation back on-topic in a casual but respectful and direct manner.",
					data: {},
					children: [
						{
						id:"5.5.1.1",
						name: "Example: \"I see. I guess what I am trying to get is...\"",
						data: {},
						children: [
						]
						},
						{
						id:"5.5.1.2",
						name: "Example: \"I see. So did this happen in the incident that we have been talking about?\"",
						data: {},
						children: [
						]
						},
						{
						id:"5.5.1.3",
						name: "Example: \"I see. What about you? Tell me about the task that you are working on.\"",
						data: {},
						children: [
						]
						},
						{
						id:"5.5.1.4",
						name: "Example: \"This is very interesting and I'd like to come back to it, but I first want to talk about...\"",
						data: {},
						children: [
						]
						},
						{
						id:"5.5.1.5",
						name: "Example: \"This is very interesting but we're short on time so I'd like to first talk about...\"",
						data: {},
						children: [
						]
						}
					]
				},
				
				{
				id:"5.6",
				name: "<b>IF</b>: the SME is unwilling to share information...",
				data: {},
				children: [
					{
					id:"5.6.1",
					name: "<b>THEN</b>: Explain what they will personally gain from sharing.",
					data: {},
					children: [
							{
						id:"5.6.1.1",
						name: "Example:\"By participating in this interview, you could benefit in the sense that...\"",
						data: {},
						children: []
						}
						]
					}
					]
				},
				
				{
					id:"5.7",
					name: "<b>IF</b>: The SME seems tired or unable to continue with the interview...",
					data: {},
					children: [
						{
						id:"5.7.1",
						name: "<b>THEN</b>: Take a break.",
						data: {},
						children: [
								{
								id:"5.7.1.1",
								name: "Example: \"Okay, let's take a short break for now, and we will resume [in X minutes, the next day...]\"",
								data: {},
								children: []
								}
							]
						}
					
						]
					}
			
			]
			},
			
			{
			id:"6",
			name: "Closing",
			data: {},
			children: [
					{
					id:"6.1",
					name: "Ask the SME if there is anything else they would like to share or anything that was left out of the conversation so far. Resume the interview if the SME has more information to share.",
					data: {},
					children: [
							{
							id:"6.1.1",
							name: "Example:\"Are there any big chunks that we haven't gotten into?\"",
							data: {},
							children: []
							},
							{
							id:"6.1.2",
							name: "Example:\"Do you feel like there's anything we're missing at this point?\"",
							data: {},
							children: []
							}
						]
					},
					
					{
					id:"6.2",
					name: "<b>IF</b>: There's time remaining but the SME is unable to think of anything else to share...",
					data: {},
					children: [
						{
						id:"6.2.1",
						name: "<b>THEN</b>: Return to previous steps or decision points that haven't been discussed in depth and clarify with the SME to make sure all alternatives have been discussed.",
						data: {redirect:"3.10.2"},
						children: [
							]
						}
					
					]
					},
					
					{
					id:"6.3",
					name: "<b>IF</b>: The duration for the interview is almost up.",
					data: {},
					children: [
						{
						id:"6.3.1",
						name: "<b>THEN</b>: Prepare to stop the interview and schedule a follow-up interview on the spot if required.",
						data: {},
						children: [
								{
								id:"6.3.1.1",
								name: "Example:\"Thanks. I think I have enough at this point.\"",
								data: {},
								children: []
								},
								{
								id:"6.3.1.2",
								name: "Example:\"I think I have a good basis to move forward at this point.\"",
								data: {},
								children: []
								},
								{
								id:"6.3.1.3",
								name: "Example:\"I know you have to go, so we'll stop here.\"",
								data: {},
								children: []
								}
							]
						}
					]
					},
					
					{
					id:"6.4",
					name: "Inform the SME how the information from the interview will be used and plan follow-ups if need be.",
					data: {},
					children: [
						{
						id:"6.4.1",
						name: "Example: \"After this, I will transcribe the interview, and then...\"",
						data: {},
						children: []
						},
						{
						id:"6.4.2",
						name: "Example: \"If I have any questions I need your advice on, I will send you an email or phone call...\"",
						data: {},
						children: []
						}
						
						]
					},
					
					{
					id:"6.5",
					name: "Thank the SME for their time and answer any questions they have.",
					data: {},
					children: []
					}
				]
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
				style.paddingTop = '45px';
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
						node.data.$color = ['#aaa']
					}
					else if (count >= 10){
						node.data.$color = '#afa';
					}
					else{
                    node.data.$color = ['#eaa', '#dba', '#cca', '#bda', '#aea'][Math.floor(count/2)]
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
