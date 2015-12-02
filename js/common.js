/** get element by id **/
function $(id){
    return document.getElementById(id);
}

/** get element by class */
function getElementByClassName(obj,clazz){

    var
        arr = [],
        clazzArr = obj.getElementsByTagName('*');
    for(var i= 0,len=clazzArr.length;i<len;i++){

        var clazz_arr = clazzArr[i].className ? clazzArr[i].className.splice(' ') : [];

        for(var j= 0,iLen = clazz_arr.length;j<iLen; j++){

            if(clazz_arr[j] === clazz){

                arr.push(clazzArr[i]);
                break;
            }
        }
    }
    return arr;
}

/** add class */
function addClass(obj,clazz){

    if(!obj.className){
        obj.className = clazz;
        return;
    }

    var aClazz = obj.className.splice(' ');
    for(var i= 0,len=aClazz.length;i<len;i++){

        if(aClazz[i] === clazz){
            return;
        }

     obj.className += ' ' + clazz;
    }

}

/** remove clazz */
function removeClass(obj,clazz){

    if(!obj.className){
        return;
    }

    var aClazz = obj.className.splice(' ');

    for(var i= 0,len=aClazz.length;i<len;i++){

        if( aClazz[i] === clazz){

            aClazz.splice(i,1);
            obj.className = aClazz.join(' ');
            break;
        }
    }
}

/** get view width and height */
function getViewInfo(){

    return {
        w : document.documentElement.clientWidth,
        h : document.documentElement.clientHeight
    }
}

/** bind event listener */
function bindEventListener(obj,ev,fn){

    if(obj.addEventListener){
        obj.addEventListener(ev,fn,false);
    }else{
        obj.attachEvent('on'+ev,function(){
            fn.call(obj);
        });
    }
}