Users = new Mongo.Collection('users');
Devices = new Mongo.Collection('devices');
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
    });
    Devices.allow({
        insert:function(userId,doc){
            return true
        },
        update:function(){
            return true
        },
        remove:function(){
            return true
        }
    });

    
    Meteor.publish('users',function(){
        return Users.find();
    });
    Meteor.publish('get-devices',function(groupId){
        return Devices.find({groupId:groupId});
    })

}
