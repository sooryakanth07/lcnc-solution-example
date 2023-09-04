//Create a button called 'Create PR'. Use the below code in the 'On click' event.
    let accid = kf.account._id;
    
    let Line_Items = await kf.app.getVariable("Line_Items");
    
    let split_instances = Line_Items.split(",");
    
    kf.client.showInfo(split_instances);
    let tableId = 'Model_XXXXXXXX'; // Use your table's "_model_id" . Check the 'process-table-db-mapping', https://files.helpdocs.io/wqcys9wwx2/other/1661763738497/static-pdf-process-table-db-mapping.pdf
    
    let tableData = split_instances.map((value, index) => ({
      "_id": `${tableId}_${Date.now()}_${Math.floor(Math.random() * 99)}`,
      "_index": index,
      "_is_created": true,
      "Product_instance_ID": value // Read this Logic: The value passed are the instance-ids we capture during Add to request 'Galler-view-button.js'. Instance ids are passed to the column 'Product_instance_ID' in the table. This column acts as the filter to the lookup field. This lookup fetches product details for the use from the 'Product catalog' dataform.
    }))
    
    var payload = {
      [`Table::${tableId}`]: tableData
    };
    
    let resp = await kf.api("/process/2/" + accid + "/Purchase_Request_A00?application_id=Procurement_Cloud_A00",
      {
        "method": "POST",
        "body": JSON.stringify(payload)
      }
    );
    
    kf.client.showInfo(resp);
    console.log(resp);
    const timeout = setTimeout(myfunc, 400);
    function myfunc() {
      kf.app.page.openPopup("Popup__mRWmNmQA", { popinstanceid: resp._id, popactiveinstanceid: resp._activity_instance_id });
    }
