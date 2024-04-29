/* Usando file system 
y Template String
`:ALT + 96
*/

const fs = require('fs');

const userName = 'Simba';

//'Nombre de usuario: '+userName
//Template String
// `:ALT + 96

fs.writeFile('text-data.txt', `Nombre de usuario: ${userName}`,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('archivo creado satisfactoriamente');
});