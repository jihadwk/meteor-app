Users = new Mongo.Collection('users');
if(Meteor.isServer){
    Users.allow({
        insert:function(userId,doc){
            return true
        },
        update:function(){
            return true
        },
        remove:function(){
            return true
        }
    })
    
    Meteor.publish('users',function(){
        return Users.find();
    })
}
