/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${home_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play("home");

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         // if (jQuery) {
         //    alert ("loaded");
         //    }
         
         //yepnope({nope:['jquery-ui-1.10.4.min.js'], complete: init});
         
         //function init(){
         
         //     sym.$('ellipse1').draggable();
         //}
         
         // Hide an element 
         sym.$("give-me-five-page").hide();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3406, function(sym, e) {
         // insert code here
         
         
         sym.stop();
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11991, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8351, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${tram_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("tram_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("tram_shape").droppable ({
              accept: sym.$("tram_drag"),
              drop: function () {
                 sym.getSymbol("eye_details").play();
                 sym.getSymbol("eye_details").play("seat details play");
              
         
                 sym.setVariable("aDone", "a");
                 var aDone = sym.getVariable("aDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("tram_drag"),
              drop: function () {
                 sym.$("tram_drag").animate( {"left":"465px", "top":"581px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${worker_eye_close_move}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("Instruction2").show();
         sym.getSymbol("Instruction2").playReverse("one");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${madein_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("madein_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("madein_shape").droppable ({
              accept: sym.$("madein_drag"),
              drop: function () {
                 sym.getSymbol("nucleus_details2").play();
                 sym.getSymbol("nucleus_details2").play("nucleus details play");
                 sym.getSymbol("nucleus_details2").getSymbol("MADEIN_MOVE").play("flip start");
         
                 sym.setVariable("bDone", "b");
                 var bDone = sym.getVariable("bDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("madein_drag"),
              drop: function () {
                 sym.$("madein_drag").animate( {"left":"840px", "top":"462px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${payment_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("payment_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("payment_shape").droppable ({
              accept: sym.$("payment_drag"),
              drop: function () {
                 sym.getSymbol("council_house_details").play();
                 sym.getSymbol("council_house_details").play("council details play");
         
         
                 sym.setVariable("cDone", "c");
                 var cDone = sym.getVariable("cDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("payment_drag"),
              drop: function () {
                 sym.$("payment_drag").animate( {"left":"962px", "top":"530px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${coin_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("coin_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("coin_shape").droppable ({
              accept: sym.$("coin_drag"),
              drop: function () {
                 sym.getSymbol("topography_details").play();
                 sym.getSymbol("topography_details").play("topo details play");
                 sym.getSymbol("topography_details").getSymbol("TOPO_MOVE").play("flip start");
         
                 sym.setVariable("dDone", "d");
                 var dDone = sym.getVariable("dDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("coin_drag"),
              drop: function () {
                 sym.$("coin_drag").animate( {"left":"823px", "top":"525px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bicycle_light_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("bicycle_light_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("bicycle_light_shape").droppable ({
              accept: sym.$("bicycle_light_drag"),
              drop: function () {
                 sym.getSymbol("product_fifth_details").play();
                 sym.getSymbol("product_fifth_details").play("product5 details play");
                 sym.getSymbol("product_fifth_details").getSymbol("BAG_MOVE").play("flip start");
         
                 sym.setVariable("eDone", "e");
                 var eDone = sym.getVariable("eDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("bicycle_light_drag"),
              drop: function () {
                 sym.$("bicycle_light_drag").animate( {"left":"1180px", "top":"165px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${light_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("light_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("light_shape").droppable ({
              accept: sym.$("light_drag"),
              drop: function () {
                 sym.getSymbol("smartbox_details").play();
                 sym.getSymbol("smartbox_details").play("smartbox details play");
         
                 sym.setVariable("fDone", "f");
                 var fDone = sym.getVariable("fDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("light_drag"),
              drop: function () {
                 sym.$("light_drag").animate( {"left":"624px", "top":"205px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scope_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("scope_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("scope_shape").droppable ({
              accept: sym.$("scope_drag"),
              drop: function () {
                 sym.getSymbol("polilight_details").play();
                 sym.getSymbol("polilight_details").play("polilight details play");
         
                 sym.setVariable("gDone", "g");
                 var gDone = sym.getVariable("gDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("scope_drag"),
              drop: function () {
                 sym.$("scope_drag").animate( {"left":"1056px", "top":"490px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blackbox_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("blackbox_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("blackbox_shape2").droppable ({
              accept: sym.$("blackbox_drag"),
              drop: function () {
                 sym.getSymbol("compumetics_details").play();
                 sym.getSymbol("compumetics_details").play("compumetics details play");
                 
         
                 sym.setVariable("hDone", "h");
                 var hDone = sym.getVariable("hDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("blackbox_drag"),
              drop: function () {
                 sym.$("blackbox_drag").animate( {"left":"1274px", "top":"413px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blackbox_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("blackbox_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("blackbox_shape2").droppable ({
              accept: sym.$("blackbox_drag"),
              drop: function () {
                 sym.getSymbol("compumetics_details").play();
                 sym.getSymbol("compumetics_details").play("compumetics details play");
         
         
                 sym.setVariable("hDone", "h");
                 var hDone = sym.getVariable("hDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("blackbox_drag"),
              drop: function () {
                 sym.$("blackbox_drag").animate( {"left":"1274px", "top":"413px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scope_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("scope_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("scope_shape").droppable ({
              accept: sym.$("scope_drag"),
              drop: function () {
                 sym.getSymbol("polilight_details").play();
                 sym.getSymbol("polilight_details").play("polilight details play");
         
                 sym.setVariable("gDone", "g");
                 var gDone = sym.getVariable("gDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("scope_drag"),
              drop: function () {
                 sym.$("scope_drag").animate( {"left":"1056px", "top":"490px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${light_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("light_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("light_shape").droppable ({
              accept: sym.$("light_drag"),
              drop: function () {
                 sym.getSymbol("smartbox_details").play();
                 sym.getSymbol("smartbox_details").play("smartbox details play");
         
                 sym.setVariable("fDone", "f");
                 var fDone = sym.getVariable("fDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("light_drag"),
              drop: function () {
                 sym.$("light_drag").animate( {"left":"624px", "top":"205px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bicycle_light_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("bicycle_light_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("bicycle_light_shape").droppable ({
              accept: sym.$("bicycle_light_drag"),
              drop: function () {
                 sym.getSymbol("product_fifth_details").play();
                 sym.getSymbol("product_fifth_details").play("product5 details play");
                 sym.getSymbol("product_fifth_details").getSymbol("BAG_MOVE").play("flip start");
         
                 sym.setVariable("eDone", "e");
                 var eDone = sym.getVariable("eDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("bicycle_light_drag"),
              drop: function () {
                 sym.$("bicycle_light_drag").animate( {"left":"1180px", "top":"165px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${coin_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("coin_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("coin_shape").droppable ({
              accept: sym.$("coin_drag"),
              drop: function () {
                 sym.getSymbol("topography_details").play();
                 sym.getSymbol("topography_details").play("topo details play");
                 sym.getSymbol("topography_details").getSymbol("TOPO_MOVE").play("flip start");
         
                 sym.setVariable("dDone", "d");
                 var dDone = sym.getVariable("dDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("coin_drag"),
              drop: function () {
                 sym.$("coin_drag").animate( {"left":"823px", "top":"525px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${payment_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("payment_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("payment_shape").droppable ({
              accept: sym.$("payment_drag"),
              drop: function () {
                 sym.getSymbol("council_house_details").play();
                 sym.getSymbol("council_house_details").play("council details play");
         
         
                 sym.setVariable("cDone", "c");
                 var cDone = sym.getVariable("cDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("payment_drag"),
              drop: function () {
                 sym.$("payment_drag").animate( {"left":"962px", "top":"530px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${madein_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("madein_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("madein_shape").droppable ({
              accept: sym.$("madein_drag"),
              drop: function () {
                 sym.getSymbol("nucleus_details2").play();
                 sym.getSymbol("nucleus_details2").play("nucleus details play");
                 sym.getSymbol("nucleus_details2").getSymbol("MADEIN_MOVE").play("flip start");
         
                 sym.setVariable("bDone", "b");
                 var bDone = sym.getVariable("bDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("madein_drag"),
              drop: function () {
                 sym.$("madein_drag").animate( {"left":"840px", "top":"462px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tram_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // insert code to be run when the mouse hovers over the object
         sym.$("tram_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("tram_shape").droppable ({
              accept: sym.$("tram_drag"),
              drop: function () {
                 sym.getSymbol("eye_details").play();
                 sym.getSymbol("eye_details").play("seat details play");
         
         
                 sym.setVariable("aDone", "a");
                 var aDone = sym.getVariable("aDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("tram_drag"),
              drop: function () {
                 sym.$("tram_drag").animate( {"left":"465px", "top":"581px"}, "slow" );   
              }
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Instruction'
   (function(symbolName) {   
   
            



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ok_btn_green}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("disappear");
         sym.getComposition().getStage().play("one");

      });
      //Edge binding end

   })("Instruction");
   //Edge symbol end:'Instruction'

   //=========================================================
   
   //Edge symbol: 'ellipse1'
   (function(symbolName) {   
   
   })("ellipse1");
   //Edge symbol end:'ellipse1'

   //=========================================================
   
   //Edge symbol: 'ellipse2'
   (function(symbolName) {   
   
   })("ellipse2");
   //Edge symbol end:'ellipse2'

   //=========================================================
   
   //Edge symbol: 'bio_eye'
   (function(symbolName) {   
   
   })("bio_eye");
   //Edge symbol end:'bio_eye'

   //=========================================================
   
   //Edge symbol: 'eye_shape'
   (function(symbolName) {   
   
   })("eye_shape");
   //Edge symbol end:'eye_shape'

   //=========================================================
   
   //Edge symbol: 'eye_details'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("seat details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h") {
         	sym.getComposition().getStage().play("giveme5");
         
         	//alert("haha");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

   })("eye_details");
   //Edge symbol end:'eye_details'

   //=========================================================
   
   //Edge symbol: 'nucleus'
   (function(symbolName) {   
   
   })("nucleus");
   //Edge symbol end:'nucleus'

   //=========================================================
   
   //Edge symbol: 'nucleur_shape'
   (function(symbolName) {   
   
   })("nucleur_shape");
   //Edge symbol end:'nucleur_shape'

   //=========================================================
   
   //Edge symbol: 'eye_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("nucleus details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h") {
         	//sym.getComposition().getStage().play("giveme5");
         	sym.getComposition().getStage().play("giveme5");
         	//alert("haha");
         }

      });
         //Edge binding end

      })("nucleus_details");
   //Edge symbol end:'nucleus_details'

   //=========================================================
   
   //Edge symbol: 'Ellipse3'
   (function(symbolName) {   
   
   })("Ellipse3");
   //Edge symbol end:'Ellipse3'

   //=========================================================
   
   //Edge symbol: 'Ellipse4'
   (function(symbolName) {   
   
   })("Ellipse4");
   //Edge symbol end:'Ellipse4'

   //=========================================================
   
   //Edge symbol: 'Ellipse5'
   (function(symbolName) {   
   
   })("Ellipse5");
   //Edge symbol end:'Ellipse5'

   //=========================================================
   
   //Edge symbol: 'Ellipse6'
   (function(symbolName) {   
   
   })("Ellipse6");
   //Edge symbol end:'Ellipse6'

   //=========================================================
   
   //Edge symbol: 'Ellipse7'
   (function(symbolName) {   
   
   })("Ellipse7");
   //Edge symbol end:'Ellipse7'

   //=========================================================
   
   //Edge symbol: 'Ellipse8'
   (function(symbolName) {   
   
   })("Ellipse8");
   //Edge symbol end:'Ellipse8'

   //=========================================================
   
   //Edge symbol: 'big_palm'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3917, function(sym, e) {
         // insert code here
         sym.play("down");

      });
      //Edge binding end

   })("big_palm");
   //Edge symbol end:'big_palm'

   //=========================================================
   
   //Edge symbol: 'red_star'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("red_star");
   //Edge symbol end:'red_star'

   //=========================================================
   
   //Edge symbol: 'red_star_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("red_star_2");
   //Edge symbol end:'red_star_2'

   //=========================================================
   
   //Edge symbol: 'red_star_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("red_star_3");
   //Edge symbol end:'red_star_3'

   //=========================================================
   
   //Edge symbol: 'yellow_star'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("yellow_star");
   //Edge symbol end:'yellow_star'

   //=========================================================
   
   //Edge symbol: 'yellow_star_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("yellow_star_second");
   //Edge symbol end:'yellow_star_second'

   //=========================================================
   
   //Edge symbol: 'yellow_star_second_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("yellow_star_third");
   //Edge symbol end:'yellow_star_third'

   //=========================================================
   
   //Edge symbol: 'yellow_firework'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4170, function(sym, e) {
         // insert code here
         sym.play("firework");

      });
      //Edge binding end

   })("yellow_firework");
   //Edge symbol end:'yellow_firework'

   //=========================================================
   
   //Edge symbol: 'yellow_firework_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play("firework");

      });
      //Edge binding end

      })("yellow_firework_second");
   //Edge symbol end:'yellow_firework_second'

   //=========================================================
   
   //Edge symbol: 'orange_firework'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // insert code here
         sym.play("firework2");

      });
      //Edge binding end

   })("orange_firework");
   //Edge symbol end:'orange_firework'

   //=========================================================
   
   //Edge symbol: 'orange_firework_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play("firework2");

      });
      //Edge binding end

   })("orange_firework_second");
   //Edge symbol end:'orange_firework_second'

   //=========================================================
   
   //Edge symbol: 'yellow_firework_second_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         sym.play("firework");

      });
      //Edge binding end

      })("yellow_firework_third");
   //Edge symbol end:'yellow_firework_third'

   //=========================================================
   
   //Edge symbol: 'orange_firework_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play("firework2");

      });
      //Edge binding end

   })("orange_firework_third");
   //Edge symbol end:'orange_firework_third'

   //=========================================================
   
   //Edge symbol: 'give-me-five-page'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${big_palm2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getComposition().getStage().play("close giveme5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("give-me-five-page");
   //Edge symbol end:'give-me-five-page'

   //=========================================================
   
   //Edge symbol: 'free_wifi_page'
   (function(symbolName) {   
   
      

   })("free_wifi_page");
   //Edge symbol end:'free_wifi_page'

   //=========================================================
   
   //Edge symbol: 'council_house'
   (function(symbolName) {   
   
   })("council_house");
   //Edge symbol end:'council_house'

   //=========================================================
   
   //Edge symbol: 'council_house_shape'
   (function(symbolName) {   
   
   })("council_house_shape");
   //Edge symbol end:'council_house_shape'

   //=========================================================
   
   //Edge symbol: 'nucleus_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("council details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h" ) {
         	//sym.getComposition().getStage().play("giveme5");
         	sym.getComposition().getStage().play("giveme5");
         	//alert("haha");
         }

      });
            //Edge binding end

         })("council_house_details");
   //Edge symbol end:'council_house_details'

   //=========================================================
   
   //Edge symbol: 'topographer'
   (function(symbolName) {   
   
   })("topographer");
   //Edge symbol end:'topographer'

   //=========================================================
   
   //Edge symbol: 'topography_shape'
   (function(symbolName) {   
   
   })("topography_shape");
   //Edge symbol end:'topography_shape'

   //=========================================================
   
   //Edge symbol: 'EYE_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
      //Edge binding end

   })("EYE_MOVE");
   //Edge symbol end:'EYE_MOVE'

   //=========================================================
   
   //Edge symbol: 'EAR_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
      //Edge binding end

   })("EAR_MOVE");
   //Edge symbol end:'EAR_MOVE'

   //=========================================================
   
   //Edge symbol: 'council_house_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         
         
         sym.play("topo details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e"  && fDone == "f" && gDone == "g" && hDone == "h") {
         	//sym.getComposition().getStage().play("giveme5");
         	sym.getComposition().getStage().play("giveme5");
         	//alert("haha");
         }

      });
               //Edge binding end

            })("topography_details");
   //Edge symbol end:'topography_details'

   //=========================================================
   
   //Edge symbol: 'TOPO_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
      //Edge binding end

   })("TOPO_MOVE");
   //Edge symbol end:'TOPO_MOVE'

   //=========================================================
   
   //Edge symbol: 'product_fifth'
   (function(symbolName) {   
   
   })("product_fifth");
   //Edge symbol end:'product_fifth'

   //=========================================================
   
   //Edge symbol: 'product_fifth_shape'
   (function(symbolName) {   
   
   })("product_fifth_shape");
   //Edge symbol end:'product_fifth_shape'

   //=========================================================
   
   //Edge symbol: 'topography_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("product5 details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h") {
         	//sym.getComposition().getStage().play("giveme5");
         	sym.getComposition().getStage().play("giveme5");
         	//alert("haha");
         }

      });
                  //Edge binding end

               })("product_fifth_details");
   //Edge symbol end:'product_fifth_details'

   //=========================================================
   
   //Edge symbol: 'smartbox_drag'
   (function(symbolName) {   
   
   })("smartbox_drag");
   //Edge symbol end:'smartbox_drag'

   //=========================================================
   
   //Edge symbol: 'smartbox_shape'
   (function(symbolName) {   
   
   })("smartbox_shape");
   //Edge symbol end:'smartbox_shape'

   //=========================================================
   
   //Edge symbol: 'eye_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("smartbox details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h") {
         	sym.getComposition().getStage().play("giveme5");
         
         	//alert("haha");
         }

      });
         //Edge binding end

      })("smartbox_details");
   //Edge symbol end:'smartbox_details'

   //=========================================================
   
   //Edge symbol: 'EYE_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
         //Edge binding end

      })("SMARTBOX_MOVE");
   //Edge symbol end:'SMARTBOX_MOVE'

   //=========================================================
   
   //Edge symbol: 'polilight_drag'
   (function(symbolName) {   
   
   })("polilight_drag");
   //Edge symbol end:'polilight_drag'

   //=========================================================
   
   //Edge symbol: 'polilight_shape'
   (function(symbolName) {   
   
   })("polilight_shape");
   //Edge symbol end:'polilight_shape'

   //=========================================================
   
   //Edge symbol: 'council_house_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("polilight details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h" ) {
         	//sym.getComposition().getStage().play("giveme5");
         	sym.getComposition().getStage().play("giveme5");
         	//alert("haha");
         }

      });
               //Edge binding end

            })("polilight_details");
   //Edge symbol end:'polilight_details'

   //=========================================================
   
   //Edge symbol: 'polilight_drag_1'
   (function(symbolName) {   
   
   })("compumedics_drag");
   //Edge symbol end:'compumedics_drag'

   //=========================================================
   
   //Edge symbol: 'compumetics_shape'
   (function(symbolName) {   
   
   })("compumetics_shape");
   //Edge symbol end:'compumetics_shape'

   //=========================================================
   
   //Edge symbol: 'polilight_details_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1859, function(sym, e) {
         // insert code here
         sym.stop();

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tap_to_start_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         var aDone = sym.getComposition().getStage().getVariable("aDone");
         var bDone = sym.getComposition().getStage().getVariable("bDone");
         var cDone = sym.getComposition().getStage().getVariable("cDone");
         var dDone = sym.getComposition().getStage().getVariable("dDone");
         var eDone = sym.getComposition().getStage().getVariable("eDone");
         var fDone = sym.getComposition().getStage().getVariable("fDone");
         var gDone = sym.getComposition().getStage().getVariable("gDone");
         var hDone = sym.getComposition().getStage().getVariable("hDone");
         
         sym.play("compumetics details end");
         
         if (aDone == "a" && bDone == "b" && cDone == "c" && dDone == "d" && eDone == "e" && fDone == "f" && gDone == "g" && hDone == "h") {
         	//sym.getComposition().getStage().play("giveme5");
         	sym.getComposition().getStage().play("giveme5");
         	//alert("haha");
         }

      });
               //Edge binding end

            })("compumetics_details");
   //Edge symbol end:'compumetics_details'

   //=========================================================
   
   //Edge symbol: 'doctor_eyebrow_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3369, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("brow loop");

      });
      //Edge binding end

   })("doctor_eyebrow_move");
   //Edge symbol end:'doctor_eyebrow_move'

   //=========================================================
   
   //Edge symbol: 'seat_drag'
   (function(symbolName) {   
   
   })("seat_drag");
   //Edge symbol end:'seat_drag'

   //=========================================================
   
   //Edge symbol: 'seat_shape'
   (function(symbolName) {   
   
   })("seat_shape");
   //Edge symbol end:'seat_shape'

   //=========================================================
   
   //Edge symbol: 'art_processor_drag'
   (function(symbolName) {   
   
   })("art_processor_drag");
   //Edge symbol end:'art_processor_drag'

   //=========================================================
   
   //Edge symbol: 'wheel_drag'
   (function(symbolName) {   
   
   })("wheel_drag");
   //Edge symbol end:'wheel_drag'

   //=========================================================
   
   //Edge symbol: 'bag_drag'
   (function(symbolName) {   
   
   })("bag_drag");
   //Edge symbol end:'bag_drag'

   //=========================================================
   
   //Edge symbol: 'bag_shape'
   (function(symbolName) {   
   
   })("bag_shape");
   //Edge symbol end:'bag_shape'

   //=========================================================
   
   //Edge symbol: 'EYE_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
         //Edge binding end

      })("BAG_MOVE");
   //Edge symbol end:'BAG_MOVE'

   //=========================================================
   
   //Edge symbol: 'red_book_drag'
   (function(symbolName) {   
   
   })("red_book_drag");
   //Edge symbol end:'red_book_drag'

   //=========================================================
   
   //Edge symbol: 'book_shape'
   (function(symbolName) {   
   
   })("book_shape");
   //Edge symbol end:'book_shape'

   //=========================================================
   
   //Edge symbol: 'movement_shape'
   (function(symbolName) {   
   
   })("movement_shape");
   //Edge symbol end:'movement_shape'

   //=========================================================
   
   //Edge symbol: 'movement_drag'
   (function(symbolName) {   
   
   })("movement_drag");
   //Edge symbol end:'movement_drag'

   //=========================================================
   
   //Edge symbol: 'wifi_shape'
   (function(symbolName) {   
   
   })("wifi_shape");
   //Edge symbol end:'wifi_shape'

   //=========================================================
   
   //Edge symbol: 'wifi_drag'
   (function(symbolName) {   
   
   })("wifi_drag");
   //Edge symbol end:'wifi_drag'

   //=========================================================
   
   //Edge symbol: 'WIFI_MOVE'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("wifi loop");

      });
      //Edge binding end

   })("WIFI_MOVE");
   //Edge symbol end:'WIFI_MOVE'

   //=========================================================
   
   //Edge symbol: 'tram_down'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tram go");

      });
      //Edge binding end

   })("tram_down");
   //Edge symbol end:'tram_down'

   //=========================================================
   
   //Edge symbol: 'tram_down_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tram go");

      });
      //Edge binding end

   })("tram_up");
   //Edge symbol end:'tram_up'

   //=========================================================
   
   //Edge symbol: 'WIFI_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("wifi loop");

      });
      //Edge binding end

   })("WIFI_MOVE_with_phone");
   //Edge symbol end:'WIFI_MOVE_with_phone'

   //=========================================================
   
   //Edge symbol: 'hand_move_with_phone'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("hand with phone wave");

      });
      //Edge binding end

   })("hand_move_with_phone");
   //Edge symbol end:'hand_move_with_phone'

   //=========================================================
   
   //Edge symbol: 'WIFI_MOVE_with_phone_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("wifi loop");

      });
      //Edge binding end

   })("WIFI_MOVE_with_phone_later");
   //Edge symbol end:'WIFI_MOVE_with_phone_later'

   //=========================================================
   
   //Edge symbol: 'student_eye_blink'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("blink loop");

      });
      //Edge binding end

   })("student_eye_blink");
   //Edge symbol end:'student_eye_blink'

   //=========================================================
   
   //Edge symbol: 'housewife_tongue_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tongue loop");

      });
      //Edge binding end

   })("housewife_tongue_move");
   //Edge symbol end:'housewife_tongue_move'

   //=========================================================
   
   //Edge symbol: 'chair_drag'
   (function(symbolName) {   
   
   })("chair_drag");
   //Edge symbol end:'chair_drag'

   //=========================================================
   
   //Edge symbol: 'chair_shape'
   (function(symbolName) {   
   
   })("chair_shape");
   //Edge symbol end:'chair_shape'

   //=========================================================
   
   //Edge symbol: 'store_drag'
   (function(symbolName) {   
   
   })("store_drag");
   //Edge symbol end:'store_drag'

   //=========================================================
   
   //Edge symbol: 'store_shape'
   (function(symbolName) {   
   
   })("store_shape");
   //Edge symbol end:'store_shape'

   //=========================================================
   
   //Edge symbol: 'chair_shape_new'
   (function(symbolName) {   
   
   })("chair_shape_new");
   //Edge symbol end:'chair_shape_new'

   //=========================================================
   
   //Edge symbol: 'willow_drag'
   (function(symbolName) {   
   
   })("willow_drag");
   //Edge symbol end:'willow_drag'

   //=========================================================
   
   //Edge symbol: 'willow_shape'
   (function(symbolName) {   
   
   })("willow_shape");
   //Edge symbol end:'willow_shape'

   //=========================================================
   
   //Edge symbol: 'knife_drag'
   (function(symbolName) {   
   
   })("knife_drag");
   //Edge symbol end:'knife_drag'

   //=========================================================
   
   //Edge symbol: 'knife_shape'
   (function(symbolName) {   
   
   })("knife_shape");
   //Edge symbol end:'knife_shape'

   //=========================================================
   
   //Edge symbol: 'powerboard_drag'
   (function(symbolName) {   
   
   })("powerboard_drag");
   //Edge symbol end:'powerboard_drag'

   //=========================================================
   
   //Edge symbol: 'sofa_shape'
   (function(symbolName) {   
   
   })("sofa_shape");
   //Edge symbol end:'sofa_shape'

   //=========================================================
   
   //Edge symbol: 'sofa_drag'
   (function(symbolName) {   
   
   })("sofa_drag");
   //Edge symbol end:'sofa_drag'

   //=========================================================
   
   //Edge symbol: 'powerboard_shape'
   (function(symbolName) {   
   
   })("powerboard_shape");
   //Edge symbol end:'powerboard_shape'

   //=========================================================
   
   //Edge symbol: 'bin_shape'
   (function(symbolName) {   
   
   })("bin_shape");
   //Edge symbol end:'bin_shape'

   //=========================================================
   
   //Edge symbol: 'bin_drag'
   (function(symbolName) {   
   
   })("bin_drag");
   //Edge symbol end:'bin_drag'

   //=========================================================
   
   //Edge symbol: 'BAG_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
            //Edge binding end

         })("BIN_MOVE");
   //Edge symbol end:'BIN_MOVE'

   //=========================================================
   
   //Edge symbol: 'fridge_drag'
   (function(symbolName) {   
   
   })("fridge_drag");
   //Edge symbol end:'fridge_drag'

   //=========================================================
   
   //Edge symbol: 'fridge_shape'
   (function(symbolName) {   
   
   })("fridge_shape");
   //Edge symbol end:'fridge_shape'

   //=========================================================
   
   //Edge symbol: 'BIN_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
            //Edge binding end

         })("FRIDGE_MOVE");
   //Edge symbol end:'FRIDGE_MOVE'

   //=========================================================
   
   //Edge symbol: 'powerboard_drag_new'
   (function(symbolName) {   
   
   })("powerboard_drag_new");
   //Edge symbol end:'powerboard_drag_new'

   //=========================================================
   
   //Edge symbol: 'worker_eye_close'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("close loop");

      });
      //Edge binding end

   })("worker_eye_close");
   //Edge symbol end:'worker_eye_close'

   //=========================================================
   
   //Edge symbol: 'tram_drag'
   (function(symbolName) {   
   
   })("tram_drag");
   //Edge symbol end:'tram_drag'

   //=========================================================
   
   //Edge symbol: 'tram_shape'
   (function(symbolName) {   
   
   })("tram_shape");
   //Edge symbol end:'tram_shape'

   //=========================================================
   
   //Edge symbol: 'madein_shape'
   (function(symbolName) {   
   
   })("madein_shape");
   //Edge symbol end:'madein_shape'

   //=========================================================
   
   //Edge symbol: 'madein_drag'
   (function(symbolName) {   
   
   })("madein_drag");
   //Edge symbol end:'madein_drag'

   //=========================================================
   
   //Edge symbol: 'EYE_MOVE_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("flip loop");

      });
         //Edge binding end

      })("MADEIN_MOVE");
   //Edge symbol end:'MADEIN_MOVE'

   //=========================================================
   
   //Edge symbol: 'payment_shape'
   (function(symbolName) {   
   
   })("payment_shape");
   //Edge symbol end:'payment_shape'

   //=========================================================
   
   //Edge symbol: 'payment_drag'
   (function(symbolName) {   
   
   })("payment_drag");
   //Edge symbol end:'payment_drag'

   //=========================================================
   
   //Edge symbol: 'coin_shape'
   (function(symbolName) {   
   
   })("coin_shape");
   //Edge symbol end:'coin_shape'

   //=========================================================
   
   //Edge symbol: 'coin_drag'
   (function(symbolName) {   
   
   })("coin_drag");
   //Edge symbol end:'coin_drag'

   //=========================================================
   
   //Edge symbol: 'bicycle_light_drag'
   (function(symbolName) {   
   
   })("bicycle_light_drag");
   //Edge symbol end:'bicycle_light_drag'

   //=========================================================
   
   //Edge symbol: 'bicycle_light_shape'
   (function(symbolName) {   
   
   })("bicycle_light_shape");
   //Edge symbol end:'bicycle_light_shape'

   //=========================================================
   
   //Edge symbol: 'light_drag'
   (function(symbolName) {   
   
   })("light_drag");
   //Edge symbol end:'light_drag'

   //=========================================================
   
   //Edge symbol: 'light_shape'
   (function(symbolName) {   
   
   })("light_shape");
   //Edge symbol end:'light_shape'

   //=========================================================
   
   //Edge symbol: 'scope_shape'
   (function(symbolName) {   
   
   })("scope_shape");
   //Edge symbol end:'scope_shape'

   //=========================================================
   
   //Edge symbol: 'scope_drag'
   (function(symbolName) {   
   
   })("scope_drag");
   //Edge symbol end:'scope_drag'

   //=========================================================
   
   //Edge symbol: 'blackbox_shape'
   (function(symbolName) {   
   
   })("blackbox_shape");
   //Edge symbol end:'blackbox_shape'

   //=========================================================
   
   //Edge symbol: 'blackbox_drag'
   (function(symbolName) {   
   
   })("blackbox_drag");
   //Edge symbol end:'blackbox_drag'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17682068");