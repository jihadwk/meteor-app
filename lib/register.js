if(Meteor.isClient){
    Template.registerHelper('isLogin',function(){
        var flag = false;
        //logic code
        return flag;
    });
    Template.registerHelper('equal',(a,b)=>{
        return a === b;
    })
}