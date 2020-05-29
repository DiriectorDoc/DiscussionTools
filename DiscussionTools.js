const imgDataURI = {
	signature: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48dGl0bGU+c2lnbmF0dXJlPC90aXRsZT48cGF0aCBkPSJNMCAxOGgyMHYxSDB6bS0uMDAzLTYuMTU1bDEuMDYtMS4wNiA0LjM2MyA0LjM2Mi0xLjA2IDEuMDZ6Ii8+PHBhdGggZD0iTS4wMDQgMTUuMTQ3bDQuMzYzLTQuMzYzIDEuMDYgMS4wNjEtNC4zNjIgNC4zNjN6TTE3IDVjMCA5LTExIDktMTEgOXYtMS41czggLjUgOS41LTYuNUMxNiA0IDE1IDIuNSAxNCAyLjVTMTEgNCAxMC43NSAxMGMtLjA4IDIgLjc1IDQuNSAzLjI1IDQuNSAxLjUgMCAyLTEgMy41LTFhMi4wNyAyLjA3IDAgMDEyLjI1IDIuNWgtMS41cy4xMy0xLS41LTFDMTYgMTUgMTYgMTYgMTQgMTZjMCAwLTQuNzUgMC00Ljc1LTZTMTIgMSAxNCAxYy41IDAgMyAwIDMgNHoiLz48L3N2Zz4=",
	clock: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNS4yOTE2NjY1bW0iCiAgIGhlaWdodD0iNS4yOTE2NjY1bW0iCiAgIHZpZXdCb3g9IjAgMCA1LjI5MTY2NjUgNS4yOTE2NjY4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJjbG9jay5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIyMi42Mjc0MTciCiAgICAgaW5rc2NhcGU6Y3g9IjEwLjAzNDUzMiIKICAgICBpbmtzY2FwZTpjeT0iNy44Mjk0NDg4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yOTEuNzA4MzIpIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjYxNjc5Mjk4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InBhdGgxMzY2IgogICAgICAgY3g9IjIuNjQ1ODMzNSIKICAgICAgIGN5PSIyOTQuMzU0MTYiCiAgICAgICByPSIyLjMzNzQzNjkiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMTAxMDE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIuMDI0MTEyNDY7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiCiAgICAgICBkPSJNIDEzLjY5NzI2Niw0LjE5NTMxMjUgOS43NjU2MjUsOS4wODAwNzgxIDQuNzk4ODI4MSw2LjczNjMyODEgNC4xNTgyMDMxLDguMDkzNzUgYyAyLjAwMjY5NTIsMC45NDU3Njk2IDQuMDA3MzMyNCwxLjg4NzQ2MTkgNi4wMDc4MTE5LDIuODM3ODkgMS42MDk1MTgsLTEuODk1NTQ4NSAzLjE0MDAyLC0zLjg1OTQwNzMgNC42OTkyMTksLTUuNzk2ODc0NCB6IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMywwLDI5MS43MDgzMikiCiAgICAgICBpZD0icmVjdDEzOTYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg==",
	calligraphy: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwIgogICBoZWlnaHQ9IjIwIgogICB2aWV3Qm94PSIwIDAgMjAgMjAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImRvd25sb2FkLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTQiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxMiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODM3IgogICAgIGlkPSJuYW1lZHZpZXcxMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuOCIKICAgICBpbmtzY2FwZTpjeD0iMTAiCiAgICAgaW5rc2NhcGU6Y3k9IjEwIgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmc4IiAvPgogIDx0aXRsZQogICAgIGlkPSJ0aXRsZTIiPnNpZ25hdHVyZTwvdGl0bGU+CiAgPHBhdGgKICAgICBkPSJNIDExLjQ2ODA3NywwIEMgOC44MDE0MzI1LDAgNS4xMzQ3OTY3LDQgNS4xMzQ3OTY3LDEyIGMgMCwxLjA2NTkxNyAwLjExNzU5MTUsMS45ODA0NTUgMC4zMTI0OTc0LDIuNzgxMjUxIEMgMi45MjE2MjEsMTUuNDYwNTAyIDAuODAxNSwxNS4zMzMzMzQgMC44MDE1LDE1LjMzMzMzNCB2IDIgYyAwLDAgMi40MTM0NzA2LC0wLjAxNTQ5IDUuMjc1OTk3LC0wLjgxMjUwMSBDIDcuODQxMDEzOSwxOS45OTI4NzMgMTEuNDY4MDc3LDIwIDExLjQ2ODA3NywyMCAxNC4xMzQ3MiwyMCAxNC4xMzQ3MiwxOC42NjY2NjcgMTYuNDY4MDM0LDE4LjY2NjY2NyAxNy4zMDgwMjgsMTguNjY2NjY3IDE3LjEzNDY5NiwyMCAxNy4xMzQ2OTYsMjAgaCAxLjk5OTk4MiBBIDIuNzU5OTc2NywyLjc2IDAgMCAwIDE2LjEzNDcwNCwxNi42NjY2NjcgQyAxNC4xMzQ3MiwxNi42NjY2NjcgMTMuNDY4MDU5LDE4IDExLjQ2ODA3NywxOCA5Ljc1NDU2MDMsMTggOC42MzcyNTM5LDE3LjExNDE3IDcuOTYyODk4MiwxNS44OTU4MzQgMTEuNjg2MjYzLDE0LjQxOTc4MiAxNS40NjgwNDIsMTEuNDI3NjcxIDE1LjQ2ODA0Miw1LjMzMzMzMzMgMTUuNDY4MDQyLDAgMTIuMTM0NzM3LDAgMTEuNDY4MDc3LDAgWiBtIDAsMiBDIDEyLjgwMTM5OSwyIDE0LjEzNDcyLDQgMTMuNDY4MDU5LDYuNjY2NjY2NiAxMi41NzQxNjYsMTAuODM4MjA0IDkuOTQ5OTY1NCwxMy4wMDQxOTYgNy4zMTk2NzQzLDE0LjEzMjgxMyA3LjE2NzIzODIsMTMuNDIyODE0IDcuMTA3MTc4OCwxMi42OTAwMjcgNy4xMzQ3Nzk5LDEyIDcuNDY4MTEwMyw0IDEwLjEzNDc1NCwyIDExLjQ2ODA3NywyIFoiCiAgICAgaWQ9InBhdGg2IgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgc3R5bGU9InN0cm9rZS13aWR0aDoxLjMzMzMyNzc3IiAvPgo8L3N2Zz4K"
};

