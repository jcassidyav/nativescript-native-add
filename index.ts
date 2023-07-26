import * as path from "path";
const nativeAddPath = path.join(__dirname, "commands", "native-add");
//injector.registerCommand("native|add", NativeAddCommand);
$injector.requireCommand(["native|add"], nativeAddPath);
$injector.requireCommand(["native|add|java"], nativeAddPath);
$injector.requireCommand(["native|add|kotlin"], nativeAddPath);
$injector.requireCommand(["native|add|swift"], nativeAddPath);
$injector.requireCommand(["native|add|objective-c"], nativeAddPath);