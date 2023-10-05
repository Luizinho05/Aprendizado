import { Request, Response } from 'express'
import { CriarUsuariosServices } from '../../services/Usuarios/CriarUsuariosServices'

class CriarUsuariosController {
    async handle(req: Request, res: Response) {
        const { nome, email, password } = req.body

        const criarUsuariosServices = new CriarUsuariosServices()
        const usuarios = await criarUsuariosServices.execute({
            nome,
            email,
            password
        })
        return res.json(usuarios)
    }
}

export { CriarUsuariosController }