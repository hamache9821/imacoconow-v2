# 今ココなう（仮）config仕様書

## 概要
これは今ココなう（仮）のconfig仕様書です。  
内容は作者の気分によって予告なく変更される可能性があります。  

## サーバ本体設定  

### listen_type  
> 起動するサーバタイプを指定します。

#### type : string[]  

#### 有効文字  
* http  
* https  


### http_listen_port  
> httpのリッスンポートを指定します。

#### type : string  

#### 有効文字  
* 0-65535の数字


### https_listen_port  
> httpsのリッスンポートを指定します。

#### type : string  

#### 有効文字  
* 0-65535の数字



### https_private_key  
> 

#### type : string  

#### 有効文字  



### https_certificate  
> 

#### type : string[]  

#### 有効文字  



### dbHost  
> 

#### type : string  

#### 有効文字  



### dbName  
> 

#### type : string  

#### 有効文字  



### hashSecretKey  
> 

#### type : string  

#### 有効文字  



### googlemap_api_key  
> 

#### type : string  

#### 有効文字  



### service_name  
> 

#### type : string  

#### 有効文字  



### locapos_client_id  
 > 

#### type : string  

#### 有効文字  



### locapos_redirect_url  
 > 

#### type : string  

#### 有効文字  



### latest_refresh_time  
> 位置情報APIを更新する時間を秒で指定します。

#### type : number  

#### 有効文字  



### nickname_saveto_db  
 > 

#### type : bool  

#### 有効文字  



### nickname_convert  
 > 

#### type : bool  

#### 有効文字  



### nickname_cache_size  
 > 

#### type : number  

#### 有効文字  




### nickname_cache_ttl  
 > 

#### type : number  

#### 有効文字  



### use_relay_service  
 > 

#### type : bool  

#### 有効文字  



### relay_service_url  
 > 

#### type : string[]  

#### 有効文字  



### relay_service_refresh_time1  
 > 

#### type : number  

#### 有効文字  



### relay_service_refresh_time2  
 > 

#### type : number  

#### 有効文字  


