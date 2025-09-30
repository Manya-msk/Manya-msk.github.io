
                var isRow = true; 
                
                //alert ("hi22");  
               //  alert ("jjj" + document.getElementById("dropDown_Change_Orientation").nodeValue);
                function changeOrientation(control)
                {
                //alert ("hi26"); 
                 var myDropDown = document.getElementById("dropDown_Change_Orientation"); 
                 var myContainer = document.getElementById("matcha_container"); 
                   
                
                if (myDropDown.value == "displayRows")
                {
                        //myContainer.style.flexDirection 
                        myContainer.style.backgroundColor = "#000000"; 
                        alert ("hi row"); 
                }
                else 
                {
                        alert ("hi col"); 
                        //myContainer.style.flexDirection = "column"; 
                        myContainer.style.backgroundColor = "#d4ffc2ff"; 
                        
                }
                } 
                function changeColorForPrice(){
                        if(dropDown_Change_Color_For_Price.value =="displayHigh"){
                            document.getElementById("yume_mori_container").style.backgroundColor = "#6dc06dff"; 
                            document.getElementById("binge_container").style.backgroundColor = "#71aa71";

                        }
                        else if(dropDown_Change_Color_For_Price.value =="displayLow"){
                            document.getElementById("yume_mori_container").style.backgroundColor = "#71aa71"; 
                            document.getElementById("binge_container").style.backgroundColor = "#6dc06dff";

                        }

                }
                // boba drop down in the future
                function changeColorForPriceBoba(){
                        if(dropDown_Change_Color_For_Price_Boba.value =="displayHigh"){
                            document.getElementById("heytea_container").style.backgroundColor = "#f5d393ff"; 
                            document.getElementById("share_tea_container").style.backgroundColor ="#e1bf78";

                        }
                        else if(dropDown_Change_Color_For_Price_Boba.value =="displayLow"){
                            document.getElementById("share_tea_container").style.backgroundColor ="#f5d393ff"; 
                            document.getElementById("heytea_container").style.backgroundColor = "#e1bf78"; 

                        }

                }

                // dessert drop down in the future
                function changeColorForPriceDessert(){
                        if(dropDown_Change_Color_For_Price_Dessert.value =="displayHigh"){
                            document.getElementById("u_dessert_container").style.backgroundColor = '#76bacfff'; 
                            document.getElementById("insomnia_container").style.backgroundColor ='#5da4b9ff';

                        }
                        else if(dropDown_Change_Color_For_Price_Dessert.value =="displayLow"){
                            document.getElementById("insomnia_container").style.backgroundColor ='#76bacfff'; 
                            document.getElementById("u_dessert_container").style.backgroundColor = '#5da4b9ff'; 

                        }

                }


