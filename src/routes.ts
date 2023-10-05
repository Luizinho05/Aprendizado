import { Router } from 'express'

//Criar
import { CriarUsuariosController } from './controller/Usuarios/CriarUsuariosController'
import { CriarFilmesController } from './controller/Filmes/CriarFilmesController'

//Listar
import { ListarUsuariosController } from './controller/Usuarios/ListarUsuariosController'
import { ListarUsuarioUnicoController } from './controller/Usuarios/ListarUsuarioUnicoController'

//Apagar
import { ApagarUsuariosController } from './controller/Usuarios/ApagarUsuariosController'

//Alterar
import { AlterarUsuarioController } from './controller/Usuarios/AlterarUsuarioController'

//Autenticar
import { AutenticarUsuarioController } from './controller/Usuarios/AutenticarUsuarioController'

//Categorias
import { CriarCategoriasController } from './controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './controller/Categorias/ListarCategoriasController'

import { isAutenticado } from './middleware/isAutenticado'
const router = Router()

//Usuários
router.post('/CriarUsuarios', new CriarUsuariosController().handle)
router.post('/AutenticarUsuario', new AutenticarUsuarioController().handle)
router.get('/ListarUsuarios', isAutenticado, new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', isAutenticado, new ListarUsuarioUnicoController().handle)
router.put('/AlterarUsuario', isAutenticado, new AlterarUsuarioController().handle)
router.delete('/DeletarUsuarios', isAutenticado, new ApagarUsuariosController().handle)

//Filmes
router.post('/CriarFilmes', isAutenticado, new CriarFilmesController().handle)


//Categorias
router.post('/CriarCategorias', isAutenticado, new CriarCategoriasController().handle)
router.get('/ListarCategorias', isAutenticado, new ListarCategoriasController().handle)

export { router }