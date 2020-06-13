var Forms = {
    "Templates" : {},
	init: function(){},
	getOpenTemplate: () => Forms.Templates[$($(".ui-dialog-content.ui-widget-content:visible")[0]).find(".cite-template").val()],
	escStr: (s) => s.replace(' ', '-').replace("'", "\'").replace('"', '\"'),
	fixStr: (s) => (s.slice(0,1).toUpperCase() + s.slice(1)).replace('_',' '),
	showHideExtra: function() {
		var template = Forms.getOpenTemplate();
		var div = $('#wikieditor-toolbar-' + Forms.escStr(template.shortform) + '-dialog');
		var setting = div.find(".cite-form-status").val();
		if ( setting === 'closed' ) {
    		div.find(".cite-form-status").val('open');
    		div.find('.cite-extra-fields').show(1, function() {
    			// jQuery adds "display:block", which screws things up
    			div.find('.cite-extra-fields').attr('style', 'width:100%; background-color:transparent;'); 
    		});
		} else {
    		div.find(".cite-form-status").val('closed');
    		div.find('.cite-extra-fields').hide();
		}
	},
	getCompletedForm: function(){
		let object = {
			all: {},
			basic: {},
			extra: {},
			incr: {}
		};
		var tem = Forms.getOpenTemplate();
		console.log(tem);
		for(var i in tem.basic){
			if (tem.basic[i].increment_group) {
        		continue;
    		}
			var fieldname = tem.basic[i].field;
			var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
			if (field) {
				object.all[fieldname.toLocaleLowerCase()] = field;
				object.basic[fieldname.toLocaleLowerCase()] = field;
			}
		}
		for(var i in tem.extra){
			if (tem.extra[i].increment_group) {
        		continue;
    		}
			var fieldname = tem.extra[i].field;
			var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldname).val());
			if (field) {
				object.all[fieldname.toLocaleLowerCase()] = field;
				object.extra[fieldname.toLocaleLowerCase()] = field;
			}
		}
		for(var e in tem.incrementables){
			for(var i = 1; i <= tem.incrementables[e].val; i++)
				for(var j in tem.incrementables[e].fields){
					var fieldname = j.field;
					var fieldid = fieldname.replace('<N>', i.toString());
					var field = $.trim($('#form-'+Forms.escStr(tem.shortform)+'-'+fieldid).val());
					if (field) {
						object.all[fieldid.toLocaleLowerCase()] = field;
						object.incr[fieldid.toLocaleLowerCase()] = field;
					}
				}
		}
		return object;
	}
};

const types = [
	null,
	null,
	"checkbox"
	]

