//Gallery view 'Add to request' - Button - OnClick - Javascript action.
    var line_item_id = kf.eventParameters._id
    var line_items_gb = await kf.app.getVariable("Line_Items");
    var result = "";
    if (line_items_gb) {
      result = line_items_gb.concat(",", line_item_id);
    } else {
      result = line_items_gb.concat(line_item_id);
    }
    var line_item_final = await kf.app.setVariable("Line_Items", result)
// The above code gets the IDs of the selected products, concatenates them and stores them in a 
//variable. In this context, the ID is the data form's id.
