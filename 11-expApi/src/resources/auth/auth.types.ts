import { User } from "@prisma/client";

export type SingupDTO =

  /*
    #swagger.description = 'Objeto de cadastro de usuário'
    #swagger.properties['email'] = { type: 'string', description: 'Email do usuário' }
    #swagger.properties['name'] = { type: 'string', description: 'Nome do usuário' }
    #swagger.properties['password'] = { type: 'string', description: 'Senha do usuário' }
  */

  Pick<User, "email" | "name" | "password">;

export type LoginDTO =

  /*
    #swagger.description = 'Objeto de login de usuário'
    #swagger.properties['email'] = { type: 'string', description: 'Email do usuário' }
    #swagger.properties['password'] = { type: 'string', description: 'Senha do usuário' }
  */


  Pick<User, "email" | "password">;
