const person={
    firstname: 'virgo',
    lastname: 'Hannah',
    fullname:function () {
        return `${this.firstname} ${this.lastname}`
    },
    shoutname: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullname());
            
        }, 3000);
    }

}