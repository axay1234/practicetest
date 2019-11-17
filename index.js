


 const circle = {
     radius : 1,
     location: {                          // we can't duplicate the objects when it has a methods or functions 
         x:1,                  // So we are using factories and constructor function to duplicate the object
         y: 1   // If in this object if we don't have methods then it can't be an issue to duplicate we have to just provide a different values. 
     },
     draw: function(){
         console.log('draw');
     }
 }; 
 Also we can define objects using factories and constructors

 function createCircle(radius){
      return{ 
        //radius : radius, in ES6 we have a new feature if property and its value are the same then we can remove its value only define the property. 
        radius, 
        // location: {
        //     x:1,
        //     y: 1
        // },
        draw: function(){
            console.log('draw');
        }
      };
 }
//  const circle = createCircle(1);

//Constructor function: WE WRITE CONSTRUCTOR FUNCTION FIRST LETTER IN CAPITAL   

// function Circle(radius){
//     console.log('this', this);
//     this.radius = radius; 
//     this.draw = function(){
//         console.log('draw');
//     }
// }
//  const another = new Circle(1);  
 
 // new operate create empty object, it will set this. to point to that object.
 //bcs by default its point to the global object. if u r reaning this code in browser global object is the window object.
 //if we r reaning in the node environment global object is global.   


 function Circle(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw');
    }
}
 const circle = new Circle(10);  
 //add new property here

circle['location'] = { x: 2};
circle.location = {x: 1};

 