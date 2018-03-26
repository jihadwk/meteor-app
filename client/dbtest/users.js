Template.users.helpers({
    users:function(){
        
        // return [
        //     {name:'bill',age:20},
        //     {name:'joy',age:22}
        // ];
        var users = Users.find();
        console.log(users);
        return users;
    },
  
})
Template.useritem.helpers({
    isEditing:function(){
        var eid = Session.get('editId');
        // console.log('user:',this);
        return this._id+'' == eid;
    }
})
Template.useritem.events({
    'click .edit':function(e,tpl){
        e.preventDefault();
        Session.set('editId',this._id);
    },
    'click button':function(event,template){
        event.preventDefault();
        event.stopPropagation();
        var username = template.$('#username').val();
        var age = template.$('#age').val();
        console.log(username+','+age);
        var id = this._id;
        Users.update({_id:id},{$set:{name:username,age:age}},function(){
            Session.set('editId','-1');
        });
        
    },
    'click .remove':function(e,tpl){
        if(confirm("确认删除?")){
            var id = this._id;
            Users.remove(id);
        }
       
    }
})

Template.insertForm.events({
    'click button':function(event,template){
        event.preventDefault();
        event.stopPropagation();
        var username = $('#username').val();
        var age = $('#age').val();
        var user = {name:username,age:age};
        Users.insert(user);
    }
})