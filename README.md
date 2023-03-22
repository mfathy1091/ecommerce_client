#### NOTE
The API is deployed to a VPS server at: http://172.104.251.26/api

The admin Dashboard is hosted at https://mfathy.netlify.app/



---
## Authentication Design

#### 1) Login
* used JWT to create tokens.
![Screenshot](https://res.cloudinary.com/dztskndab/image/upload/v1679477191/github_ecommerce_server/login_flowchart_okt6i6.png)

#### 2) Accessing Protected Resources - With Expired AccessToken
-  A legal JWT must be added to HTTP Header if Client accesses protected resources.
- With the help of Axios Interceptors, React App can check if the accessToken (JWT) is expired (401), sends /refreshToken request to receive new accessToken and use it for new resource request.

![screenshot](https://res.cloudinary.com/dztskndab/image/upload/v1679477191/github_ecommerce_server/Access_Protected_Resources_-_with_expired_access_token_zljuhb.png)


---


###Starting the server locally (dev mode)

* go to: 'http://localhost:8000/admin/'