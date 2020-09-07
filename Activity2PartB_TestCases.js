calc('{"op":"add", "number": 7}');  // Should return 7
calc('{"op":"add", "expr": {"op":"subtract", "expr": {"op":"subtract", "number":1 }}}');  // Should return 0
calc('{"op":"add", "number": 8}');  // Should return 8
calc('{"op":"add", "expr":{"op":"add", "expr": {"op":"add", "expr":{"op":"add", "number": 2}}}}'); // Should return 80
calc('{"op":"subtract", "expr":{"op":"subtract", "expr": {"op":"add", "expr":{"op":"add", "number": 3}}}}'); // Should return 0
calc('{"op":"subtract", "number": 11}'); // Should return -11