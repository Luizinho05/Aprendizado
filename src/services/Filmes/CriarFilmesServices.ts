import prismaClient from '../../prismaclient'

interface CriarFilmes {
    nome: string
    descricao: string
    lancamento: string
    categoriaId: string
}

class CriarFilmesServices {
    async execute ({
    nome,
    descricao,
    lancamento,
    categoriaId
    }:CriarFilmes){
     if (!nome || !descricao || !lancamento || !categoriaId){
        throw new Error('Campos em Branco não são permitidos')
     }

     await prismaClient.filmes.create({
        data:{
            nome: nome,
            descricao: descricao,
            lancamento: lancamento,
            categoriaId: categoriaId
        }
     })
     return {dados: 'Filme registrado com sucesso!'}
    }
}

export { CriarFilmesServices }