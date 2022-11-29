import {makeObservable, makeAutoObservable, flow} from "mobx";

class mouseEvents{
    mouseObj={
        clicks:0,
        MouseOver:0,
        MouseOut:0,
        timeStamp:null,
        total:0
    }
    total(){
        return this.mouseObj.total=this.mouseObj.clicks+this.mouseObj.MouseOut+this.mouseObj.MouseOver;
        if(this.mouseObj.timestamp!==null){
            setInterval(()=>{
                this.mouseObj.timestamp=new Date().toLocaleString()
            },1000)
        }
    }
    constructor() {
        makeAutoObservable(this);
    }
    mouseOver(){
        this.mouseObj.MouseOver+=1;
    }
    mouseOut(){
        this.mouseObj.MouseOut+=1;
    }
    mouseClicks(){
        this.mouseObj.clicks+=1;
    }
    reset(){
        this.mouseObj={
            clicks:0,
            MouseOver:0,
            MouseOut:0,
            timeStamp:null,
            total:this.mouseObj.MouseOut+this.mouseObj.MouseOver
        }
    }
    setTimeStamp(){
        this.mouseObj.timeStamp='start time';
        setTimeout(()=>{
            this.mouseObj.timeStamp=new Date().toLocaleString();
        },1000);
    }
}

export default new mouseEvents;