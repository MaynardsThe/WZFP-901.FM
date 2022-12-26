gdjs.Live_32ChatCode = {};
gdjs.Live_32ChatCode.GDMENUObjects1= [];
gdjs.Live_32ChatCode.GDMENUObjects2= [];
gdjs.Live_32ChatCode.GDswipe_95arrowObjects1= [];
gdjs.Live_32ChatCode.GDswipe_95arrowObjects2= [];
gdjs.Live_32ChatCode.GDLoadingObjects1= [];
gdjs.Live_32ChatCode.GDLoadingObjects2= [];

gdjs.Live_32ChatCode.conditionTrue_0 = {val:false};
gdjs.Live_32ChatCode.condition0IsTrue_0 = {val:false};
gdjs.Live_32ChatCode.condition1IsTrue_0 = {val:false};


gdjs.Live_32ChatCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "WZFP", "https://www.wzfp.live/chat/index.php", gdjs.evtTools.window.getWindowInnerWidth() - 25, gdjs.evtTools.window.getWindowInnerHeight() - 50, 25, 25, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.Live_32ChatCode.condition0IsTrue_0.val = false;
{
gdjs.Live_32ChatCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Live_32ChatCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "WZFP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.Live_32ChatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Live_32ChatCode.GDMENUObjects1.length = 0;
gdjs.Live_32ChatCode.GDMENUObjects2.length = 0;
gdjs.Live_32ChatCode.GDswipe_95arrowObjects1.length = 0;
gdjs.Live_32ChatCode.GDswipe_95arrowObjects2.length = 0;
gdjs.Live_32ChatCode.GDLoadingObjects1.length = 0;
gdjs.Live_32ChatCode.GDLoadingObjects2.length = 0;

gdjs.Live_32ChatCode.eventsList0(runtimeScene);

return;

}

gdjs['Live_32ChatCode'] = gdjs.Live_32ChatCode;
