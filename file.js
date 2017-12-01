for (var i=1; i <= 100; i++){
	if( i % 3 == 0 )	{
      if(i%9 !=0){
        document.write("Earth");
        document.write('<br>');
      }
      else{
	    document.write("Pluto");
     	document.write('<br>');
      }
    }
    else if(i % 5 == 0){
    document.write("Jupiter");
    document.write('<br>');
    }

    else{
 	document.write(i);
    document.write('<br>');
    }
}
