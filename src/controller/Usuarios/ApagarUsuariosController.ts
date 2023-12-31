import { Request, Response } from 'express'
import { ApagarUsuariosServices } from '../../services/Usuarios/ApagarUsuariosServices'

class ApagarUsuariosController {
     async handle(req: Request, res: Response){
     const { deletar } = req.body
     const apagarUsuariosServices = new ApagarUsuariosServices()
     const apagar = await apagarUsuariosServices.execute({
          deletar
     })
     return res.json(apagar)
     }
}

export { ApagarUsuariosController }