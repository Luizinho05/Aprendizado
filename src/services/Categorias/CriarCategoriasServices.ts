import prismaClient from '../../prismaclient'

interface Categorias{
    nome: string
}

class CriarCategoriasServices{
    async execute({nome}: Categorias){
        const resposta = await prismaClient.categorias.create({
            data: {
                nome: nome
            }
        })
        return resposta
    }
}

export {CriarCategoriasServices}