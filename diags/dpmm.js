console.log('loading nodeDataArray ')
var nodeDataArray =  [ 
    
//
// Common entities
//
{ "key":"thing",             "text":"Things",  "description":"Things Entity",        "color":"orange" },

{ category:"entity", "key":"capability",    "text":"Capability",    "description":"Capability Model",  "color":"orange",  expanded: true, "parent":"thing" },

{ category:"entity", "key":"competency",    "text":"Competency",    "description":"Team Competency Model",  "color":"orange",  expanded: true, "parent":"capability" },
{ category:"entity", "key":"position",      "text":"Position",      "description":"Position Role Responsibility ",    "expanded": true, "parent":"competency" },
{ category:"entity", "key":"skill",         "text":"Skill",         "description":"Skill Maturity Model ",    "expanded": true, "parent":"competency" },
{ category:"entity", "key":"behavior",      "text":"Behavior",      "description":"Competency Behavior Matrix ",    "expanded": true, "parent":"competency" },

{ category:"entity", "key":"process",       "text":"Process",       "description":"Process Flow Model ",  "color":"orange",  expanded: true, "parent":"capability" },
{ category:"entity", "key":"workflow",      "text":"Workflow",      "description":"Process Workflow Maps ",    "expanded": true, "parent":"process" },
{ category:"entity", "key":"indicator",     "text":"Indicator",    "description":"Logic Model Indicators ",    "expanded": true, "parent":"process" },
{ category:"entity", "key":"checklist",     "text":"Checklist",      "description":"Action Plan Checklists ",    "expanded": true, "parent":"process" },

{ category:"entity", "key":"technology",    "text":"Technology",    "description":"Technology Architecture Model",  "color":"orange",  expanded: true, "parent":"capability" },
{ category:"entity", "key":"application",   "text":"Application",   "description":"Application System Feature ",    "expanded": true, "parent":"technology" },
{ category:"entity", "key":"information",   "text":"Information",   "description":"Information System Services ",    "expanded": true, "parent":"technology" },
{ category:"entity", "key":"component",     "text":"Component",     "description":"Logical Technology Components ",    "expanded": true, "parent":"technology" },


{"key":"quote",            "text":"Quotes",   "color":"MediumVioletRed", "expanded":true},



      


]

var linkDataArray = [
    
 //
//Common node link relationships
//

{"from":"thing", "to":"capability", "text":"parent of", "color":"blue", "thick":2},

{"from":"capability", "to":"competency", "text":"parent of"},
{"from":"competency", "to":"position", "text":"parent of"},
{"from":"competency", "to":"skill", "text":"parent of"},
{"from":"competency", "to":"behavior", "text":"parent of"},

{"from":"capability", "to":"process", "text":"parent of"},
{"from":"process", "to":"workflow", "text":"parent of"},
{"from":"process", "to":"indicator", "text":"parent of"},
{"from":"process", "to":"checklist", "text":"parent of"},

{"from":"capability", "to":"technology", "text":"parent of"},
{"from":"technology", "to":"application", "text":"parent of"},
{"from":"technology", "to":"information", "text":"parent of"},
{"from":"technology", "to":"component", "text":"parent of"}

    
 ]