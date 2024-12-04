import { User } from "@prisma/client";

export type createUserDTO = Pick<
  User,
  "email" | "name" | "password" | "userTypeId"
>;

export type userDTO = Omit<User, "password">;
