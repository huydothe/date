let MyDate=function(day, month, year){
    this.day=day;
    this.month=month;
    this.year=year;

    this.getday=function(){
        return this.day;
    }
    this.getmonth=function (){
        return this.month;
    }
    this.getyear=function (){
        return this.year;
    }
    this.setday=function (day){
        this.day=day;
    }
    this.setmonth=function (month){
        this.month=month;
    }
    this.setyear=function (year){
        this.year=year;
    }
}
let date=new MyDate(11 , 6 , 1999);

date.setday(11);
date.setmonth(6);
date.setyear(2022);

let day=date.getday();
let month=date.getmonth();
let year=date.getyear();
alert(day+' / '+ month+ ' / '+ year);