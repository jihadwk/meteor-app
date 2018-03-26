Template.home.helpers({
    exampleList : function(){
        return [{name:'test1'},{name:'test2'},{name:'globalHelperExample'},
            {name:'dbtest'}
    ];
    }
})
Template.home.events({
    'click p': function(event){
        event.preventDefault();
        event.stopPropagation();
        Router.go('/'+ $(event.currentTarget).text());
    }
})