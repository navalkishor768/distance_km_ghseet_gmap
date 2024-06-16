/** 
 * Get Distance Betweeen 2 Valid Addresses
 * @param start_add Enter start valid address
 * @param dest_add Enter destination valid address
 * @param return_type Return type as KM or Value
 * @customfunction
*/
function getDistance(start_add,dest_add,return_type){


  var mapSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // var start_add = mapSheet.getRange("B2").getValue();
  // var dest_add = mapSheet.getRange("B3").getValue();

  var mapObj = Maps.newDirectionFinder();
  mapObj.setOrigin(start_add);
  mapObj.setDestination(dest_add);

  var directions = mapObj.getDirections();

  var distKM = directions["routes"][0]["legs"][0]["distance"]["text"];
  var distMtr = directions["routes"][0]["legs"][0]["distance"]["value"];
  Logger.log(distKM);

  switch(return_type){

    case "Text":
    return distKM;
    break;
    case "Value":
    return distMtr;
    break;
    default:
    return "Wrong Address";
    break;
    
  }

}

