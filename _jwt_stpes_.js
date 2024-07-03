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
  credential: true
}));
03. client side axios setting 
*/
