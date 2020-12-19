class{
    constructor(){
        this.image=loadImage("Images/Milk.png");
        this.foodStock=0;
        this.lastFed;
    }

    display(){
        var x=70,y=110;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30
            }
        }
    }

    getFoodStock(){
       return this.foodStock; 
    }
  
    updateFoodStock(){
        this.foodStock=foodStock;
    }

    deductStock(){
     if(this.foodStock>0){
       this.foodStock=this.foodStock-1;
     }
    }
}