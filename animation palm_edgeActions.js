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
      
      
      

            



      

      

      

      

      

      

            Symbol.bindElementAction(compId, symbolName, "${health_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play("health");
         
         EC.loadComposition("touch-real health/real health.html", sym.getSymbol("symbol_health"));
         
         
         EC.loadComposition("touch-real education/real education.html", sym.getSymbol("symbol_edu"));
         
         EC.loadComposition("touch-reach house/real house.html", sym.getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getSymbol("symbol_entertainment"));
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getSymbol("symbol_industry"));
         

      });
         //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${education_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("education");
         
         EC.loadComposition("touch-real education/real education.html", sym.getSymbol("symbol_edu"));
         
         
         EC.loadComposition("touch-reach house/real house.html", sym.getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getSymbol("symbol_entertainment"));
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getSymbol("symbol_health"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${industry_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("industry");
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getSymbol("symbol_industry"));
         
         
         EC.loadComposition("touch-real health/real health.html", sym.getSymbol("symbol_health"));
         
         EC.loadComposition("touch-real education/real education.html", sym.getSymbol("symbol_edu"));
         
         EC.loadComposition("touch-reach house/real house.html", sym.getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getSymbol("symbol_entertainment"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${entertainment_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("entertainment");
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getSymbol("symbol_entertainment"));
         
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getSymbol("symbol_health"));
         
         EC.loadComposition("touch-real education/real education.html", sym.getSymbol("symbol_edu"));
         EC.loadComposition("touch-reach house/real house.html", sym.getSymbol("symbol_house"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${house_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("house");
         
         EC.loadComposition("touch-reach house/real house.html", sym.getSymbol("symbol_house"));
         
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getSymbol("symbol_entertainment"));
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getSymbol("symbol_health"));
         
         EC.loadComposition("touch-real education/real education.html", sym.getSymbol("symbol_edu"));
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${home_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         //sym.play("home");
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("home");
         sym.getSymbol("big_palm_move2").play("hand wave");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20768, function(sym, e) {
         // insert code here
         
         sym.stop();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${learn_more_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("tram_learn").play("tram show");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sound_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         var audio = sym.$("bg_music") [0];
         if (audio.paused) {
             audio.play();
         } else {
              audio.pause();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'instruction_before_home'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3905, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${start_button}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("instruction before home end");
         
         sym.getComposition().getStage().play("start close");
         
         
         sym.getComposition().getStage().getSymbol("big_palm_move2").play("palm show");

      });
      //Edge binding end

   })("instruction_before_home");
   //Edge symbol end:'instruction_before_home'

   //=========================================================
   
   //Edge symbol: 'symbol_health'
   (function(symbolName) {   
   
   })("symbol_health");
   //Edge symbol end:'symbol_health'

   //=========================================================
   
   //Edge symbol: 'symbol_health_1'
   (function(symbolName) {   
   
   })("symbol_edu");
   //Edge symbol end:'symbol_edu'

   //=========================================================
   
   //Edge symbol: 'symbol_edu_1'
   (function(symbolName) {   
   
   })("symbol_house");
   //Edge symbol end:'symbol_house'

   //=========================================================
   
   //Edge symbol: 'symbol_edu_1'
   (function(symbolName) {   
   
   })("symbol_entertainment");
   //Edge symbol end:'symbol_entertainment'

   //=========================================================
   
   //Edge symbol: 'symbol_edu_1'
   (function(symbolName) {   
   
   })("symbol_industry");
   //Edge symbol end:'symbol_industry'

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
   
   //Edge symbol: 'student_eye_blink'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2905, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("blink loop");

      });
      //Edge binding end

   })("student_eye_blink");
   //Edge symbol end:'student_eye_blink'

   //=========================================================
   
   //Edge symbol: 'worker_eye_close'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("close loop");

      });
      //Edge binding end

   })("worker_eye_close");
   //Edge symbol end:'worker_eye_close'

   //=========================================================
   
   //Edge symbol: 'player_one_blink'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3117, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("one blink loop");

      });
      //Edge binding end

   })("player_one_blink");
   //Edge symbol end:'player_one_blink'

   //=========================================================
   
   //Edge symbol: 'housewife_tongue_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tongue loop");

      });
      //Edge binding end

   })("housewife_tongue_move");
   //Edge symbol end:'housewife_tongue_move'

   //=========================================================
   
   //Edge symbol: 'big_palm_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("hand wave");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${doctor_eyebrow_move}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getComposition().getStage().play("health");
         
         EC.loadComposition("touch-real health/real health.html", sym.getComposition().getStage().getSymbol("symbol_health"));
         
         
         EC.loadComposition("touch-reach house/real house.html", sym.getComposition().getStage().getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getComposition().getStage().getSymbol("symbol_entertainment"));
         
         
         EC.loadComposition("touch-real education/real education.html", sym.getComposition().getStage().getSymbol("symbol_edu"));
         
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getComposition().getStage().getSymbol("symbol_industry"));

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${worker_eye_close_move}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().play("industry");
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getComposition().getStage().getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getComposition().getStage().getSymbol("symbol_health"));
         
         EC.loadComposition("touch-reach house/real house.html", sym.getComposition().getStage().getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getComposition().getStage().getSymbol("symbol_entertainment"));
         
         
         EC.loadComposition("touch-real education/real education.html", sym.getComposition().getStage().getSymbol("symbol_edu"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${student_eye_blink_move}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().play("education");
         
         EC.loadComposition("touch-real education/real education.html", sym.getComposition().getStage().getSymbol("symbol_edu"));
         
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getComposition().getStage().getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getComposition().getStage().getSymbol("symbol_health"));
         EC.loadComposition("touch-reach house/real house.html", sym.getComposition().getStage().getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getComposition().getStage().getSymbol("symbol_entertainment"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${player_one_blink_move}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().play("entertainment");
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getComposition().getStage().getSymbol("symbol_entertainment"));
         
         
         EC.loadComposition("touch-real education/real education.html", sym.getComposition().getStage().getSymbol("symbol_edu"));
         
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getComposition().getStage().getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getComposition().getStage().getSymbol("symbol_health"));
         EC.loadComposition("touch-reach house/real house.html", sym.getComposition().getStage().getSymbol("symbol_house"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${housewife_tongue_move}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().play("house");
         
         EC.loadComposition("touch-reach house/real house.html", sym.getComposition().getStage().getSymbol("symbol_house"));
         
         EC.loadComposition("touch-reach livingroom/real livingroom.html", sym.getComposition().getStage().getSymbol("symbol_entertainment"));
         
         
         EC.loadComposition("touch-real education/real education.html", sym.getComposition().getStage().getSymbol("symbol_edu"));
         
         
         EC.loadComposition("touch-real factory/real factory.html", sym.getComposition().getStage().getSymbol("symbol_industry"));
         
         EC.loadComposition("touch-real health/real health.html", sym.getComposition().getStage().getSymbol("symbol_health"));

      });
      //Edge binding end

   })("big_palm_move");
   //Edge symbol end:'big_palm_move'

   //=========================================================
   
   //Edge symbol: 'tram_learn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tram_go_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("tram off");
         

      });
      //Edge binding end

   })("tram_learn");
   //Edge symbol end:'tram_learn'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-56593759");