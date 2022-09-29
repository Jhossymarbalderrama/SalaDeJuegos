
export class Cartas{

    mazoCartas: any ;

    // getCartas(){
    //     this.mazoCartas = [
    //         {
    //         "cards": [
    //                 {
    //                     "code": "0C",
    //                     "image": "../../../../../assets/img/juegos/cards/0C.png",          
    //                     "value": 10
    //                 },
    //                 {
    //                     "code": "0D",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 10
    //                 },
    //                 {
    //                     "code": "0H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 10
    //                 },
    //                 {
    //                     "code": "0S",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 10
    //                 },


                    
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 },
    //                 {
    //                     "code": "6H",
    //                     "image": "https://deckofcardsapi.com/static/img/6H.png",          
    //                     "value": 6
    //                 }
    //         ]
    //         }
    //     ]
    // }    
}