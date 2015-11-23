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

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${bio_eye2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("bio_eye2").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("eye_shape2").droppable ({
              accept: sym.$("bio_eye2"),
              drop: function () {
                 sym.getSymbol("eye_details").play();
                 sym.getSymbol("eye_details").play("eye details play");
                 sym.getSymbol("eye_details").getSymbol("EYE_MOVE").play("flip start");
         
                 sym.setVariable("aDone", "a");
                 var aDone = sym.getVariable("aDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("bio_eye2"),
              drop: function () {
                 sym.$("bio_eye2").animate( {"left":"401px", "top":"254px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${nucleus2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("nucleus2").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("nucleur_shape5").droppable ({
              accept: sym.$("nucleus2"),
              drop: function () {
                 sym.getSymbol("nucleus_details2").play();
                 sym.getSymbol("nucleus_details2").play("nucleus details play");
                 sym.getSymbol("nucleus_details2").getSymbol("EAR_MOVE").play("flip start");
         
                 sym.setVariable("bDone", "b");
                 var bDone = sym.getVariable("bDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("nucleus2"),
              drop: function () {
                 sym.$("nucleus2").animate( {"left":"816px", "top":"343px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11991, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${council_house}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("council_house").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("council_house_shape2").droppable ({
              accept: sym.$("council_house"),
              drop: function () {
                 sym.getSymbol("council_house_details").play();
                 sym.getSymbol("council_house_details").play("council details play");
                 
         
                 sym.setVariable("cDone", "c");
                 var cDone = sym.getVariable("cDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("council_house"),
              drop: function () {
                 sym.$("council_house").animate( {"left":"544px", "top":"318px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8351, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${topographer3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("topographer3").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("topography_shape2").droppable ({
              accept: sym.$("topographer3"),
              drop: function () {
                 sym.getSymbol("topography_details").play();
                 sym.getSymbol("topography_details").play("topo details play");
                 sym.getSymbol("topography_details").getSymbol("TOPO_MOVE").play("flip start");
         
                 sym.setVariable("dDone", "d");
                 var cDone = sym.getVariable("dDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("topographer3"),
              drop: function () {
                 sym.$("topographer3").animate( {"left":"1285px", "top":"316px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${product_fifth}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("product_fifth").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("product_fifth_shape3").droppable ({
              accept: sym.$("product_fifth"),
              drop: function () {
                 sym.getSymbol("product_fifth_details").play();
                 sym.getSymbol("product_fifth_details").play("product5 details play");
                 //sym.getSymbol("topography_details").getSymbol("TOPO_MOVE").play("flip start");
         
                 sym.setVariable("eDone", "e");
                 var eDone = sym.getVariable("eDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("product_fifth"),
              drop: function () {
                 sym.$("product_fifth").animate( {"left":"1196px", "top":"406px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${smartbox_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("smartbox_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("smartbox_shape").droppable ({
              accept: sym.$("smartbox_drag"),
              drop: function () {
                 sym.getSymbol("smartbox_details").play();
                 sym.getSymbol("smartbox_details").play("smartbox details play");
                 sym.getSymbol("smartbox_details").getSymbol("SMARTBOX_MOVE").play("flip start");
         
                 sym.setVariable("fDone", "f");
                 var fDone = sym.getVariable("fDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("smartbox_drag"),
              drop: function () {
                 sym.$("smartbox_drag").animate( {"left":"744px", "top":"576px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${polilight_drag}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("polilight_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("polilight_shape3").droppable ({
              accept: sym.$("polilight_drag"),
              drop: function () {
                 sym.getSymbol("polilight_details").play();
                 sym.getSymbol("polilight_details").play("polilight details play");
         
         
                 sym.setVariable("gDone", "g");
                 var gDone = sym.getVariable("gDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("polilight_drag"),
              drop: function () {
                 sym.$("polilight_drag").animate( {"left":"610px", "top":"490px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${compumedics_drag}", "mouseover", function(sym, e) {
         sym.$("compumedics_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("compumetics_shape2").droppable ({
              accept: sym.$("compumedics_drag"),
              drop: function () {
                 sym.getSymbol("compumetics_details").play();
                 sym.getSymbol("compumetics_details").play("compumetics details play");
         
         
                 sym.setVariable("hDone", "h");
                 var hDone = sym.getVariable("hDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("compumedics_drag"),
              drop: function () {
                 sym.$("compumedics_drag").animate( {"left":"531px", "top":"163px"}, "slow" );   
              }
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${doctor_eyebrow_move}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("Instruction2").show();
         sym.getSymbol("Instruction2").playReverse("one");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bio_eye2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("bio_eye2").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("eye_shape2").droppable ({
              accept: sym.$("bio_eye2"),
              drop: function () {
                 sym.getSymbol("eye_details").play();
                 sym.getSymbol("eye_details").play("eye details play");
                 sym.getSymbol("eye_details").getSymbol("EYE_MOVE").play("flip start");
         
                 sym.setVariable("aDone", "a");
                 var aDone = sym.getVariable("aDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("bio_eye2"),
              drop: function () {
                 sym.$("bio_eye2").animate( {"left":"401px", "top":"254px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${nucleus2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("nucleus2").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("nucleur_shape5").droppable ({
              accept: sym.$("nucleus2"),
              drop: function () {
                 sym.getSymbol("nucleus_details2").play();
                 sym.getSymbol("nucleus_details2").play("nucleus details play");
                 sym.getSymbol("nucleus_details2").getSymbol("EAR_MOVE").play("flip start");
         
                 sym.setVariable("bDone", "b");
                 var bDone = sym.getVariable("bDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("nucleus2"),
              drop: function () {
                 sym.$("nucleus2").animate( {"left":"816px", "top":"343px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${council_house}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("council_house").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("council_house_shape2").droppable ({
              accept: sym.$("council_house"),
              drop: function () {
                 sym.getSymbol("council_house_details").play();
                 sym.getSymbol("council_house_details").play("council details play");
         
         
                 sym.setVariable("cDone", "c");
                 var cDone = sym.getVariable("cDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("council_house"),
              drop: function () {
                 sym.$("council_house").animate( {"left":"544px", "top":"318px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${topographer3}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("topographer3").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("topography_shape2").droppable ({
              accept: sym.$("topographer3"),
              drop: function () {
                 sym.getSymbol("topography_details").play();
                 sym.getSymbol("topography_details").play("topo details play");
                 sym.getSymbol("topography_details").getSymbol("TOPO_MOVE").play("flip start");
         
                 sym.setVariable("dDone", "d");
                 var cDone = sym.getVariable("dDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("topographer3"),
              drop: function () {
                 sym.$("topographer3").animate( {"left":"1285px", "top":"316px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${product_fifth}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("product_fifth").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("product_fifth_shape3").droppable ({
              accept: sym.$("product_fifth"),
              drop: function () {
                 sym.getSymbol("product_fifth_details").play();
                 sym.getSymbol("product_fifth_details").play("product5 details play");
                 //sym.getSymbol("topography_details").getSymbol("TOPO_MOVE").play("flip start");
         
                 sym.setVariable("eDone", "e");
                 var eDone = sym.getVariable("eDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("product_fifth"),
              drop: function () {
                 sym.$("product_fifth").animate( {"left":"1196px", "top":"406px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${smartbox_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("smartbox_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("smartbox_shape").droppable ({
              accept: sym.$("smartbox_drag"),
              drop: function () {
                 sym.getSymbol("smartbox_details").play();
                 sym.getSymbol("smartbox_details").play("smartbox details play");
                 sym.getSymbol("smartbox_details").getSymbol("SMARTBOX_MOVE").play("flip start");
         
                 sym.setVariable("fDone", "f");
                 var fDone = sym.getVariable("fDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("smartbox_drag"),
              drop: function () {
                 sym.$("smartbox_drag").animate( {"left":"744px", "top":"576px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${polilight_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("polilight_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("polilight_shape3").droppable ({
              accept: sym.$("polilight_drag"),
              drop: function () {
                 sym.getSymbol("polilight_details").play();
                 sym.getSymbol("polilight_details").play("polilight details play");
         
         
                 sym.setVariable("gDone", "g");
                 var gDone = sym.getVariable("gDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("polilight_drag"),
              drop: function () {
                 sym.$("polilight_drag").animate( {"left":"610px", "top":"490px"}, "slow" );   
              }
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${compumedics_drag}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.$("compumedics_drag").draggable( {opacity: 0.35, revert: "invalid" } );
         
         sym.$("compumetics_shape2").droppable ({
              accept: sym.$("compumedics_drag"),
              drop: function () {
                 sym.getSymbol("compumetics_details").play();
                 sym.getSymbol("compumetics_details").play("compumetics details play");
         
         
                 sym.setVariable("hDone", "h");
                 var hDone = sym.getVariable("hDone");
              }
         });
         
         sym.$("origPosition").droppable ({
              accept: sym.$("compumedics_drag"),
              drop: function () {
                 sym.$("compumedics_drag").animate( {"left":"531px", "top":"163px"}, "slow" );   
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

      Symbol.bindElementAction(compId, symbolName, "${ok_btn_revise}", "click", function(sym, e) {
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
         
         sym.play("eye details end");
         
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17682068");