/* The following variable has been addapted from [[MediaWiki:Gadget-refToolbarBase.js]] */
var dialogBox = function(templatename, shortform, basicfields, expandedfields, encapsulateOpts) {
	// Properties
	this.templatename = templatename; // The template name
	this.shortform = shortform; // A short form, used for the dropdown box
	this.basic = basicfields; // Basic fields
	this.extra = expandedfields; // More feilds
	this.encapsulateOpts = encapsulateOpts;

	this.incrementables = {};

	// Add it to the list
	Forms.Templates[this.templatename] = this;
	Forms.Templates[this.shortform] = this;
	// Methods
	this.makeFormInner = function(fields, incrsetup) {
		var i = 0;
		var trs = [];
		var autofills = [];
		for (i = 0; i < fields.length; i++) {
			var fieldobj = fields[i];
			var field = labelfield = fieldobj.field;
			var ad = false;
			var check = fieldobj.type === "checkbox" || types[fieldobj.type] === "checkbox";
			if (incrsetup && fieldobj.increment_group) {
				field = fieldobj.field.replace('<N>', '1');
				labelfield = fieldobj.field.replace('<N>', '');
				if (this.incrementables[fieldobj.increment_group] && !this.incrementables[fieldobj.increment_group].setup) {
					// The object has been created, but not fully initialized
					this.incrementables[fieldobj.increment_group]['fields'].push(fieldobj);
				} else if (!this.incrementables[fieldobj.increment_group]) {
					// Object not yet created
					this.incrementables[fieldobj.increment_group] = {
						'fields': [fieldobj],
						'val': 1,
						'setup': false
					};
				} else if (this.incrementables[fieldobj.increment_group] && this.incrementables[fieldobj.increment_group].setup) {
					// Fully initialized from a previous invocation of this function, just resetting the number
					this.incrementables[fieldobj.increment_group].val = 1;
				}
			} else if (fieldobj.increment_group) {
				// Adding a new row
				incrval = this.incrementables[fieldobj.increment_group].val;
				field = fieldobj.field.replace('<N>', incrval.toString());
				labelfield = fieldobj.field.replace('<N>', '');
			}
			if ($.inArray(field, []/* CiteTB.getOption('autodate fields') */) != -1) {
				im = $('<img />').attr('src', '//upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Nuvola_apps_date.svg/20px-Nuvola_apps_date.svg.png');
				im.attr('alt', mw.usability.getMsg('cite-insert-date')).attr('title', mw.usability.getMsg('cite-insert-date'));
				ad = $('<a />').attr('href', '#');
				ad.append(im);
				ad.attr('id', 'form-date-' + Forms.escStr(this.shortform) + '-' + field);
				$(document).on('click', '#form-date-' + Forms.escStr(this.shortform) + '-' + field, function() {
					var elemid = $(this).attr('id');
					var res = /^cite\-date\-(.*?)\-(.*)$/.exec(elemid);
					var id = res[1];
					var field = res[2];
					var DT = new Date();
					var datestr = (function(DT, useday, usemonth) {
						if (typeof useday == "undefined") {
					    	useday = true;	
						}
						if (typeof usemonth == "undefined") {
					    	usemonth = true;	
						}
						var datestr = "<year>-<zmonth>-<zdate>";
						var zmonth = '';
						var month = DT.getUTCMonth()+1;
						if (month < 10) {
					    	zmonth = "0"+month.toString();
						} else {
					    	zmonth = month.toString();
						}
						month = month.toString();
						var zdate = '';
						var date = DT.getUTCDate();
						if (date < 10) {
					    	zdate = "0"+date.toString();
						} else {
					    	zdate = date.toString();
						}
						date = date.toString();
						if (useday) {
					    	datestr = datestr.replace('<date>', date);
					    	datestr = datestr.replace('<zdate>', zdate);
						} else {
					    	datestr = datestr.replace('<date>', '');
					    	datestr = datestr.replace('<zdate>', '');
						}
						if (usemonth) {
					    	datestr = datestr.replace('<month>', month);
					    	datestr = datestr.replace('<zmonth>', zmonth);
					    	datestr = datestr.replace('<monthname>', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][DT.getUTCMonth()]);
						} else {
					    	datestr = datestr.replace('<month>', '');
					    	datestr = datestr.replace('<zmonth>', '');
					    	datestr = datestr.replace('<monthname>', '');
						}  
						datestr = datestr.replace('<year>', DT.getUTCFullYear().toString());
						return datestr.replace(/^[ \/\-\,\.]*(.*?)[ \/\-\,\.]*$/g, "$1"); // Cleanup any dangling spaces or connectors that might result from omitting date/month
					})();
					$('#cite-'+id+'-'+field).val(datestr);
					return false;
				});
			}

			if (fieldobj.autofillid) {
				var autotype = fieldobj.autofillid;
				im = $('<img />').attr('src', '//upload.wikimedia.org/wikipedia/commons/thumb/1/17/System-search.svg/20px-System-search.svg.png');
				im.attr('alt', mw.usability.getMsg('cite-autofill-alt')).attr('title', mw.usability.getMsg('cite-autofill-alt'));
				ad = $('<a />').attr('href', '#');
				ad.append(im);
				ad.attr('id', 'form-auto-' + Forms.escStr(this.shortform) + '-' + field + '-' + autotype);
				autofills.push('#form-auto-' + Forms.escStr(this.shortform) + '-' + field + '-' + autotype);
			}

			if (fieldobj.increment_button) {
				var incrtype = fieldobj.increment_group;
				im = $('<img />').attr('src', '//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nuvola_action_edit_add.svg/20px-Nuvola_action_edit_add.svg.png');
				im.attr('alt', mw.usability.getMsg('cite-increment-alt')).attr('title', mw.usability.getMsg('cite-increment-alt'));
				ad = $('<a />').attr('href', '#');
				ad.append(im);
				ad.attr('id', 'form-incr-' + Forms.escStr(this.shortform) + '-' + incrtype);
			}

			var display = mw.usability.getMsg('cite-' + labelfield + '-label');
			if (typeof display !== 'string') {
				if (fieldobj.label) {
					display = Forms.fixStr(fieldobj.label);
				} else {
					display = Forms.fixStr(labelfield);
				}
			}
			var tooltip = fieldobj.tooltip ? $('<abbr />').attr('title', mw.usability.getMsg(fieldobj.tooltip)).html('<sup>?</sup>') : false;

			var input = '';
			if (check) {
				input = $('<input type="checkbox" ' + (fieldobj.checked ? 'checked':'') + '/>');
			} else if (ad) {
				input = $('<input tabindex="1" style="width:85%" type="text" />');
			} else {
				input = $('<input tabindex="1" style="width:100%" type="text" />');
			}
			input.attr('id', 'form-' + Forms.escStr(this.shortform) + '-' + field);
			if (fieldobj.autofillprop) {
				classname = 'form-' + Forms.escStr(this.shortform) + '-' + fieldobj.autofillprop;
				if (fieldobj.increment_group) {
					input.addClass('form-' + Forms.escStr(this.shortform) + '-incr-' + fieldobj.increment_group);
					classname += '-' + this.incrementables[fieldobj.increment_group].val.toString();
				}
				input.addClass(classname);
			}
			var label = $('<label />');
			label.attr('for', 'form-' + Forms.escStr(this.shortform) + '-' + field).text(display);
			if (tooltip) {
				label.append(tooltip);
			}
			var style = 'text-align:right; width:20%;';
			if (i % 2 == 1) {
				style += ' padding-left:1em;';
			} else {
				var tr = $('<tr />');
			}
			var td1 = $('<td class="cite-form-td" />').attr('style', style);
			td1.append(label);
			tr.append(td1);
			var td2 = $('<td class="cite-form-td" style="width:30%" />');
			td2.append(input);
			if (ad) {
				td2.append(ad);
			}
			tr.append(td2);
			if (i % 2 === 0) {
				trs.push(tr);
			}
		}
		var needsetup = false;
		for (var g in this.incrementables) {
			if (!this.incrementables[g].setup) {
				needsetup = true;
				$(document).on('click', '#form-incr-' + Forms.escStr(this.shortform) + '-' + g, function() {
					template = Forms.getOpenTemplate();
					var currentrow = $(this).parents('tr')[0];
					$(this).prev().css('width', '100%')
					$(this).detach();
					var elemid = $(this).attr('id');
					var res = /^cite\-incr\-(.*?)\-(.*)$/.exec(elemid);
					group = res[2];
					increments = template.incrementables[group];
					fields = increments.fields;
					incrval = increments.val+1;
					template.incrementables[group].val += 1;
					trs = template.makeFormInner(fields, false);
					trs.reverse();
					for (var i=0; i<trs.length; i++) {
						$(currentrow).after(trs[i]);
					}
				});
				this.incrementables[g].setup = true;
			}
		}
		if (needsetup || $.isEmptyObject(this.incrementables)) {
			for (i = 0; i < autofills.length; i++) {
				$(document).on('click', autofills[i], function() {
					var elemid = $(this).attr('id');
					var res = /^cite\-auto\-(.*?)\-(.*)\-(.*)$/.exec(elemid);
					var tem = res[1];
					var field = res[2];
					var autotype = res[3];
					var id = $('#cite-'+tem+'-'+field).val();
					if (!id) {
				    	return false;
					}
					var url = '//tools.wmflabs.org/reftoolbar/lookup.php?';
					url+=autotype+'='+encodeURIComponent(id);
					url+='&template='+encodeURIComponent(tem);
					var s = document.createElement('script');
					s.setAttribute('src', url);
					s.setAttribute('type', 'text/javascript');
					document.getElementsByTagName('head')[0].appendChild(s);
					return false;
				});
			}
		}
		return trs;
	}

	// gives a little bit of HTML so the open form can be identified
	this.getForm = function() {
		var main = $("<div class='dialog-form-container' />");
		var form1 = $('<table style="width:100%; background-color:transparent;" class="cite-basic-fields" />');
		var i = 0;
		var trs = this.makeFormInner(this.basic, true);
		for (var i = 0; i < trs.length; i++) {
			form1.append(trs[i]);
		}

		var form2 = $('<table style="width:100%; background-color:transparent; display:none" class="cite-extra-fields">');
		trs = this.makeFormInner(this.extra, true);
		for (var i = 0; i < trs.length; i++) {
			form2.append(trs[i]);
		}
		main.append(form1).append(form2);

		var extras = $('<div />');
		extras.append('<input type="hidden" class="cite-form-status" value="closed" />');
		var hidden = $('<input type="hidden" class="cite-template" />');
		hidden.val(this.templatename);
		extras.append(hidden);
		main.append(extras);

		return main;
	}
};

