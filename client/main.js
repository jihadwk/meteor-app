Template.selectFrame.helpers({
    active : function(){
        return Session.get('board');
    }
});

if(Meteor.isClient){
    Meteor.startup(function(){
        Router.route('/',function(){
            this.render('home');
        });
        Router.route('/test1',function(){
            this.render('test1');
        })
        Router.route('/test2',function(){
            this.render('test2');
        })
    })
}

