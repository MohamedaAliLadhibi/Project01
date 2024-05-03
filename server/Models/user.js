const {users}=require('../database/index.js')


const getUsers=()=>{
    return users.findAll()
}
const   createUser=(data)=>{
    return  users.create(data)
 }
 const updateUser = (Userid, body) => {
     return users.update(body, { where: { id: Userid } });
 }
 
 const deleteUser=(Userid)=>{
 users.destroy({where:{id:Userid}})
 }
 const getoneUser=(Userid)=>{
 return users.findOne({where:{id:Userid}})
 }

 module.exports={
    getUsers:getUsers,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    getoneUser:getoneUser
}