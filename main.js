


// let v = 29



// // if else
// if (v < 18 && v>0) {
//     console.log("insufficiente");
    
// }else if(v>=18 && v < 21){
//     console.log("sufficiente");
    
// }else if(v>= 21 && v< 24){
//     console.log("buono");
    
// }else if(v>=24 && v< 27){
//     console.log("distinto");
    
// }else if (v>=27 && v<=29) {
//     console.log("ottimo");
    
// }else if (v == 30){
//     console.log("eccellente");
    
// }else{ console.log("Non è un voto");
// }

// // Switch



// switch (true) {
//     case v < 18 && v>0:
//     console.log("insufficiente");


//         break;
//     case  v>=18 && v < 21:
//         console.log("sufficiente");
//         break;
    
//     case  v>= 21 && v< 24:
//         console.log("buono");
//         break;
//     case v>=24 && v< 27:
//         console.log("distinto");
//         break;
//     case v>=27 && v<=29:
//         console.log("ottimo");
//         break;
//     case v == 30:
//         console.log("eccellente");
//         break
//     default:
//         console.log("non è un voto!");
// }     
        

       
    // Selfwork 2 condizioni
    
    
    let temp = 25
   
// if else
    if (temp<20 && temp>=0) {
        console.log("non ci sono più le mezze stagioni");
        
    }else if (temp>=30) {
        console.log("lu mare, lu sole, lu ientu");
        
    }else if (temp<30 && temp>20) {
        console.log("mi dia una peroni sudata");
        
    }else if (temp<0 && temp>=-10) {
        console.log("non è tanto il freddo quanto l’umidità");
        
    }else if (temp< -10) {
        console.log("copriti…ancora ti raffreddi");
        
    }

// switch
    
    switch (true) {
        case temp< -10 :
            console.log("copriti…ancora ti raffreddi");
            
            break;
        case temp < 0 :
            console.log("non è tanto il freddo quanto l’umidità")
            break;
        case temp<20:
            console.log("non ci sono più le mezze stagioni");
            break;
        case temp<30:
            console.log("mi dia una peroni sudata");
            break;
        case temp>=30:
            console.log("lu mare, lu sole, lu ientu");
            break
    }
   
        
