import prismaClient from '../../prismaclient'

class ListarCategoriasServices {
    async execute(){
        const resposta = await prismaClient.categorias.findMany({})
        return (resposta)
    }
}

export { ListarCategoriasServices }