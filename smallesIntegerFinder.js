class SmallestIntegerFinder {
  findSmallestInt(args) {
    var number = args[0];
    for (var i = 0; i < args.length; i++) {
      if (number > args[i]) {
        number = args[i];
      }  
    }
    return number;
    
  }
}