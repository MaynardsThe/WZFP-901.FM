gdjs.Privacy_32PolicyCode = {};
gdjs.Privacy_32PolicyCode.GDMENUObjects1= [];
gdjs.Privacy_32PolicyCode.GDMENUObjects2= [];
gdjs.Privacy_32PolicyCode.GDswipe_95arrowObjects1= [];
gdjs.Privacy_32PolicyCode.GDswipe_95arrowObjects2= [];

gdjs.Privacy_32PolicyCode.conditionTrue_0 = {val:false};
gdjs.Privacy_32PolicyCode.condition0IsTrue_0 = {val:false};
gdjs.Privacy_32PolicyCode.condition1IsTrue_0 = {val:false};


gdjs.Privacy_32PolicyCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "WZFP", "https://www.wzfp.live/privacy-policy.html", gdjs.evtTools.window.getWindowInnerWidth() - 25, gdjs.evtTools.window.getWindowInnerHeight() - 50, 25, 25, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.Privacy_32PolicyCode.condition0IsTrue_0.val = false;
{
gdjs.Privacy_32PolicyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Privacy_32PolicyCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "WZFP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.Privacy_32PolicyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Privacy_32PolicyCode.GDMENUObjects1.length = 0;
gdjs.Privacy_32PolicyCode.GDMENUObjects2.length = 0;
gdjs.Privacy_32PolicyCode.GDswipe_95arrowObjects1.length = 0;
gdjs.Privacy_32PolicyCode.GDswipe_95arrowObjects2.length = 0;

gdjs.Privacy_32PolicyCode.eventsList0(runtimeScene);

return;

}

gdjs['Privacy_32PolicyCode'] = gdjs.Privacy_32PolicyCode;
