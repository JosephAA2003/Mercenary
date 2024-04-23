window.onload = function(){
   console.log("Window loaded");
   if (localStorage.getItem('gold') === null) {
   localStorage.setItem("gold","0"); 
   localStorage.setItem("army_size","0"); 
   localStorage.setItem("skill_points","0"); 
   localStorage.setItem("footmen","0"); 
   localStorage.setItem("spearmen","0"); 
   localStorage.setItem("cavalry","0"); 
   localStorage.setItem("archers","0"); 
   localStorage.setItem("xp","0");
   localStorage.setItem("combat_skills","0"); 
   localStorage.setItem("bartering", "0"); 
   localStorage.setItem("commanding_skills","0");  
   localStorage.setItem("battles_won", "0");
   window.location.href = "backstory.html"

   }  
   
}

const mercenaryJS = {  

   

   init: () => {   

      document.addEventListener("DOMContentLoaded", mercenaryJS.preparePage)
   }, 

   preparePage: () => { 

      let page = document.body.id; 
      switch (page){  
         case "index":  
            document.getElementById("gold").innerHTML = "gold: " + localStorage.getItem("gold"); 
            document.getElementById("army_size").innerHTML = "army size: " + localStorage.getItem("army_size"); 
            document.getElementById("skill_points").innerHTML = "skill points: " + localStorage.getItem("skill_points"); 
            document.getElementById("footmen").innerHTML = "footmen: " + localStorage.getItem("footmen"); 
            document.getElementById("spearmen").innerHTML = "spearmen: " + localStorage.getItem("spearmen"); 
            document.getElementById("cavalry").innerHTML = "cavalry: " + localStorage.getItem("cavalry"); 
            document.getElementById("archers").innerHTML = "archers: " + localStorage.getItem("archers"); 
            document.getElementById("xp").innerHTML = "xp: " + localStorage.getItem("xp"); 
            document.getElementById("combat_skills").innerHTML = "combat skills: " + localStorage.getItem("combat_skills");
            document.getElementById("bartering").innerHTML = "bartering: " + localStorage.getItem("bartering"); 
            document.getElementById("commanding_skills").innerHTML = "commanding skills: " + localStorage.getItem("commanding_skills"); 
            document.getElementById("battles_won").innerHTML = "Battles won: " + localStorage.getItem("battles_won") 
            break; 
            
         case "contract_board": 
            
            var INTarmy_size = parseInt(localStorage.getItem("army_size")); 
            enemysize1 = mercenaryJS.ScaleNumbers(INTarmy_size); 
            document.getElementById("enemysize1").innerHTML = "Troop numbers: " + enemysize1;
            enemysize2 = mercenaryJS.ScaleNumbers(INTarmy_size); 
            document.getElementById("enemysize2").innerHTML = "Troop numbers: " + enemysize2; 
            enemysize3 = mercenaryJS.ScaleNumbers(INTarmy_size);  
            document.getElementById("enemysize3").innerHTML = "Troop numbers: " + enemysize3;  

            contract1 = document.getElementById("contract1"); 
            contract1.addEventListener("click", function(){ 
               localStorage.setItem("enemytemp", String(enemysize1)); 
               window.location.href = "battle_prep.html"

            });  

            contract2 = document.getElementById("contract2"); 
            contract2.addEventListener("click", function(){ 
               localStorage.setItem("enemytemp", String(enemysize2)); 
               window.location.href = "battle_prep.html"

            });  

            contract3 = document.getElementById("contract3"); 
            contract3.addEventListener("click", function(){ 
               localStorage.setItem("enemytemp", String(enemysize3)); 
               window.location.href = "battle_prep.html"

            }); 



            
            
           
            
           
         break;
         
         case "backstory": 
            var barter = document.getElementById("barter"); 
            
            barter.addEventListener("click", function(){ 
               mercenaryJS.choosebarter();
            }); 

            var fighter = document.getElementById("fighter"); 
            
            fighter.addEventListener("click", function(){  
               
               mercenaryJS.choosecombat();
            });  

            var commander = document.getElementById("commander");  

            commander.addEventListener("click", function(){  
               
               mercenaryJS.choosecommander();
            }); 

         break; 

         case "skills": 
           
            
            var upgrade_barter = document.getElementById("upgrade_barter"); 

            upgrade_barter.addEventListener("click", function(){ 
            
               mercenaryJS.upgrade_barter();
            }); 

            var upgrade_fighter = document.getElementById("upgrade_combat"); 

            upgrade_fighter.addEventListener("click", function(){ 
            
               mercenaryJS.upgrade_fighter();
            }); 

            var upgrade_commanding = document.getElementById("upgrade_commanding"); 

            upgrade_commanding.addEventListener("click", function(){ 
            
               mercenaryJS.upgrade_commanding();
            });

         break; 

         case "ending": 
            var retire = document.getElementById("retire"); 

            retire.addEventListener("click", function(){ 

               mercenaryJS.retire();
            }) 

            var sieze = document.getElementById("sieze"); 

            sieze.addEventListener("click", function(){ 

               mercenaryJS.sieze();
            });

            var challenge = document.getElementById("challenge"); 

            challenge.addEventListener("click", function(){ 

               mercenaryJS.challenge();
            }); 

         break;  

         case "recruiter":  
           var INTbarter = parseInt(localStorage.getItem("bartering")) 
           cost = 150 - (150*(INTbarter/100))
           document.getElementById("cost1").innerHTML = "Cost: " + cost 
           document.getElementById("cost2").innerHTML = "Cost: " + cost 
           document.getElementById("cost3").innerHTML = "Cost: " + cost 
           document.getElementById("cost4").innerHTML = "Cost: " + cost
            
            var buy_footman = document.getElementById("buy_footman"); 
            
            buy_footman.addEventListener("click", function(){ 
               mercenaryJS.buy_footman();
            }); 

            var buy_archers = document.getElementById("buy_archers"); 

            buy_archers.addEventListener("click", function(){ 
               mercenaryJS.buy_archers();
            });  

            var buy_spearmen = document.getElementById("buy_spearmen"); 

            buy_spearmen.addEventListener("click", function(){ 
               mercenaryJS.buy_spearmen();
            }); 

            var buy_cavalry = document.getElementById("buy_cavalry"); 

            buy_cavalry.addEventListener("click", function(){ 
               mercenaryJS.buy_cavalry();
            }); 

         break; 
         
         case "prep": 

            document.getElementById("enemysize").innerHTML = "Enemy troops: " + localStorage.getItem("enemytemp") 
            document.getElementById("army_size").innerHTML = "Your troops: " + localStorage.getItem("army_size") 
            document.getElementById("commanding_skills").innerHTML = "Commanding skill: " + localStorage.getItem("commanding_skills")
            document.getElementById("combat_skills").innerHTML = "Combat skills: " + localStorage.getItem("combat_skills") 
            win_percent = parseInt(localStorage.getItem("army_size")) - parseInt(localStorage.getItem("enemytemp"))  
            if(win_percent > 95){ 
               win_percent = 95
            }else if(win_percent < 0){ 
               win_percent = 25
            }
            win_percent = win_percent + parseInt(localStorage.getItem("commanding_skills"))  
            if(win_percent > 95){ 
               win_percent = 95
            }
           
            document.getElementById("win_percent").innerHTML = win_percent 
            localStorage.setItem("win_percent", String(win_percent)) 
            battle = document.getElementById("battle") 
            battle.addEventListener("click", function(){ 
               window.location.href = "result.html"


            }) 

         case "bonus": 

            var negotiator = document.getElementById("negotiator")  
            negotiator.addEventListener("click", function(){ 
            INTgold = parseInt(localStorage.getItem("gold")); 
               if(localStorage.getItem("negotiator") !== null){  
                  window.alert("You already own this bonus")
                 
               }else if(localStorage.getItem("negotiator") !== null){ 
                  var sound = new Howl({ 
                     src: ['purchase.mp3']
                  })  
                  sound.play() 

                  INTgold = INTgold - 5000; 
                  localStorage.setItem("gold", String(INTgold)); 
                  window.alert("You have bought the negotiator bonus"); 
                  localStorage.setItem("negotiator", "yes")
               }else{ 
                  window.alert("Sorry you do not have enough gold")
               }

            }) 

            var looter = document.getElementById("looter")  
            looter.addEventListener("click", function(){ 
            INTgold = parseInt(localStorage.getItem("gold")); 
               if(localStorage.getItem("looter") !== null){  
                  window.alert("You already own this bonus")
                 
               }else if(INTgold >= 750){  
                  var sound = new Howl({ 
                     src: ['purchase.mp3']
                  })  
                  sound.play() 

                  INTgold = INTgold - 750; 
                  localStorage.setItem("gold", String(INTgold)); 
                  window.alert("You have bought the battlefield looter bonus"); 
                  localStorage.setItem("looter", "yes")
                  
               }else{ 
                  window.alert("Sorry you do not have enough gold")
               }

            }) 

            var learn = document.getElementById("learn")  
            learn.addEventListener("click", function(){ 
            INTgold = parseInt(localStorage.getItem("gold")); 
               if(localStorage.getItem("learn") !== null){  
                  window.alert("You already own this bonus")
                 
               }else if(INTgold >= 1500){  
                  var sound = new Howl({ 
                     src: ['purchase.mp3']
                  })  
                  sound.play() 

                  INTgold = INTgold - 1500; 
                  localStorage.setItem("gold", String(INTgold)); 
                  window.alert("You have bought the learn from defeat bonus"); 
                  localStorage.setItem("learn", "yes")
                  
               }else{ 
                  window.alert("Sorry you do not have enough gold")
               }

            }); 

         case "result": 

            INTgold = parseInt(localStorage.getItem("gold")); 
            INTxp = parseInt(localStorage.getItem("xp"));
            win_percent = parseInt(localStorage.getItem("win_percent")); 
            INTarmy_size = parseInt(localStorage.getItem("army_size")); 
            INTfootmen = parseInt(localStorage.getItem("footman")) 
            var rand = Math.floor(Math.random() * 101);  
            var reward_gold = parseInt(localStorage.getItem("enemytemp")); 

            if (rand < win_percent){ 
               document.getElementById("outcome").innerHTML = "Congratulations you won"  
               var sound = new Howl({ 
                  src: ['tadaa.mp3']
               })  
               sound.play() 
               
               if (localStorage.getItem("looter") === null){ 
                  reward_gold = reward_gold + 250
               }  
               console.log("reward gold" + reward_gold)
               INTgold = INTgold + reward_gold; 
               localStorage.setItem("gold", String(INTgold)); 
               reward_xp = parseInt(localStorage.getItem("enemytemp")); 
               INTxp = INTxp + reward_xp 
               INTxp = localStorage.setItem("xp", String(INTxp)); 
               if (localStorage.getItem("negotiator")){ 
                  rand = Math.floor(Math.random() * 101); 
                  if(rand >=50){ 
                     INTfootman = INTfootman + 500 
                     INTarmy_size = INTarmy_size + 500 
                     Document.getElementById("reward_troops").innerHTML = "Troops recruited: 500" 
                     localStorage.setItem("army_size", String(INTarmy_size)); 
                     localStorage.setItem("footman", String(INTfootman));
                  }
               }  
               console.log(reward_gold);
               document.getElementById("reward_gold").innerHTML = "Gold earned: " + reward_gold; 
               document.getElementById("reward_xp").innerHTML = "XP earned: " + reward_xp;
            }else{  
               document.getElementById("outcome").innerHTML = "Sorry you lost"; 
               var sound = new Howl({ 
                  src: ['tadaa.mp3']
               })  
               sound.play()  
               reward_xp = parseInt(localStorage.getItem("enemytemp"));  
               if(localStorage.getItem("learn") === null){ 

                  reward_xp = reward_xp * 2;
               }   
               INTxp = INTxp + reward_xp;
               localStorage.setItem("xp", String(INTxp)); 
               document.getElementById("reward_xp").innerHTML = "Reward XP: " + reward_xp


            }

         default: 
         break;
         
      
      }
   },
   ScaleNumbers: (INTarmy_size) => {  
      console.log("Inside ScaleNumbers function");
      var randomnumber = Math.floor(Math.random() * 201) - 100; 
      console.log("Random number:", randomnumber);
      var enemynumber = INTarmy_size + randomnumber; 
      console.log("Enemy number:", enemynumber);
      return enemynumber; 
   }, 
   choosebarter: () => { 
      console.log("barter function activated")
      localStorage.setItem("gold","250"); 
      localStorage.setItem("army_size","100"); 
      localStorage.setItem("skill_points","0"); 
      localStorage.setItem("footmen","25"); 
      localStorage.setItem("spearmen","25"); 
      localStorage.setItem("cavalry","25"); 
      localStorage.setItem("archers","25"); 
      localStorage.setItem("xp","0");
      localStorage.setItem("combat_skills","15"); 
      localStorage.setItem("bartering", "20"); 
      localStorage.setItem("commanding_skills","15");  
      localStorage.setItem("battles_won", "0");
      window.location.href = "index.html";

   }, 
   choosecombat: () => {  
      console.log("combat function activated")
      localStorage.setItem("gold","100"); 
      localStorage.setItem("army_size","100"); 
      localStorage.setItem("skill_points","0"); 
      localStorage.setItem("footmen","25"); 
      localStorage.setItem("spearmen","25"); 
      localStorage.setItem("cavalry","25"); 
      localStorage.setItem("archers","25"); 
      localStorage.setItem("xp","200");
      localStorage.setItem("combat_skills","20"); 
      localStorage.setItem("bartering", "15"); 
      localStorage.setItem("commanding_skills","15");  
      localStorage.setItem("battles_won", "0");
      window.location.href = "index.html";
   },    
   choosecommander: () => { 
      console.log("commander function activated")
      localStorage.setItem("gold","100"); 
      localStorage.setItem("army_size","200"); 
      localStorage.setItem("skill_points","0"); 
      localStorage.setItem("footmen","50"); 
      localStorage.setItem("spearmen","50"); 
      localStorage.setItem("cavalry","50"); 
      localStorage.setItem("archers","50"); 
      localStorage.setItem("xp","0");
      localStorage.setItem("combat_skills","15"); 
      localStorage.setItem("bartering", "15"); 
      localStorage.setItem("commanding_skills","20"); 
      localStorage.setItem("battles_won", "0"); 
      window.location.href = "index.html";
   }, 
   upgrade_barter: (upgrade_cost) => { 
      var upgrade_cost = 100; 
      INTbarter = parseInt(localStorage.getItem("bartering")); 
      INTxp = parseInt(localStorage.getItem("xp")); 
      if (INTxp >= upgrade_cost){ 
         INTbarter = INTbarter + 1; 
         window.alert("Bartering is now" + INTbarter)
         INTxp = INTxp - upgrade_cost        
         localStorage.setItem("xp", String(INTxp)); 
         localStorage.setItem("bartering", String(INTbarter))
      }else{ 
         window.alert("insufficient xp to upgrade bartering")
      }
   }, 
   upgrade_commanding: (upgrade_cost) => {  
      var upgrade_cost = 100;
      INTcommanding = parseInt(localStorage.getItem("commanding_skills")); 
      INTxp = parseInt(localStorage.getItem("xp")); 
      if (INTxp >= upgrade_cost){ 
         INTcommanding = INTcommanding + 1; 
         window.alert("Commanding is now" + INTcommanding);
         INTxp = INTxp - upgrade_cost          
         localStorage.setItem("xp", String(INTxp)); 
         localStorage.setItem("commanding_skills", String(INTcommanding))
      }else{ 
         window.alert("insufficient xp to upgrade commanding")
      }
   }, 
   upgrade_fighter: (upgrade_cost) => {  
      var upgrade_cost = 100;
      INTcombat = parseInt(localStorage.getItem("combat_skills")); 
      INTxp = parseInt(localStorage.getItem("xp")); 
      if (INTxp >= upgrade_cost){ 
         INTcombat = INTcombat + 1; 
         window.alert("combat is now" + INTcombat) 
         INTxp = INTxp - upgrade_cost 
         localStorage.setItem("xp", String(INTxp)); 
         localStorage.setItem("combat_skills", String(INTcombat))
      }else{ 
         window.alert("insufficient xp to upgrade combat")
      }
   }, 
   retire: () => { 
      INTgold = parseInt(localStorage.getItem("gold")); 
      INTbattles = parseInt(localStorage.getItem("battles_won")); 
      INTbarter = parseInt(localStorage.getItem("bartering")); 

      if (INTgold >= 10000 && INTbarter >= 50 && INTbattles >= 20 ){ 
         window.alert("You have completed the retirement ending"); 
         localStorage.clear(); 
         location.reload();
      }else{ 
         window.alert("Sorry you do not meet the requirements")
      }
   }, 
   sieze: () => { 
      INTarmy_size = parseInt(localStorage.getItem("army_size")); 
      INTbattles = parseInt(localStorage.getItem("battles_won")); 
      INTcommanding = parseInt(localStorage.getItem("commanding_skills")); 

      if (INTarmy_size >= 10000 && INTbattles >= 20 && INTcommanding >= 50){ 
         window.alert("You have completed the nation for hire ending"); 
         localStorage.clear(); 
         location.reload();
      }else{ 
         window.alert("Sorry you do not meet the requirements");
      }
   }, 
   challenge: () => { 
      INTbattles = parseInt(localStorage.getItem("battles_won")); 
      INTcommanding = parseInt(localStorage.getItem("commanding_skills")); 
      INTcombat = parseInt(localStorage.getItem("combat_skills")); 

      if (INTbattles >= 20 && INTcommanding >= 40 && INTcombat >= 50){ 
         window.alert("You have completed the ultimate challenge ending"); 
         localStorage.clear(); 
         location.reload();
      }else{ 
         window.alert("Sorry you do not meet the requirements");
      }
   }, 

   buy_footman: () => {  
      var INTbarter = parseInt(localStorage.getItem("bartering")) 
      cost = 150 - (150*(INTbarter/100))
      INTarmy_size = parseInt(localStorage.getItem("army_size")); 
      INTfootmen = parseInt(localStorage.getItem("footmen")); 
      INTgold = parseInt(localStorage.getItem("gold"));  

      if(INTgold >= cost){ 
         INTgold = INTgold - cost; 
         INTfootmen = INTfootmen + 100;  
         INTarmy_size = INTarmy_size + 100; 
         window.alert("100 footmen purchased");  
         localStorage.setItem("gold", String(INTgold));
         localStorage.setItem("footmen", String(INTfootmen));
         localStorage.setItem("army_size", String(INTarmy_size)); 
         var sound = new Howl({ 
            src: ['purchase.mp3']
         })  
         sound.play()
      }else{ 
         window.alert("Sorry you do not have enough gold for this");
      }
   }, 
   
   buy_archers: () => {  
      var INTbarter = parseInt(localStorage.getItem("bartering")) 
      cost = 150 - (150*(INTbarter/100))
      INTarmy_size = parseInt(localStorage.getItem("army_size")); 
      INTarchers = parseInt(localStorage.getItem("archers")); 
      INTgold = parseInt(localStorage.getItem("gold"));  

      if(INTgold >= cost){ 
         INTgold = INTgold - cost;  
         INTarchers = INTarchers + 100;
         INTarmy_size = INTarmy_size + 100; 
         window.alert("100 archers purchased");  
         localStorage.setItem("gold", String(INTgold)); 
         localStorage.setItem("archers", String(INTarchers));
         localStorage.setItem("army_size", String(INTarmy_size)); 
         var sound = new Howl({ 
            src: ['purchase.mp3']
         })  
         sound.play() 
      }else{ 
         window.alert("Sorry you do not have enough gold for this");
      }
   },  

   buy_spearmen: () => {  
      var INTbarter = parseInt(localStorage.getItem("bartering")) 
      cost = 150 - (150*(INTbarter/100))
      INTarmy_size = parseInt(localStorage.getItem("army_size")); 
      INTspearmen = parseInt(localStorage.getItem("spearmen")); 
      INTgold = parseInt(localStorage.getItem("gold"));  

      if(INTgold >= cost){  
         INTgold = INTgold - cost; 
         INTspearmen = INTspearmen + 100
         INTarmy_size = INTarmy_size + 100;  
         window.alert("100 spearmen purchased"); 
         localStorage.setItem("gold", String(INTgold)); 
         localStorage.setItem("spearmen", String(INTspearmen));
         localStorage.setItem("army_size", String(INTarmy_size));  
         var sound = new Howl({ 
            src: ['purchase.mp3']
         })  
         sound.play()
      }else{ 
         window.alert("Sorry you do not have enough gold for this");
      }
   },  

   buy_cavalry: () => {  
      var INTbarter = parseInt(localStorage.getItem("bartering")) 
      cost = 150 - (150*(INTbarter/100))
      INTarmy_size = parseInt(localStorage.getItem("army_size")); 
      INTcavalry = parseInt(localStorage.getItem("cavalry")); 
      INTgold = parseInt(localStorage.getItem("gold")); 
      
      if(INTgold >= cost){ 
         
         INTgold = INTgold - cost; 
         INTcavalry = INTcavalry + 100;
         INTarmy_size = INTarmy_size + 100; 
         window.alert("100 cavalry purchased");  
         localStorage.setItem("gold", String(INTgold));
         localStorage.setItem("cavalry", String(INTcavalry));
         localStorage.setItem("army_size", String(INTarmy_size)); 
         var sound = new Howl({ 
            src: ['purchase.mp3']
         })  
         sound.play()
      }else{ 
         window.alert("Sorry you do not have enough gold for this");
      }
   }, 
}
mercenaryJS.init()



   



