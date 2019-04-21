// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// 運動時間を計算するクラス
class Culc{
  constructor(kcal,METs,Weight){
    // 消費カロリー(kcal) ＝ 1.05 * METs * 体重(kg) * 運動時間(h)
    var kcalObj = document.getElementById(kcal);
    var METsObj = document.getElementById(METs);
    var WeightObj = document.getElementById(Weight);
    this.kcal = kcalObj.value;
    this.METs = METsObj.value;
    this.Weight = WeightObj.value;
    this.coefficient = 1.05;
  }
  
  culcWorkoutTime(){
    // 運動時間(h) ＝ 消費カロリー(kcal) / (1.05 * METs * 体重(kg) )
    return (this.kcal / (this.coefficient * this.METs * this.Weight));
  }

}

function showResultWorkoutTimeTo(ElementID){
  var elementForShow = document.getElementById(ElementID);
  var result = new Culc("kcal","METs","Weight");

  //いったんリフレッシュ
	elementForShow.innerHTML = "";
  elementForShow.innerHTML = result.culcWorkoutTime().toFixed(2);
}