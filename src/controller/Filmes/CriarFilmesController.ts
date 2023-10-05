import { Request, Response } from 'express'
import { CriarFilmesServices } from '../../services/Filmes/CriarFilmesServices'


class CriarFilmesController{
    async handle(req: Request, res: Response){
    const { nome, descricao, lancamento, categoriaId } = req.body
    
    const criarFilmesServices = new CriarFilmesServices()
    const filmes = await criarFilmesServices.execute({
        nome, 
        descricao,
        lancamento,
        categoriaId
    })
    return res.json(filmes)
    }
}

export { CriarFilmesController }