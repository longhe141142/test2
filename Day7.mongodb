use("myFirstDatabase")


//generate test data
db.users.insertMany([
  {_id:"126x",Pass:"1234",UseName:"long"},
  {_id:"125x",Pass:"1234",UseName:"long"},
  {_id:"121x",Pass:"1234",UseName:"long"},
  {_id:"124x",Pass:"1234",UseName:"long"},
  {_id:"127x",Pass:"1234",UseName:"long"},
]
)

db.customers.insertMany([
  {_id:"12342",User_id:"125x"},
  {_id:"12345",User_id:"125x"},
  {_id:"12346",User_id:"125x"},
  {_id:"12347",User_id:"125x"},
  {_id:"12348",User_id:"125x"},

])

db.orders.insertMany([
  {_id:"1",customerId:"12342",Price:2000,Tax:2000,Phone:"123"},
  {_id:"2",customerId:"12342",Price:2000,Tax:2000,Phone:"123"},
  {_id:"3",customerId:"12345",Price:2000,Tax:2000,Phone:"123"},
  {_id:"4",customerId:"12345",Price:2000,Tax:2000,Phone:"123"},
  {_id:"5",customerId:"12342",Price:2000,Tax:2000,Phone:"123"},
])


db.order_details.insertMany([
    // {_id:"1",productId:"3",orderId:"3"},
    {_id:"2",productId:"3",orderId:"3"},
    {_id:"3",productId:"2",orderId:"4"},
    {_id:"4",productId:"2",orderId:"5"},
    {_id:"5",productId:"2",orderId:"3"},
])

db.products.insertMany([
    {_id:"1",name:"iphone",description:"",Price:255000,Tax:300},
    {_id:"2",name:"xiaomi",description:"",Price:223000,Tax:300},
    {_id:"3",name:"galaxy",description:"",Price:20400,Tax:300},
    {_id:"4",name:"sony",description:"",Price:20040,Tax:300},
])

db.productsImages.insertMany([
    {_id:"1x",productId:"1",url:"https://example1.com"},
     {_id:"2x",productId:"2",url:"https://example2.com"},
    {_id:"3x",productId:"3",url:"https://example3.com"},
    {_id:"4x",productId:"4",url:"https://example4.com"},
    {_id:"5x",productId:"5",url:"https://example5.com"},
    {_id:"6x",productId:"6",url:"https://example6.com"},
   
])


db.productsImages.insertMany([
    {_id:"12x",productId:"1",url:"https://example1.com"},
     {_id:"22x",productId:"1",url:"https://example2.com"},
    {_id:"33x",productId:"1",url:"https://example3.com"},
    {_id:"44x",productId:"2",url:"https://example4.com"},
    {_id:"55x",productId:"2",url:"https://example5.com"},
    {_id:"66x",productId:"2",url:"https://example6.com"},
   
])
//3.Viết câu lệnh select của mongoDB trả về tất cả users (có cả thông tin customer của mỗi user)

db.users.aggregate(
  [
    {
        '$lookup': {
            'from': 'customers', 
            'localField': '_id', 
            'foreignField': 'User_id', 
            'as': 'Customer'
        }
    }
]
)


//2.Viết câu lệnh select của mongoDB trả về tất cả thông tin về đơn hàng, chi tiết đơn hàng, chi tiết sản phẩm trong đơn hàng của mỗi customer. 

db.customers.aggregate(
    //step 1: left join customers with orders where customers._id = customerId
    // AFTER THIS STEP,WE HAVE TABLE (I)
  [
  {
    '$lookup': {
      'from': 'orders', 
      'localField': '_id', 
      'foreignField': 'customerId', 
      'as': 'order'
    }
  }, { 
    '$project': { // hiding customerId
      'order.customerId': 0
    }
  }, {
    '$lookup': { //step 2: left join (I) with order_details where (I).order._id = order_details.orderId
      'from': 'order_details',  //AFTER this step ,we have table(II)
      'localField': 'order._id', 
      'foreignField': 'orderId', 
      'as': 'orderdetail'
    }
  }, {
    '$lookup': { //step 3: left join (II) with products where (II).orderdetail.productId = products._id
      'from': 'products',  //AFTER this step ,we have table(III)
      'localField': 'orderdetail.productId', 
      'foreignField': '_id', 
      'as': 'products'
    }
  }, {
    '$group': { // STEP 4: select product from table(III) groupby customer_id,user_id,order,order_detail
      '_id': { //AFTER this step ,we have table(IV)
        'customer_id': '$_id', 
        'user_id': '$User_id', 
        'order_id': '$order', 
        'order_detail_id': '$orderdetail'
      }, 
      'Product': {
        '$addToSet': '$products'
      }
    }
  }, {
    '$group': { //STEP 5: PUSH PRODUCT,ORDER AND ORDERDETAILS INTO ARRAY,GROUPBY CUSTOMER
      '_id': {
        'customer_id': '$_id.customer_id', 
        'user_id': '$_id.user_id'
      }, 
      'Order': {
        '$push': {
          'Product': '$Product', 
          'orderDetail': '$_id.order_detail_id', 
          'order': '$_id.order_id'
        }
      }
    }
  }
]


//4.Viết câu lệnh sql của mongoDB trả về tất cả các sản phẩm và ảnh của mỗi sản phẩm. có limit 0 – 20, có where like name

db.products.aggregate(
  [
  {//Step1: join products with productsImages where products._id = productsImages.productId
    '$lookup': {
      'from': 'productsImages', 
      'localField': '_id', 
      'foreignField': 'productId', 
      'as': 'ProductId'
    }
  }, {//step 2: limit 20 output
    '$limit': 20
  }, {
    '$match': {//step 3:(find iphone) with regex /phone/
      'name': new RegExp('phon')
    }
  }
]
)



