preCalc.calc('{"op":"subtract", "number": 3}'); // Should return -3
preCalc.calc('{"op":"add", "expr": {"op":"subtract", "expr": {"op":"add", "number": 14}}}' ); // Should return -14
preCalc.calc('{"op":"push", "number": 7}');  // Should return 7
preCalc.calc('{"op":"print"}' );// Should return [7,0]
preCalc.calc('{"op":"push", "expr": {"op":"add", "expr": {"op":"subtract", "number": 2}}}'  );// Should return 12
preCalc.calc('{"op":"push", "expr":{"op":"add", "number": 6}}' );//Should return 18
preCalc.calc('{"op":"print"}'); //Should return [18 12 7 0]
preCalc.calc('{"op":"pop"}' );//Should return 18
preCalc.calc('{"op":"print"}' );//Should return [12 7 0]
preCalc.calc('{"op":"push", "expr": {"op":"add", "number": 11}}'); //Should return 23
preCalc.calc('{"op":"print"}'); //Should return [23 12 7 0]
preCalc.calc('{"op":"pop"}' ); //Should return 23
preCalc.calc('{"op":"pop"}' ); //Should return 12
preCalc.calc('{"op":"pop"}' ); //Should return 7
preCalc.calc('{"op":"pop"}' ); //Should return 0
preCalc.calc('{"op":"pop"}' ); //(what? You have an empty stack now)