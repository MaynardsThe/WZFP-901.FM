gdjs.PlayerCode = {};
gdjs.PlayerCode.GDMENUObjects1= [];
gdjs.PlayerCode.GDMENUObjects2= [];
gdjs.PlayerCode.GDswipe_95arrowObjects1= [];
gdjs.PlayerCode.GDswipe_95arrowObjects2= [];
gdjs.PlayerCode.GDLoadingObjects1= [];
gdjs.PlayerCode.GDLoadingObjects2= [];

gdjs.PlayerCode.conditionTrue_0 = {val:false};
gdjs.PlayerCode.condition0IsTrue_0 = {val:false};
gdjs.PlayerCode.condition1IsTrue_0 = {val:false};


gdjs.PlayerCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "WZFP", "https://www.wzfp.live/app/player.html", gdjs.evtTools.window.getWindowInnerWidth() - 25, gdjs.evtTools.window.getWindowInnerHeight() - 50, 25, 25, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.PlayerCode.condition0IsTrue_0.val = false;
{
gdjs.PlayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PlayerCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "WZFP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PlayerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayerCode.GDMENUObjects1.length = 0;
gdjs.PlayerCode.GDMENUObjects2.length = 0;
gdjs.PlayerCode.GDswipe_95arrowObjects1.length = 0;
gdjs.PlayerCode.GDswipe_95arrowObjects2.length = 0;
gdjs.PlayerCode.GDLoadingObjects1.length = 0;
gdjs.PlayerCode.GDLoadingObjects2.length = 0;

gdjs.PlayerCode.eventsList0(runtimeScene);

return;

}

gdjs['PlayerCode'] = gdjs.PlayerCode;
