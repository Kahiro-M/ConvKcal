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

function readFirst(){
	//セレクトボックスの選択肢を読み込む
	cleateSelectbox("METs");
}

function cleateSelectbox(METs){
	/**
	* listオブジェクトからを作成する
	* @returns {null} 返り値なし
	*/
  //連想配列をループ処理で値を取り出してセレクトボックスにセットする
  var Selectbox = new SelectboxList();
  let opt = document.createElement("option");
  let tmp = document.getElementById(METs);
  for(var i=0;i<Selectbox.list.length;i++){
    opt = document.createElement("option");
    opt.value = Selectbox.list[i].val;  //value値
    opt.text = Selectbox.list[i].txt;   //テキスト値
    tmp.appendChild(opt);
  }
}



class SelectboxList{
	
  constructor(){
    this.list = [
      {val:"0.9",txt:" 0.9 [睡眠]"},
      {val:"1.0",txt:" 1.0 [椅子に座る]"},
      {val:"1.5",txt:" 1.5 [入浴]"},
      {val:"2.0",txt:" 2.0 [会話を伴った食事]"},
      {val:"2.5",txt:" 2.5 [ストレッチ,ハタヨガ]"},
      {val:"3.0",txt:" 3.0 [洗車,散歩(3km/h以下),筋トレ(軽度)]"},
      {val:"3.5",txt:" 3.5 [モップがけ,アーチェリー,柔軟体操]"},
      {val:"4.0",txt:" 4.0 [徒歩(4km/h),自転車(16km/h),乗馬]"},
      {val:"4.5",txt:" 4.5 [ゴルフ,バトミントン,フラダンス]"},
      {val:"5.0",txt:" 5.0 [エアロビ(軽度),ソフトボール,野球]"},
      {val:"5.5",txt:" 5.5 [エアロバイク(100ワット)]"},
      {val:"6.0",txt:" 6.0 [水泳(背泳ぎ),ジョギング,自転車(19km/h),筋トレ(強度)]"},
      {val:"6.5",txt:" 6.5 [エアロビ(強度)]"},
      {val:"7.0",txt:" 7.0 [登山(軽量の荷物),テニス,サッカー,スキー,エアロバイク(150ワット)]"},
      {val:"8.0",txt:" 8.0 [ランニング(8km/h),自転車(22km/h),水泳(クロール),腕立て伏せ,懸垂,腹筋運動]"},
      {val:"10.0",txt:"10.0 [ランニング(10km/h),柔道,空手,水泳(平泳ぎ)]"},
      {val:"11.0",txt:"11.0 [水泳(バタフライ)]"},
      {val:"15.0",txt:"15.0 [ランニング(14.5km/h)]"},
      // {val:",,",txt:""},
    ];
  }
}