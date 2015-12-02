window.onload = function(){

    var
        doc = document,
        img_arr = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg','image/5.jpg'],
        count = 0;

    doc.body.style.height = getViewInfo().h + 'px';

    loadImg();
    function loadImg(){

        for(var i= 0,iLen=img_arr.length;i<iLen;i++){

            var oImg = new Image();
            oImg.src = img_arr[i];

            oImg.onload = function(){
                count++;

                if(count === iLen){

                    alert('Í¼Æ¬¼ÓÔØÍê³É');
                }
            }
        }
    }

}