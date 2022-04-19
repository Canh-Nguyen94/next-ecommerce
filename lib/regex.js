export const validEmail = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
 );

 export const validPhone= new RegExp(
    /^[+84|84|0]+(3|5|7|8|9|1[2|6|8|9])+([0-9]{8})\b/g
 )
 export const validPassword = new RegExp("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$");

export const validUser = new RegExp(
"^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$"
)
 