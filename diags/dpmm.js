console.log('loading nodeDataArray ')
var nodeDataArray =  [ 
    
//
// Common entities
//
{ "key":"thing",             "text":"Things",  "description":"Things Entity",        "color":"blue" },
{ "key":"concept",           "text":"Concepts",  "description":"Concept Entity",     "color":"blue" },


{ category:"entity", "key":"strategy",    "text":"Strategy Outcome",    "description":"Strategy Outcome Theme",  "color":"white",   expanded: true, "parent":"concept" },
{ category:"entity", "key":"chain",       "text":"Value Chain",       "description":"Value Chain Component",  "color":"white",  expanded: true, "parent":"strategy" },
{ category:"entity", "key":"stream",      "text":"Value Stream",      "description":"Value Stream",  "color":"white",  expanded: true, "parent":"chain" },
{ category:"entity", "key":"activity",    "text":"Worfklow Activity",    "description":"Workflow Activity",  "color":"white",  expanded: true, "parent":"stream" },

{ category:"entity", "key":"capability",  "text":"Business Capability",  "descriptioxn":"Business Capability Model",  "color":"orange",  expanded: true, "parent":"workflow" },

{ category:"entity", "key":"competency",  "text":"Competency",  "description":"Team Competency Model",  "color":"orange",  expanded: true, "parent":"capability" },
{ category:"entity", "key":"position",    "text":"Position",    "description":"Position Role Responsibility ",    "expanded": true, "parent":"competency" },
{ category:"entity", "key":"skill",       "text":"Skill",       "description":"Skill Maturity Model ",    "expanded": true, "parent":"competency" },
{ category:"entity", "key":"behavior",    "text":"Behavior",    "description":"Competency Behavior Matrix ",    "expanded": true, "parent":"competency" },

{ category:"entity", "key":"process",     "text":"Process",     "description":"Process Flow Model ",  "color":"orange",  expanded: true, "parent":"capability" },
{ category:"entity", "key":"map",         "text":"Map",    "description":"Process Workflow Maps ",    "expanded": true, "parent":"process" },
{ category:"entity", "key":"indicator",   "text":"Indicator",   "description":"Logic Model Indicators ",    "expanded": true, "parent":"process" },
{ category:"entity", "key":"checklist",   "text":"Checklist",   "description":"Action Plan Checklists ",    "expanded": true, "parent":"process" },

{ category:"entity", "key":"technology",  "text":"Technology", "description":"Technology Architecture Model",  "color":"orange",  expanded: true, "parent":"capability" },
{ category:"entity", "key":"application", "text":"Application",  "description":"Application System Feature ",    "expanded": true, "parent":"technology" },
{ category:"entity", "key":"information", "text":"Information",  "description":"Information System Services ",    "expanded": true, "parent":"technology" },
{ category:"entity", "key":"component",   "text":"Component",    "description":"Logical Technology Components ",    "expanded": true, "parent":"technology" },


// {"key":"quote",            "text":"Quotes",   "color":"MediumVioletRed", "expanded":true},



      


]

var linkDataArray = [
    
 //
//Common node link relationships
//

// {"from":"thing",   "to":"concept", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"strategy", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"chain", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"stream", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"activity", "text":"parent of", "color":"blue", "thick":2},

// {"from":"concept", "to":"capability", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"competency", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"process", "text":"parent of", "color":"blue", "thick":2},
// {"from":"concept", "to":"technology", "text":"parent of", "color":"blue", "thick":2},

{"from":"strategy", "to":"chain", "text":"parent of"},
{"from":"chain",    "to":"stream", "text":"parent of"},
{"from":"stream",   "to":"activity", "text":"parent of"},
{"from":"activity", "to":"capability", "text":"parent of"},

{"from":"capability", "to":"competency", "text":"parent of"},
{"from":"competency", "to":"position", "text":"parent of"},
{"from":"competency", "to":"skill", "text":"parent of"},
{"from":"competency", "to":"behavior", "text":"parent of"},

{"from":"capability", "to":"process", "text":"parent of"},
{"from":"process",    "to":"map", "text":"parent of"},
{"from":"process",    "to":"indicator", "text":"parent of"},
{"from":"process",    "to":"checklist", "text":"parent of"},

{"from":"capability", "to":"technology", "text":"parent of"},
{"from":"technology", "to":"application", "text":"parent of"},
{"from":"technology", "to":"information", "text":"parent of"},
{"from":"technology", "to":"component", "text":"parent of"}

    
 ]