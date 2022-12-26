gdjs.ScheduleCode = {};
gdjs.ScheduleCode.GDMENUObjects1= [];
gdjs.ScheduleCode.GDMENUObjects2= [];
gdjs.ScheduleCode.GDswipe_95arrowObjects1= [];
gdjs.ScheduleCode.GDswipe_95arrowObjects2= [];
gdjs.ScheduleCode.GDLoadingObjects1= [];
gdjs.ScheduleCode.GDLoadingObjects2= [];

gdjs.ScheduleCode.conditionTrue_0 = {val:false};
gdjs.ScheduleCode.condition0IsTrue_0 = {val:false};
gdjs.ScheduleCode.condition1IsTrue_0 = {val:false};


gdjs.ScheduleCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "WZFP", "https://www.wzfp.live/schedule.html", gdjs.evtTools.window.getWindowInnerWidth() - 25, gdjs.evtTools.window.getWindowInnerHeight() - 50, 25, 25, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.ScheduleCode.condition0IsTrue_0.val = false;
{
gdjs.ScheduleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ScheduleCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "WZFP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.ScheduleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScheduleCode.GDMENUObjects1.length = 0;
gdjs.ScheduleCode.GDMENUObjects2.length = 0;
gdjs.ScheduleCode.GDswipe_95arrowObjects1.length = 0;
gdjs.ScheduleCode.GDswipe_95arrowObjects2.length = 0;
gdjs.ScheduleCode.GDLoadingObjects1.length = 0;
gdjs.ScheduleCode.GDLoadingObjects2.length = 0;

gdjs.ScheduleCode.eventsList0(runtimeScene);

return;

}

gdjs['ScheduleCode'] = gdjs.ScheduleCode;
