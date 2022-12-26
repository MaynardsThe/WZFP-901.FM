gdjs.Menu_32ScreenCode = {};
gdjs.Menu_32ScreenCode.GDMENUObjects1= [];
gdjs.Menu_32ScreenCode.GDMENUObjects2= [];
gdjs.Menu_32ScreenCode.GDswipe_95arrowObjects1= [];
gdjs.Menu_32ScreenCode.GDswipe_95arrowObjects2= [];
gdjs.Menu_32ScreenCode.GDPlayerObjects1= [];
gdjs.Menu_32ScreenCode.GDPlayerObjects2= [];
gdjs.Menu_32ScreenCode.GDPrivacyPolicyObjects1= [];
gdjs.Menu_32ScreenCode.GDPrivacyPolicyObjects2= [];
gdjs.Menu_32ScreenCode.GDLiveChatObjects1= [];
gdjs.Menu_32ScreenCode.GDLiveChatObjects2= [];
gdjs.Menu_32ScreenCode.GDScheduleObjects1= [];
gdjs.Menu_32ScreenCode.GDScheduleObjects2= [];

gdjs.Menu_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Menu_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Menu_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Menu_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Menu_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Menu_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Menu_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Menu_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Menu_32ScreenCode.GDPlayerObjects1});
gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDLiveChatObjects1Objects = Hashtable.newFrom({"LiveChat": gdjs.Menu_32ScreenCode.GDLiveChatObjects1});
gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDScheduleObjects1Objects = Hashtable.newFrom({"Schedule": gdjs.Menu_32ScreenCode.GDScheduleObjects1});
gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDPrivacyPolicyObjects1Objects = Hashtable.newFrom({"PrivacyPolicy": gdjs.Menu_32ScreenCode.GDPrivacyPolicyObjects1});
gdjs.Menu_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Menu_32ScreenCode.GDPlayerObjects1);

gdjs.Menu_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Menu_32ScreenCode.conditionTrue_1 = gdjs.Menu_32ScreenCode.condition0IsTrue_0;
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Menu_32ScreenCode.condition0IsTrue_1.val ) {
{
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDPlayerObjects1Objects, runtimeScene, true, false);
}}
gdjs.Menu_32ScreenCode.conditionTrue_1.val = true && gdjs.Menu_32ScreenCode.condition0IsTrue_1.val && gdjs.Menu_32ScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.Menu_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Player");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LiveChat"), gdjs.Menu_32ScreenCode.GDLiveChatObjects1);

gdjs.Menu_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Menu_32ScreenCode.conditionTrue_1 = gdjs.Menu_32ScreenCode.condition0IsTrue_0;
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Menu_32ScreenCode.condition0IsTrue_1.val ) {
{
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDLiveChatObjects1Objects, runtimeScene, true, false);
}}
gdjs.Menu_32ScreenCode.conditionTrue_1.val = true && gdjs.Menu_32ScreenCode.condition0IsTrue_1.val && gdjs.Menu_32ScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.Menu_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Live Chat");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Schedule"), gdjs.Menu_32ScreenCode.GDScheduleObjects1);

gdjs.Menu_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Menu_32ScreenCode.conditionTrue_1 = gdjs.Menu_32ScreenCode.condition0IsTrue_0;
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Menu_32ScreenCode.condition0IsTrue_1.val ) {
{
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDScheduleObjects1Objects, runtimeScene, true, false);
}}
gdjs.Menu_32ScreenCode.conditionTrue_1.val = true && gdjs.Menu_32ScreenCode.condition0IsTrue_1.val && gdjs.Menu_32ScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.Menu_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Schedule");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PrivacyPolicy"), gdjs.Menu_32ScreenCode.GDPrivacyPolicyObjects1);

gdjs.Menu_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Menu_32ScreenCode.conditionTrue_1 = gdjs.Menu_32ScreenCode.condition0IsTrue_0;
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Menu_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Menu_32ScreenCode.condition0IsTrue_1.val ) {
{
gdjs.Menu_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Menu_32ScreenCode.mapOfGDgdjs_46Menu_9532ScreenCode_46GDPrivacyPolicyObjects1Objects, runtimeScene, true, false);
}}
gdjs.Menu_32ScreenCode.conditionTrue_1.val = true && gdjs.Menu_32ScreenCode.condition0IsTrue_1.val && gdjs.Menu_32ScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.Menu_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Privacy Policy");
}}

}


};

gdjs.Menu_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32ScreenCode.GDMENUObjects1.length = 0;
gdjs.Menu_32ScreenCode.GDMENUObjects2.length = 0;
gdjs.Menu_32ScreenCode.GDswipe_95arrowObjects1.length = 0;
gdjs.Menu_32ScreenCode.GDswipe_95arrowObjects2.length = 0;
gdjs.Menu_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Menu_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Menu_32ScreenCode.GDPrivacyPolicyObjects1.length = 0;
gdjs.Menu_32ScreenCode.GDPrivacyPolicyObjects2.length = 0;
gdjs.Menu_32ScreenCode.GDLiveChatObjects1.length = 0;
gdjs.Menu_32ScreenCode.GDLiveChatObjects2.length = 0;
gdjs.Menu_32ScreenCode.GDScheduleObjects1.length = 0;
gdjs.Menu_32ScreenCode.GDScheduleObjects2.length = 0;

gdjs.Menu_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Menu_32ScreenCode'] = gdjs.Menu_32ScreenCode;
