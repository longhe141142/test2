
/*Viết câu lệnh sql trả về tất cả thông tin về đơn hàng, chi tiết đơn hàng, chi tiết sản phẩm trong đơn hàng của mỗi customer. 
*/
select odDetail.Id as order_dtail_id,
odDetail.ProductId,
odDetail.Price,
odDetail.Tax,
CUSOD.* 
from ORDER_DETAIL 
as odDetail 
INNER JOIN 
(select od.Id as OrderId,
od.CustomerId,
cus.UserID,
cus.PaymentMethod 
from FirsProject_F11_N12.ORDER as od ,
CUSTOMER as cus
 where 
 cus.Id  = od.CustomerId )
 AS CUSOD 
 on odDetail.OrderId = CUSOD.ORDERID

/*Viết câu lệnh select tất cả users (có cả thông tin customer của mỗi user)
*/
 select CUSTOMER.Id as cusId,
 USER.Id as user_Id,
 CUSTOMER.PaymentMethod,
 CUSTOMER.IsActive,
 USER.UserName,
 USER.Password 
 from CUSTOMER 
 INNER JOIN USER 
 on CUSTOMER.UserId = USER.Id

/*Viết câu lệnh sql trả về tất cả các sản phẩm và ảnh của mỗi sản phẩm. có limit 0 – 20, có where like name
*/


SELECT  *  FROM   
(select ProductImages.Id as imageId, 
PRODUCT.Id as proId ,
ProductImages.URL,
ProductImages.name  
from ProductImages 
INNER JOIN PRODUCT 
on 
ProductImages.ProductId = PRODUCT.Id 
AND 
ProductImages.Name LIKE '%iphone%' ) as t
LIMIT 20