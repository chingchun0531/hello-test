import React from "react";
import {Navbar,Footer} from "./Tool";
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';

function Junior(){
    return(
        <>
        <Navbar name="BeiAn Junior High"/>
        <main>
      <section class="left">
        <h4 style={{textAlign:"center"}}>北安國中</h4>
        <p>學校沿革
            本校係遵奉先總統蔣公延長九年國民教育，提高人力素質資訊之訓示，於民國五十六年十一月將原台灣省訓團舊址，撥歸本校使用，首任校長羅大姒女士，於台北市華陰街籌備創校，五十七年七月暫借中山國小辦理第一屆新生報到，計九百四十八人共十九班，並指定為「自然科學實驗學校」，九月一日校舍工程落成啟用，遷返位於台北市中山區明水路三二五號現址，校名「台北市立北安女子國民中學」。
            民國六十一年八月第二任校長徐淑靜女士，秉持國民中學教育目標和宗旨掣劃領導，訂 「勤、勞、儉、樸」 為校訓，作為師生進德修業之準繩。

            民國六十七年八月第三任校長陳正邦先生，重視生活教育，推廣資優實驗班，於七十年八月成立舞蹈教育實驗班，七十一年八月成立中菜廚師技藝班，並興建游泳池、舞蹈館，對外活動尤以國樂、軍樂、合唱等比賽表現突出，並以 「活潑、整潔、禮貌、榮譽」 為工作指標，培育優秀人才。
            民國七十七年八月第四任校長王學品先生，進行校園重整，重修校內道路，並加強美化、綠化工程，八十年八月改制為男女合校，校名更改為 「台北市立北安國民中學」。
        </p>
        <div id="img"><img src={require("/Users/veronica.lin/reactJS/hello-test/src/photo/北安國中校門.jpeg")} alt="logo"/></div>
      </section>
      <section class="right">
        <h4 style={{lineHeight:"50px",textAlign:"center"}}>學校特色</h4>
        <p style={{lineHeight:"1px"}}>壹、優質的學習環境</p><br/>
        <p style={{lineHeight:"1px"}}>貳、和諧的學校組織氣氛</p><br/>
        <p style={{lineHeight:"1px"}}>參、熱忱專業的教學團隊</p><br/>
        <p style={{lineHeight:"20px"}}>肆、教學活動創意彈性多元提升學生國語文及英語能力</p><br/>
        <p style={{lineHeight:"1px"}}>伍、創意多元邁向國際</p><br/>
        <p style={{lineHeight:"1px"}}>陸、家長會積極正向協助校務</p><br/>
        <p style={{lineHeight:"1px"}}>柒、規畫多樣活潑的社團活動</p><br/>
        <p style={{lineHeight:"1px"}}>捌、舞蹈資優班、體育資優班成果豐碩</p><br/>
        <p style={{lineHeight:"1px"}}>玖、和諧的學校組織氣氛</p><br/>
        
        <img src={require("/Users/veronica.lin/reactJS/hello-test/src/photo/北安校徽.png")} style={{display:"block",margin:"auto",width:"75%"}} alt="logo"/>
      </section>
    </main>
    <Footer />
        </>
    );
}
export default Junior;