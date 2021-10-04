# API使用說明

## Product Listing - 取得產品清單
* GET  /product
### request
none
### response
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>result</td>
    <td>string</td>
		<td>狀態(ok/error)</td>
  </tr>
  <tr>
    <td>ret</td>
    <td>array</td>
		<td>產品列表</td>
  </tr>
</table>

### ret內容
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>name</td>
    <td>string</td>
		<td>產品名稱</td>
  </tr>
  <tr>
    <td>price</td>
    <td>integer</td>
		<td>產品價位</td>
  </tr>
  <tr>
    <td>image</td>
    <td>string</td>
		<td>圖片網址</td>
  </tr>
</table>

* response範例

```javascript
{
    "result": "ok",
    "ret": [
        {
            "name": "productA",
            "price": 10,
            "image": "img_01"
        },
        {
            "name": "productB",
            "price": 20,
            "image": "img_02"
        },
        {
            "name": "productC",
            "price": 20,
            "image": "img_03"
        }
    ]
}
```

## Product Details - 取得單一產品明細
* GET  /product/{id}
### request
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>id</td>
    <td>integer</td>
		<td>產品id</td>
  </tr>
</table>

### response
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>result</td>
    <td>string</td>
		<td>狀態(ok/error)</td>
  </tr>
  <tr>
    <td>ret</td>
    <td>object</td>
		<td>產品資訊</td>
  </tr>
</table>

### ret內容
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>name</td>
    <td>string</td>
		<td>產品名稱</td>
  </tr>
  <tr>
    <td>price</td>
    <td>integer</td>
		<td>產品價位</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
		<td>詳細說明</td>
  </tr>
  <tr>
    <td>image</td>
    <td>string</td>
		<td>圖片網址</td>
  </tr>
</table>

* response範例

```javascript
{
    "result": "ok",
    "ret": {
        "name": "productA",
        "price": 10,
        "description": "just a red ball",
        "image": "img_01"
    }
}
```

## Place Order - 建立訂單
* POST  /order
### request
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>product_id</td>
    <td>integer</td>
		<td>產品id</td>
  </tr>
	<tr>
    <td>buyer_name</td>
    <td>string</td>
		<td>購買人</td>
  </tr>
</table>

### response
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>result</td>
    <td>string</td>
		<td>狀態(ok/error)</td>
  </tr>
  <tr>
    <td>ret</td>
    <td>object</td>
		<td>訂單資訊</td>
  </tr>
</table>

### ret內容
<table>
  <tr>
    <td>字段</td>
		<td>類型</td>
		<td>描述</td>
    </tr>
	<tr>
    <td>order_id</td>
    <td>integer</td>
		<td>訂單編號</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>integer</td>
		<td>產品id</td>
  </tr>
  <tr>
    <td>buyer_name</td>
    <td>string</td>
		<td>購買人</td>
  </tr>
  <tr>
    <td>order_at</td>
    <td>datetime</td>
		<td>下訂時間</td>
  </tr>
  <tr>
    <td>status</td>
    <td>integer</td>
		<td>訂單狀態(1:成功/-1:失敗)</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>integer</td>
		<td>下訂數量</td>
  </tr>
</table>

* response範例

```javascript
{
    "result": "ok",
    "ret": {
        "order_id": 34,
        "product_id": "2",
        "buyer_name": "yj",
        "order_at": "2021-09-07T12:11:23+08:00",
        "status": 1,
        "quantity": "1"
    }
}
```