/* The following code has been addapted from [[MediaWiki:RefToolbar.js]] */
Forms.init = function() {
	for (var t in Forms.Templates) {
	    var tem = Forms.Templates[t];
	    var sform = Forms.escStr(tem.shortform);
	    var dialogobj = {};
		dialogobj['dialog-'+sform] = {
			titleMsg: 'wikieditor-toolbar-tool-' + sform + '-title',
			id: 'wikieditor-toolbar-' + sform + '-dialog',
			html: '<input type="hidden" class="cite-template" value="' + sform + '"/>',
			init: function() {},
			dialog: {
				resizable: false,
				dialogClass: 'wikiEditor-toolbar-dialog',
				width: 675,
				buttons: {
					'form-submit': function() {
						tem = Forms.getOpenTemplate();
						$.wikiEditor.modules.toolbar.fn.doAction( $(this).data( 'context' ), {
							type: 'encapsulate',
							options: (typeof tem.encapsulateOpts === "function") ? tem.encapsulateOpts():tem.encapsulateOpts
						}, $(this) );
						$(this).dialog( 'close' );
					},
        			'form-showhide': Forms.showHideExtra,
        			'wikieditor-toolbar-tool-link-cancel': function() {
            			$(this).dialog( 'close' );
        			}
				},
				open: function() {
					$(this).html(Forms.getOpenTemplate().getForm());
				}
			}
		}
		$('#wpTextbox1').wikiEditor('addDialog', dialogobj);
	}
	mw.usability.addMessages({
		"form-showhide": "Show/Hide extra fields",
		"form-submit": "Submit"
	});
};
