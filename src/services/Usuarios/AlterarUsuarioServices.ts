import prismaClient from '../../prismaclient'

interface AlterarUsuario {
    id:          string
    alteraNome:  string
    alteraEmail: string
}

class AlterarUsuarioServices {
    async execute({id, alteraNome, alteraEmail}: AlterarUsuario){
      
         await prismaClient.user.update({
            where:{
                id: id
            },
            data:{
                nome: alteraNome,
                email: alteraEmail
            }
        })
        return {dados: 'Dados Alterados com sucesso!'}
    }
}

export { AlterarUsuarioServices }