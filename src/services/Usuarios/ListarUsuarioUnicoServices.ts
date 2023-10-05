import prismaClient from '../../prismaclient'

interface UsuarioUnico {
    id: string
}

class ListarUsuarioUnicoServices {
    async execute({id}: UsuarioUnico){
    
      const resposta = await prismaClient.user.findUnique({
        where:{
            id: id
        },
        select:{
            id: true,
            nome: true,
            email: true
        }
      })
         return resposta
    }
}

export { ListarUsuarioUnicoServices }