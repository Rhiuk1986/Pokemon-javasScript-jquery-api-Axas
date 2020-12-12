$(document).ready(function(){
    for(var i=1;i<=151;i++){
    $('#pokemones').append("<img id='"+ i +"'class='poke' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png'>");
    }  
        $('.poke').on('click',function(){
            var id = $(this).attr("id");
            var imagen = $(this).attr('src');
            
                $.get("https://pokeapi.co/api/v2/pokemon/"+id+"/", function(res){
                
                var html="";
                html+="<p class='name-poke'>"+ res.name+"</p>";
                html+="<div class='poke-ficha'><img class='' src='"+ imagen +"'></div>";
                
                    for(var j=0;j<res.types.length;j++){
                        var tipo="";
                        switch(res.types[j].type.name){
                            case "fire":
                                tipo="fuego'>fuego";
                            break;
                            case "water":
                                tipo="agua'>agua";
                            break;
                            case "normal":
                                tipo="normal'>normal";
                            break;
                            case "grass":
                                tipo="hierba'>hierba";
                            break;
                            case "poison":
                                tipo="veneno'>veneno";
                            break;
                            case "rock":
                                tipo="roca'>roca";
                            break;
                            case "bug":
                                tipo="bicho'>bicho";
                            break;
                            case "fairy":
                                tipo="hada'>hada";
                            break;
                            case "dragon":
                                tipo="dragon'>dragón";
                            break;
                            case "ice":
                                tipo="hielo'>hielo";
                            break;
                            case "electric":
                                tipo="electrico'>eléctrico";
                            break;
                            case "flying":
                                tipo="volador'>volador";
                            break;
                            case "steel":
                                tipo="acero'>acero";
                            break;
                            case "ground":
                                tipo="tierra'>tierra";
                            break;
                            case "fighting":
                                tipo="luchador'>luchador";
                            break;
                            case "psychic":
                                tipo="psiquico'>psíquico";
                            break;
                            case "ghost":
                                tipo="fantasma'>fantasma";
                            break;
                            
                        }
                        if(j==0){
                            html+="<div class='tipo1 "+ tipo +"</div>";
                        }
                        else{
                            html+="<div class='tipo2 "+ tipo +"</div>";
                        }
                            
                    
                        
                      
                    }
                html+="<p class='altura'><span>Altura:  </span>"+ res.height +"</p>";
                html+="<p class='peso'><span>Peso:  </span>"+ res.weight +"</p>";
                html+="</ul>";
                $('.info').html(html);
            
                }),'json';


        });
        
});

 