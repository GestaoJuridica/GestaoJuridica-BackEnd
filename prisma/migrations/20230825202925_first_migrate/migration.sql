-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cellNumber" INTEGER NOT NULL,
    "logadouro" TEXT NOT NULL,
    "photos" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "courtProcess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courtType" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
