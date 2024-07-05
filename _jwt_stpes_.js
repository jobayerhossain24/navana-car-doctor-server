/* 
01. install jsonwebtoken  (in server)
02. jwt.sign (payload, secret, {expiresIn:})
03. token send to client 
*/
/* 
How to Store token in the client side 
01. Memory --> ok type
02. local storage --> ok type
03. cookies: http only
*/

/* 
01. set cookies with http only. for development secure: false, 
02. cors
app.use(cors({
  origin:['http://localhost:5173/'],
  credentials: true
}));
03. client side axios setting 
04. in axios set withCredentials: true
*/
/* 
01. to send cookies from the client make sure you added withCredentials true for the api call using axios 
02. use cookie parser as middleware
*/
-------------------------- 

/* 
Make API SECURE 
** The Person who should have 
* Concept: 
01. assign two tokens for each person (access token, refresh token)
02. access token contains: user identification (email, role, etc.) valid for a shorter duration 
03. Refresh token is used: to recreate an access token that was expired. 
04. if refresh is invalid then logout the user. 

-------------------- 
01. jwt --> json web token
02. generate a token by using jwt.sign
03. create api set to cookie. http only, secure, sameSite 
04.from client side: axios withCredentials true 
05. cors setup origin and credentials: true

---------------------- 
01. for secure api calls 
02. server side: install cookie parser and use it as a middleware 
03. req.cookies
04. on the client side: make api call using axios withCredentials: true 

*/
