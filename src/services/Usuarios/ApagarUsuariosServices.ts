import prismaClient from '../../prismaclient'

interface DeletarUsuario {
    deletar: string
}

class ApagarUsuariosServices {
   async execute({
    deletar
   }: DeletarUsuario){
       
       await prismaClient.user.delete({
        where:{
            id: deletar
        }
       })
        return {dados: 'Dados deletados com sucesso!'}
   }
}

export { ApagarUsuariosServices }