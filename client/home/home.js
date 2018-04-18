Template.home.helpers({
    exampleList : function(){
        return [{name:'test1'},{name:'test2'},{name:'globalHelperExample'},
            {name:'dbtest'},{name:'sub'}
    ];
    },
    url:function(){
       return 'images/icon_nav_panel.png'
    }
})
Template.home.events({
    'click a': function(event){
        event.preventDefault();
        event.stopPropagation();
        Router.go('/'+ this.name);
    }
})