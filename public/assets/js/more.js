function updateURLParameter(url, param, paramVal) {
       var newAdditionalURL = "";
       var tempArray = url.split("?");
       var baseURL = tempArray[0];
       var additionalURL = tempArray[1];
       var temp = "";
       if (additionalURL) {
           tempArray = additionalURL.split("&");
           for (i = 0; i < tempArray.length; i++) {
               if (tempArray[i].split('=')[0] != param) {
                   newAdditionalURL += temp + tempArray[i];
                   temp = "&";
               }
           }
       }
       var rows_txt = temp.substring(0, temp.length - 1);
       if (paramVal != "")
           rows_txt = rows_txt + "&" + param + "=" + paramVal;
       return baseURL + "?" + newAdditionalURL + rows_txt;
   }
