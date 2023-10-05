import { Request, Response } from 'express'
import { AutenticarUsuarioServices } from '../../services/Usuarios/AutenticarUsuarioServices'

class AutenticarUsuarioController{
    async handle(req: Request, res: Response){
       const {email, password} = req.body
      
       const autenticarUsuarioServices = new AutenticarUsuarioServices()
       const autenticar = await autenticarUsuarioServices.execute({
        email,
        password
       })
       return res.json(autenticar)
    }
}

export { AutenticarUsuarioController }