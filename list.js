let list=[ "Reading", "Preparing Breakfast", "Home Tution", "Market Works", "Library"]

list.shift();  //Removing first element

list.unshift("Meditation","Walking");  // adding two elements at the beginning of the array

list[list.length-1]="Fun with friends"   // replacing the last element of list

for(i=0;i<list.length;++i){
    console.log(list[i]);
}