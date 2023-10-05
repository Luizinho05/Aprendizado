import prismaClient from '../../prismaclient'

class ListarUsuariosServices {
    async execute() {
        const usuarios = await prismaClient.user.findMany({})
        return (usuarios)
    }
}

export { ListarUsuariosServices }