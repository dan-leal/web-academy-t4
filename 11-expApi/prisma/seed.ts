import { PrismaClient } from "@prisma/client";
import { UserTypes } from "../src/resources/userType/userType.constants";

const prisma = new PrismaClient();

async function main() {
  return await prisma.userType.createMany({
    data: [
      { id: UserTypes.ADMIN, label: "admin" },
      { id: UserTypes.USER, label: "client" },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
