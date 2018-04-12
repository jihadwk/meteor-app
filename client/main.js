Template.selectFrame.helpers({
    active : function(){
        return Session.get('board');
    }
});

if(Meteor.isClient){
    Meteor.startup(function(){
        Meteor.subscribe('get-devices','1');
        Router.configure({
            layoutTemplate:'layout'
        })
        Router.route('/',function(){
            this.render('home');
        });
        Router.route('/test1',function(){
            this.render('test1');
        })
        Router.route('/test2',function(){
            this.render('test2');
        })
        Router.route('/globalHelperExample',function(){
            //运行时绑定this
            console.log('function:',this);
            this.render('globalHelperExample',{
                data:{foods:[
                    {
                                    selected:'no',
                                    name:'烤肉'
                                },
                                {
                                    selected:'yes',
                                    name:'烤鸭'
                                },
                ]}
            });
        })
        // Router.route('/dbtest',()=>{
            //this是全局window，定义时绑定this,无法成功跳转
        //     console.log('=>',this);
        //     this.render('users');
        // })
        Router.route('/dbtest',function(){
            Meteor.subscribe('users');
            this.render('users');
        })
        Router.route('/sub',function(){
            this.render('sub');
        })
    })
}

