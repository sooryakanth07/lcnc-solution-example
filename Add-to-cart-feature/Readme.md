# Use case
In the Procurement app, employee chooses products from the gallery view and adds them to a PR at the click of button. 
This is similar to the Amazon 'Add to cart' feature, however, in this solution, products are added to a PR form.

# Prerequisites (in order)

## Data form: 'Product catalog'
- Add 'Text field' computed to store the instance id. Create field 'Product instance ID' with formula '_id'
-  Add products for testing
-  View: Create Gallery view
   - Enable Action button
    - Use the code in Gallery-view-button.js, in the Button event

## Process form: 'Purchase request'
- 'Item details' table:
    - Product lookup
    - Unit price
    - Quantity
    - Product instance ID

## Page: 'Product Catalog'
- Component: User 'Product Catalog' Data form's Gallery view
- Popup:
   - Create Popup parameteres (popinstanceid & popactiveinstanceid) in the **header**.
   - Then, pass them to the popup **body** inputs (Instance Id, Activity Instance Id)
