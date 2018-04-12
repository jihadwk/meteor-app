Template.sub.onCreated(function(){
    Meteor.subscribe('get-devices','g1');
})
Template.sub.helpers({
    deviceList:function(){
        return Devices.find();
    }
})
Template.sub.events({
    'click #btn':function(){
        Meteor.subscribe('get-devices','g2');
    }
})
//订阅经测试：
//1.订阅的数据保存在mini mongo
//2.改变条件，重新订阅，得到的数据存到mini mongo，之前订阅的数据依然存在mini mongo
//3.重新打开app，mini mongo数据重置