/* This is the location of DialogBox.js on Wikipedia. This probably won't make sence here, but you can assume what it does. */
importScript("User:Diriector Doc/Scripts/DialogBox.js");

var customizeToolbar = function(){
	//Sometimes, this script loads before window.Forms does. If this happens, the script will reload (catch)
	try{
		Forms = window.Forms;
		dialogBox = window.dialogBox;
		
		//upon difinition, "new dialogBox()" will at itself to Forms.Templates so there is no need co create a variable for it.
		new dialogBox("Discussion", "disc",
		[
		{"field": "Result"}
		],
		[],
		(function(){
			var tem = Forms.getOpenTemplate();
			let content = "{{subst:" + "Discussion top";
			var fieldname = tem.basic[0].field;
			var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
			if (field) {
				content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
			}
			return {
				pre: content+"\n}}\n",
				post: '\n{{subst:' + 'Discussion bottom}}'
			};
		})
		);
		
		let atopBox = function(name, short){
			new dialogBox(name, short,
			[
			{"field": "Result"},
			{"field": "Status", "tooltip": "status-tooltip"}
			],
			[],
			(function(){
				var tem = Forms.getOpenTemplate();
				let content = "{{subst:" + short;
				for(var i = 0; i < tem.basic.length; i++) {
		  			var fieldname = tem.basic[i].field;
					var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
					if (field) {
						content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
					}
				}
				return {
					pre: content+"\n}}\n",
					post: '\n{{subst:' + 'abot}}'
				};
			})
			);
		};
		atopBox("Archive Top", "atop");
		atopBox("Archive Top Red", "atopr");
		atopBox("Archive Top Green", "atopg");
		atopBox("Archive Top Yellow", "atopy");
		
		new dialogBox("Poll", "pot",
		[
		{"field": "Result"},
		{"field": "Type", "tooltip": "poll-type-tooltip"}
		],
		[],
		(function(){
			var tem = Forms.getOpenTemplate();
			let content = "{{subst:" + "pot";
			for(var i = 0; i < tem.basic.length; i++) {
	  			var fieldname = tem.basic[i].field;
				var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
				if (field) {
					content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
				}
			}
			return {
				pre: content+"\n}}\n",
				post: '\n{{subst:' + 'pob}}'
			};
		})
		);
		
		new dialogBox("RM", "rm",
		[
		{"field": "Result"},
		{"field": "NAC", "tooltip": "nac-tooltip"},
		{"field": "PMC", "tooltip": "pmc-tooltip"}
		],
		[],
		(function(){
			var tem = Forms.getOpenTemplate();
			let content = "{{subst:" + "RM top";
			for(var i = 0; i < tem.basic.length; i++) {
	  			var fieldname = tem.basic[i].field;
				var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
				if (field) {
					content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
					if(i == 2)
						break;
				}
			}
			return {
				pre: content+"\n}}\n",
				post: '\n{{subst:' + 'RM bottom}}'
			};
		})
		);
		
		new dialogBox("Closed rfc", "rfc",
		[
		{"field": "Reason"}
		],
		[],
		(function(){
			var tem = Forms.getOpenTemplate();
			let content = "{{rfc top";
			var fieldname = tem.basic[0].field;
			var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
			if (field) {
				content += "|" + field;
			}
			return {
				pre: content+"}}\n",
				post: '\n{{rfc bottom}}'
			};
		})
		);
		
		new dialogBox("Collapse", "col",
		[
		{"field": "Title"},
		{"field": "Status", "tooltip": "status-tooltip"}
		],
		[
		{"field": "Warning", "tooltip": "col-warning-tooltip"},
		{"field": "Collapse", "tooltip": "col-collapse-tooltip"}
		],
		(function(){
			var tem = Forms.getOpenTemplate();
			let content = "{{Collapse top";
			var fieldname,
				field;
			for(var i = 0; i < tem.basic.length; i++) {
	  			fieldname = tem.basic[i].field;
				field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
				if (field) {
					content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
				}
			}
			for(var i = 0; i < tem.extra.length; i++) {
				fieldname = tem.extra[i].field;
				field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
				if (field) {
    				content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
				}
			}
			return {
				pre: content+"\n}}\n",
				post: '\n{{Collapse bottom}}'
			};
		})
		);
		
		new dialogBox("Hidden", "hat",
		[
		{"field": "Reason"},
		{"field": "Closer"},
		{"field": "Collapse", "tooltip": "col-collapse-tooltip"}
		],
		[],
		(function(){
			var tem = Forms.getOpenTemplate();
			let content = "{{Hidden archive top";
			var fieldname,
				field;
			for(var i = 0; i < tem.basic.length; i++) {
	  			fieldname = tem.basic[i].field;
				field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
				if (field) {
					content += "\n| " + fieldname.toLocaleLowerCase() + " = " + field;
				}
			}
			return {
				pre: content+"\n}}\n",
				post: '\n{{Hidden archive bottom}}'
			};
		})
		);
		
		//Now that I have designed the dialog box, I need to turn it into an availible module
		Forms.init();
	} catch(e) {
		//This reloads the script after 500ms in order to correctly grab window.Forms when it loads
		setTimeout(customizeToolbar, 500);
		return;
	}
	
	//Adding a new dropdown section to the toolbar
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'sections': {
			'discussion': {
				'type': 'toolbar',
				'label': 'Discussion'
			}
		}
	});
	
	//Adding a news sections to the new dropdown toolbar
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'discussion',
		'groups': {
			'signing': {
				//'labelMsg': 'group-signing-label'
			},
			'pinging': {
				'label': 'Pinging'
			},
			'archiving': {
				'label': 'Archiving'
			},
			'editRequests': {
				'label': 'Edit Request'
			}
		}
	});
	
	//Adding buttons to the "signing" section
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'discussion',
		'group': 'signing',
		'tools': {
			'sigAndTime': {
				label: 'Signature and timestamp',
				type: 'button',
				icon: imgDataURI.signature,
				action: {
					type: 'encapsulate',
					options: {
						pre: "--~~" + "~~"
					}
				}
			},
			'justTime': {
				label: 'Just timestamp',
				type: 'button',
				icon: imgDataURI.clock,
				action: {
					type: 'encapsulate',
					options: {
						pre: "~~" + "~" + "~~"
					}
				}
			},
			'justSig': {
				label: 'Just signature',
				type: 'button',
				icon: imgDataURI.calligraphy,
				action: {
					type: 'encapsulate',
					options: {
						pre: "--~~" + "~"
					}
				}
			}
		}
	});
	
	//Adding dropdown to the "pinging" section
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'discussion',
		'group': 'pinging',
		'tools': {
			'pingSelect': {
				label: 'Templates',
				type: 'select',
				list: {
					'Ping-button': {
						label: '{{Ping}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{Ping|',
								post: '}}'
							}
						}
					},
					'Reply_to-button': {
						label: '{{Reply to}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{Reply to|',
								post: '}}'
							}
						}
					},
					'Hidden_ping-button': {
						label: '{{Hidden ping}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{Hidden_ping|',
								post: '}}'
							}
						}
					},
					'To-button': {
						label: '{{to}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{to|',
								post: '}}'
							}
						}
					},
					'User_link-button': {
						label: '{{User link}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{subst:' + 'User link|',
								post: '}}'
							}
						}
					},
					'No_ping-button': {
						label: '{{No ping}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{No ping|',
								post: '}}'
							}
						}
					}
				}
			}
		}
	});
	
	//Adding drop-down to the "archiving" section
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'discussion',
		'group': 'archiving',
		'tools': {
			'archiveSelect': {
				label: 'Templates',
				type: 'select',
				list: {
					'Archive-button': {
						label: '{{Archive top}}',
						action: {
							type: 'dialog',
							module: 'dialog-atop'
						}
					},
					'Discussion-button': {
						label: '{{Discussion top}}',
						action: {
							type: 'dialog',
							module: 'dialog-disc'
						}
					},
					'Poll-button': {
						label: '{{Poll top}}',
						action: {
							type: 'dialog',
							module: 'dialog-pot'
						}
					},
					'Collapse-button': {
						label: '{{Collapse top}}',
						action: {
							type: 'dialog',
							module: 'dialog-col'
						}
					},
					'Hidden_archive-button': {
						label: '{{Hidden archive top}}',
						action: {
							type: 'dialog',
							module: 'dialog-hat'
						}
					},
					'Closed_RFC-button': {
						label: '{{Closed rfc top}}',
						action: {
							type: 'dialog',
							module: 'dialog-rfc'
						}
					},
					'RM-button': {
						label: '{{RM top}}',
						action: {
							type: 'dialog',
							module: 'dialog-rm'
						}
					},
					'Archive_r-button': {
						label: '{{Archive top}} (red)',
						action: {
							type: 'dialog',
							module: 'dialog-atopr'
						}
					},
					'Archive_g-button': {
						label: '{{Archive top}} (green)',
						action: {
							type: 'dialog',
							module: 'dialog-atopg'
						}
					},
					'Archive_y-button': {
						label: '{{Archive top}} (yellow)',
						action: {
							type: 'dialog',
							module: 'dialog-atopy'
						}
					}
				}
			}
		}
	});
	
	//Adding drop-down to the "edit request" section
	$( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
		'section': 'discussion',
		'group': 'editRequests',
		'tools': {
			'pingSelect': {
				label: 'Templates',
				type: 'select',
				list: {
					'FPER': {
						label: '{{Edit fully-protected}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{FPER}}'
							}
						}
					},
					'SPER': {
						label: '{{Edit semi-protected}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{SPER}}'
							}
						}
					},
					'EPER': {
						label: '{{Edit extended-protected}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{EPER}}'
							}
						}
					},
					'TPER': {
						label: '{{Edit template-protected}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{TPER}}'
							}
						}
					},
					'IPER': {
						label: '{{Edit interface-protected}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{IPER}}'
							}
						}
					},
					'edit': {
						label: '{{Rquest edit}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{Request edit}}'
							}
						}
					},
					'move':{
						label: '{{Requested move}}',
						action: {
							type: 'encapsulate',
							options: {
								pre: '{{subst:' + 'Move\n|',
								post: ' <!-- new page name -->\n|reason = \n}}\n'
							}
						}
					}
				}
			}
		}
	});
	
	mw.usability.addMessages({
		"status-tooltip": "Possible values: resolved, withdrawn, moved, or none",
		"poll-type-tooltip": "Used when it is not a move proposal",
		"nac-tooltip": 'Set to "yes" to indicate a non-admin closure (overrides PMC)',
		"pmc-tooltip": 'Set to "yes" to indicate a page mover closure',
		"col-warning-tooltip": 'Set to "no" to remove the "Do not modify" warning',
		"col-collapse-tooltip": 'Set to "no" to have content be shown on page load.',
		"wikieditor-toolbar-tool-atop-title": "Archive Top",
		"wikieditor-toolbar-tool-atopr-title": "Archive Top (Red)",
		"wikieditor-toolbar-tool-atopg-title": "Archive Top (Green)",
		"wikieditor-toolbar-tool-atopy-title": "Archive Top (Yellow)",
		"wikieditor-toolbar-tool-col-title": "Collapse Top",
		"wikieditor-toolbar-tool-disc-title": "Discussion Top",
		"wikieditor-toolbar-tool-hat-title": "Hidden Archive",
		"wikieditor-toolbar-tool-pot-title": "Poll Top",
		"wikieditor-toolbar-tool-rfc-title": "Rfc Top",
		"wikieditor-toolbar-tool-rm-title": "RM Top"
	});
};

/* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar … */
if(['edit', 'submit'].indexOf(mw.config.get('wgAction')) !== -1){
	
	/*
	* Will only procede if in one of these namespaces:
	** *Talk			1
	** *User			2
	** *User talk		3
	** *Wikipedia		4
	** *Wikipedia talk	5
	** *File talk		7
	** *MediaWiki talk	9
	** *Template talk	11
	** *Help talk		13
	** *Category talk	15
	** *Portal talk		101
	** *Draft talk		119
	** *Module talk 	829
	* Basically only pages with discussions going on
	*/
	if([1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 101, 119, 829].some(function(e){return mw.config.get('wgNamespaceNumber') == e})){
		let pagename = mw.config.get('wgPageName');
		/* Will only procede if not in not using code editor (hopefully) */
		if(!((pagename.substr(pagename.length - 3) === ".js" || pagename.substr(pagename.length - 4) === ".css") && mw.config.get('wgNamespaceNumber') % 2 === 0)){
			mw.loader.using('user.options').then(function(){
				// This can be the string "0" if the user disabled the preference ([[phab:T54542#555387]])
				if(mw.user.options.get('usebetatoolbar') == 1){
					$.when(mw.loader.using('ext.wikiEditor'), $.ready).then(customizeToolbar);
				}
			});
		}
	}
}
